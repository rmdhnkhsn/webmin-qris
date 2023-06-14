<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;
use PDF;
use Excel;
use Auth;
use App\Exports\ExcelExport;
use App\Exports\ExcelExportCSV;
use App\User;
use DB;
use Session;
use File;
use Illuminate\Support\Facades\Crypt;

date_default_timezone_set('Asia/Jakarta');

class GlobalController extends Controller
{
    public function mainAction(Request $request,$type)
    {
        switch($type){
            case 'change_password' :
                return $this->change_password($request);
            break;
            case 'check_expired_password' :
                return $this->check_expired_password($request);
            break;
            case 'act_logout' :
                return $this->act_logout($request);
            break;
            case 'profil_merchant' :
                return $this->profil_merchant($request);
            break;
            case 'profil_merchant_store' :
                return $this->profil_merchant_store($request);
            break;
        }
    }

    public function change_password(Request $request)
    {

        $data = User::find(Auth::user()->user_id);

        $checkPassword = $this->hashPasswordCheck($request->input('oldPassword'),$data->password);
        $checkPasswordNew = $this->hashPasswordCheck($request->input('newPassword'),$data->password);
        $checkPasswordConfirm = $this->hashPasswordCheck($request->input('confirmPassword'),$data->password);

        if ($checkPasswordNew != $checkPasswordConfirm) {
            return response()->json([
                'rc' => 99,
                'rm' => 'Password Baru dan Ketik Ulang Password Baru Tidak Sama.'
            ]);
        }
        if ($checkPassword == $data->password) {

            if (!preg_match('/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/',$request->input('newPassword')))
            {
                return response()->json([
                    'rc' => 99,
                    'rm' => 'Aturan Password Tidak Sesuai !'
                ]);
            }

            $checkHistoryPassword = DB::table('password_history')
            ->where('user_admin',Auth::user()->user_id)
            ->limit(6)
            ->orderByDesc('crtdt')
            ->get();
            
            foreach ($checkHistoryPassword as $k => $v) {
                $checkPasswordOld = $this->hashPasswordCheck($request->input('newPassword'),$v->password);
                if ($checkPasswordOld == $v->password) {
                    return response()->json([
                        'rc' => 99,
                        'rm' => 'Password sudah pernah digunakan, gunakan passsword lain.'
                    ]);
                }
            }

            $checkSame = $this->hashPasswordCheck($request->input('newPassword'),$data->password);
            if ($checkSame == $data->password) {
                return response()->json([
                    'rc' => 99,
                    'rm' => 'Password harus berbeda dengan password sebelumnya.'
                ]);
            }

            $data->password = $this->hashPassword($request->input('newPassword'));
            $data->date_password = date('Y-m-d');
            $data->save();

            DB::table('password_history')->insert([
                'password' => $this->hashPassword($request->input('oldPassword')),
                'crtdt' => date('Y-m-d'),
                'user_admin' => Auth::user()->user_id
            ]);

            $event = "Ubah Password User ".$data->username;
            // $this->auditTrail($event,"User Admin");

            return response()->json([
                'rc' => 0,
                'rm' => 'Berhasil Merubah Password !'
            ]);
        }
        else{
            return response()->json([
                'rc' => 99,
                'rm' => 'Password Lama Tidak Sesuai !'
            ]);
        }

    }
    public function check_expired_password(Request $request)
    {
        $check = DB::selectOne('SELECT CURRENT_DATE - date_password + 1 AS days
        FROM users
        where user_id = ?',[Auth::user()->user_id]);

        if ($check->days > 60) {
            return response()->json([
                'rc' => 99,
                'rm' => 'Change Password'
            ]);
        }else{

        }

        return response()->json([
            'rc' => 0,
            'rm' => 'success'
        ]);

    }
    public function act_logout(Request $request)
    {

        $event = "Logout User ID:".Auth::user()->user_id;
        // $this->auditTrailLog($event,"Logout Log",'',Auth::user()->user_id,'');

        Session::regenerate();
        Auth::logout();
        return response()->json([
            'rc' => 0,
            'rm' => 'success'
        ]);

    }

    public function logoutGet()
    {
        $event = "Logout User ID:".Auth::user()->user_id;
        // $this->auditTrailLog($event,"Logout Log",'',Auth::user()->user_id,'');

        Session::regenerate();
        Auth::logout();
        return redirect('/login');
    }

    public function sessionTheme(Request $request)
    {
       Session::put('theme', $request->input('theme'));
       return response()->json([
            'rc' => 1,
            'rm' => $request->input('theme')
        ]);

    }

    public function mainRef(Request $request,$type)
    {
        switch($type){

            case 'merchant' :
                $check = DB::table('users')->select('mid')->where('role_id','MERCHANT_OPR')->get()->toArray();
                $temp = [];

                foreach ($check as $key => $value) {
                    array_push($temp,"'".$value->mid."'");
                }

                if($request->input('src_by')){
                    $src = "'".$request->input('src_by')."'";
                    $temp = \array_diff($temp, [$src]);
                }

                $arr_check = implode(",",$temp);
                $datas = \DB::select("SELECT * FROM merchant");

            break;

            case 'tax' :
                $datas = \DB::select("SELECT * from reff_tax");
            break;

            case 'outlet' :
                $datas = \DB::select("SELECT * from outlet m where mid = ?",[$request->input('src_by')]);

            break;

            case 'ingredient' :
                $datas = \DB::select("SELECT * from ingredients i join reff_unit ru on ru.unit_id = i.unit_id where i.is_active is true and merchant_id = ?",[Auth::user()->merchant_id]);
            break;

            case 'ref_pengguna':
                $datas = \DB::select("SELECT * from users where users.merchant_id = ? and user_id not in(
                    SELECT users.user_id from outlet_users
                    right join users on users.user_id = outlet_users.user_id
                    where outlet_id = ?) order by users.user_id",[Auth::user()->merchant_id,\Crypt::decryptString($request->input('src_by'))]);
            break;


            case 'edc' :
                $datas = \DB::select("SELECT * from edc m
                where outlet_id is null and edc_model_id = ?",[$request->input('src_by')]);

            break;

        }

        return response()->json([
            'rc' => 0,
            'rm' => $datas
        ]);
    }

    public function exportData(Request $request, $typeExport,$id) {
        switch ($id) {
            case 'generate_qr_code' :
                $path = public_path('qrcode');
                File::cleanDirectory($path);

                $view = 'export.'.$typeExport.'_qr_code';
                $nameFile = 'toko-'.date('d-m-Y').'.'.$typeExport;
                $customPaper = 'a4';
                $paperType = 'potrait';
                $param['data_toko'] = DB::table('outlet')
                ->join('merchant','merchant.mid','outlet.mid')
                ->where('outlet_id',$request->outlet_id)->first();
                $param['data_qr'] = $this->generateQR($param['data_toko'], 0);
            break;

            case 'generate_qr_code_table' :
                $path = public_path('qrcode');
                File::cleanDirectory($path);

                $view = 'export.'.$typeExport.'_qr_code_table';
                $nameFile = 'table-'.date('d-m-Y').'.'.$typeExport;
                $customPaper = 'a6';
                $paperType = 'potrait';
                $param['data_toko'] = DB::table('tables')
                ->join('outlet','outlet.outlet_id','tables.outlet_id')
                ->where('table_id',$request->table_id)->first();
                $param['data_qr'] = $this->generateQRTable($param['data_toko'], 0);
            break;

            case 'generate_qr_code_outlet' :
                $path = public_path('qrcode');
                File::cleanDirectory($path);

                $view = 'export.'.$typeExport.'_qr_code_outlet';
                $nameFile = 'outlet-'.date('dmYHis').'.'.$typeExport;
                $customPaper = 'a6';
                $paperType = 'potrait';
                $param['data_outlet'] = DB::table('outlet')
                ->where('outlet_id',\Crypt::decryptString($request->outlet_id))->first();
                $param['data_qr'] = $this->generateQROutlet($param['data_outlet'], 0);
            break;

        }

        if ($typeExport == 'pdf') {
            $pdf = PDF::loadView($view,$param)->setPaper($customPaper, $paperType);
            $pdf->getDomPDF()->set_option("enable_php", true)->set_option("enable_javascript", true);
            return $pdf->stream($nameFile);
        }
        elseif ($typeExport == 'xlsx') {
            return Excel::download(new ExcelExport($param), $nameFile);
        }
        elseif ($typeExport == 'csv') {
            return Excel::download(new ExcelExportCSV($param), $nameFile);
        }
    }

    public function profil_merchant(Request $request)
    {
        $data['main'] = DB::table('merchant')->where('merchant_id',Auth::user()->merchant_id)->first();

        return response()->json([
            'rc' => 0,
            'rm' => "sukses",
            'data' => $data
        ]);
    }
    public function profil_merchant_store(Request $request)
    {
        $cGlobal = new Controller();
        $tmpNew = [];
        $tmpRequest = $request->except(['type','act','id']);
        foreach ($tmpRequest as $key => $v) {
            $newKey = str_replace("_profil","",$key);
            $tmpNew[$this->dashToCamelCase($newKey)] = $cGlobal->clearSeparator($v);
        }

        $form = array_merge($tmpNew);

        if($request->hasFile('logo_profil')){
            $destination_path = public_path('gallery');
            $files = $request->file('logo_profil');
            $name = $cGlobal->cleanStringImg($files->getClientOriginalName());

            $setSize = 0.5 * (1024*1024);
            if ($files->getSize() > $setSize) {
                return response()->json([
                    'rc' => 99,
                    'rm' => 'Size File Maksimal 500 kb'
                ]);
            }

            $exceptFile = ['jpg','jpeg','png','JPG','JPEG','PNG'];


            if (!in_array($files->getClientOriginalExtension(), $exceptFile))
            {
                return response()->json([
                    'rc' => 99,
                    'rm' => 'file tidak diperbolehkan!'
                ]);
            }


            $filename = date('dmYhis').$name;
            $upload_success = $files->move($destination_path, $filename);
            $form['logo'] = $filename;           
        }
        // else{
        //     $form['logo'] = 'logo.png';           

        // }

        $url = env('API_URL').'merchants/'.Auth::user()->merchant_id;
        $response = \Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])
        ->withOptions(['verify' => false])
        ->patch($url, $form);

        // $cGlobal->auditTrailLogAPI($url,"API LOG",$response->status(),json_encode($form),json_encode($response->json()),'Profil Merchant','Data Merchant');

        $rc = ($response->status() == 500) ? 99 : 0;
        $rm = ($response->status() == 500) ? 'Terjadi Kesalahan' : 'Berhasil';

        DB::commit();
        return response()->json([
            'rc' => $rc,
            'rm' => $rm
        ]);
    }

}
