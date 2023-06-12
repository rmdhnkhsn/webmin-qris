<?php

namespace App\Models;

use Auth;
use DB;
use App\Http\Controllers\Controller;
use Yajra\DataTables\DataTables as DT;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use App\Imports\ImportDebiturBu;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class dataUserModel extends Model
{
    protected $primaryKey = 'user_id';
    protected $table = 'users';
    public $timestamps = false;
    protected $keyType = 'string';

    public function initData($request,$route)
    {
        // INIT DB
        $data['title'] = 'User Admin';
        $data['actButton'] = ['edit','delete'];
        $data['tableHead'] = 
        array(
            ["Tanggal","all","reg_date"],
            ["Username","all","username"],
            ["E-Mail","all","email"],
            ["Telepon","all","phone_no"],
            ["KTP","none","ktp"],
            ["Alamat","all","address"],
            ["Status","all","status"],
            ["Act","all","action"]

        ); 

        $data['db'] = $this->table;
        $data['db_key'] = $this->primaryKey;
        $data['route'] = $route;

        foreach($data['tableHead'] as $v){
            $arrHead[] = $v[2];
        }
        
        $data['head'] = implode(",",$arrHead);

        return $data;
    }

    public function getDT($request)
    {

        $dtable = DB::table("users")->orderBy("user_id","ASC")->get();
        
        $dt = DT::of($dtable);
        $dt->addColumn('status',function($data) {
            return ($data->user_status_id == 1) ? '<span class="badgeAktif">Aktif</span>':'<span class="badgeUnaktif">Tidak Aktif</span>';
        });

        $dt->editColumn('reg_date',function($data) {
            return date('d M Y',strtotime($data->reg_date));
        });

        return $dt;
    }

    public function exportData(Request $request)
    {
     
        $type = ($request->typeExport == "xlsx_zip") ? 'xlsx':$request->typeExport;
        $param['view'] = 'export.'.$type.'_'.$request->filename;
        $param['nameFile'] = $request->filename;
        $param['data'] = $this->exportQuery($request);
        $param['customPaper'] = 'a4';
        $param['paperType'] = 'potrait';
        return $param;
    }

  
    public function storeCustom($act,Request $request)
    {
        $cGlobal = new Controller();

        DB::beginTransaction();
        try{

            switch ($act) {
                case 'dataDetail':
                    return $this->dataDetail($request);
                break;
                case 'refDetail':
                    return $this->refDetail($request);
                break;
                case 'resetPassword':

                
                    $event = "Reset Password User";
                    // $cGlobal->auditTrail($event,"User");
                    $data = dataUserModel::find($request->id);
                    $data->password = $cGlobal->hashPassword('admin123');
                    $data->password_retry = 0;
                    $data->date_password = date('Y-m-d', strtotime("-62 days"));
                    $data->save();          
                    DB::commit();

                     return response()->json([
                        'rc' => 0,
                        'rm' => "Berhasil Reset Password"
                    ]);             
                    
                break;

                case 'blockUser':
                    $data = dataUserModel::find($request->id);
                    $data->user_status_id = 3;
                    $data->password_retry = 0;
                    $data->save();
                    // $cGlobal->auditTrail("Block User ID ".$request->id,"User");
                    DB::commit();
                    return response()->json([
                        'rc' => 0,
                        'rm' => "Berhasil Block Pengguna"
                    ]);  
                break;

                case 'aktifkUser':
                    $data = dataUserModel::find($request->id);
                    $data->user_status_id = 1;
                    $data->password_retry = 0;
                    $data->save();
                    // $cGlobal->auditTrail("Aktifkan User ID ".$request->id,"User");
                    DB::commit();
                    return response()->json([
                        'rc' => 0,
                        'rm' => "Berhasil Aktifkan Pengguna"
                    ]);  
                break;

                case 'storeUpdate':

                    
                    $cGlobal = new Controller();
                    $dataInject = [];
                    $dataInjectNew = [];
                    $id = ($request->id === 'new') ? 0:$request->id;
            
                    $tmpNew = [];
                    $tmpRequest = $request->except(['type','act','id']);
                    foreach ($tmpRequest as $key => $v) {
                        $tmpNew[$key] = $cGlobal->cleanString($v);
                    }
            
                    $form = array_merge($tmpNew,$dataInjectNew);   
                    

                    if ($request->id === 'new') {

                        $getMaxId = \DB::table('users')->max('user_id');

                        $addData = [
                            'user_id' => $getMaxId+1,
                            'user_status_id' => 1,
                            'reg_date' => date('Y-m-d H:i:s'),
                            'username' => $request->username,
                            'email' => $request->email,
                            'user_nm' => $request->user_nm,
                            'password' => $cGlobal->hashPassword('admin123'),
                            'date_password' => date('Y-m-d', strtotime("-62 days")),
                            'password_retry' => 0,
                            'ktp' => $request->ktp,
                            'phone_no' => $request->phone_no,
                            'address' => $request->address,

                        ];

                        DB::table('users')->insert($addData);

                    } else {

                        $updateData = [
                            'user_id' => $request->id,
                            'username' => $request->username,
                            'email' => $request->email,
                            'user_nm' => $request->user_nm,
                            'ktp' => $request->ktp,
                            'phone_no' => $request->phone_no,
                            'address' => $request->address,

                        ];

                        DB::table('users')->where('user_id', $request->id)->update($updateData);
                    }
                    

                break;

               
            }

        DB::commit();
            return response()->json([
                'rc' => 0,
                'rm' => "sukses"
            ]);
        }
        catch (QueryException $e){

            if($e->getCode() == '23505'){
                $response = "Terjadi Duplikasi Data, Data Gagal Disimpan !";
            }else{
                $response = "Terjadi Kesalahan, Data Tidak Sesuai !";
            }

            DB::rollback();
            // $cGlobal->auditLogError($request->get('type'),$e->getMessage());
            DB::commit();
            \Log::warning($e->getMessage());

            return response()->json([
                'rc' => 99,
                'rm' => $response,
                // 'msg' => $e->getMessage()
            ]);
        }
    }
    
    // public function storeData(Request $request)
    // {
    //     $cGlobal = new Controller();
    //     $dataInject = [];
    //     $dataInjectNew = [];
    //     $id = ($request->id === 'new') ? 0:Crypt::decryptString($request->id);

    //     // VALIDATE
    //     $validator = Validator::make($request->all(),
    //     [
    //         'username' => 'required|unique:users,username,'.$id.',user_id',
    //         'email' => 'required|unique:users,email,'.$id.',user_id',
    //         'ktp' => 'required|unique:users,ktp,'.$id.',user_id'
    //     ],
    //     [
    //         'unique' => ':attribute sudah digunakan.',
    //         'required' => ':attribute Tidak Boleh Kosong.'
    //     ]);
    
    //     if ($validator->fails()) {
    //         $data['rc'] = 422;
    //         $data['rm'] = $validator->messages();
    //         return $data;
    //     }
    //     // VALIDATE 

        
    //     // JIKA DATA BARU
    //     if ($request->id === 'new') {
    //         $dataInjectNew = [
    //             'password' => $cGlobal->hashPassword('admin123'),
    //             'reg_date' => date('Y-m-d'), 
    //             'date_password' => date('Y-m-d'),
    //             // $datas->date_password = date('Y-m-d', strtotime("-62 days"));
    //             'password_retry' => 0,
    //             'user_status_id' => 1,
    //             'merchant_id' => Auth::guard('admin')->user()->merchant_id,
    //         ];  
    //     // GET DATA OLD IF EDIT 
    //     }else{

    //         // CHECK AUTH DATA
    //         $dataCheck = DB::table('users')->where('user_id',\Crypt::decryptString($request->id))->first();
    //         if ($dataCheck->merchant_id != Auth::guard('admin')->user()->merchant_id) {
    //             return response()->json([
    //                 'rc' => 99,
    //                 'rm' => "Tidak Memiliki Akses !"
    //             ]);
    //         }

    //         $data['oldData'] = DB::table($this->table)
    //         ->where('user_id',$id)
    //         ->get();        

    //         // CHECK CHANGE ROLE
    //         // if ($dataCheck->role_id !== $request->post('role_id') ) {
    //         //     $event = 'Change Privilege from '.$dataCheck->role_id.' to '.$request->role_id;

    //         //     if ($request->post('role_id') != 1 && $dataCheck->role_id == 1) {
    //         //         $cGlobal->auditTrailValue($event,"Downgrade Privilege",$this->table,json_encode($dataCheck),json_encode($data['oldData']));
    //         //     }else{
    //         //         $cGlobal->auditTrailValue($event,"elevation of privilege",$this->table,json_encode($dataCheck),json_encode($data['oldData']));
    //         //     }
    //         // }

           
    //     }

    //     $data['form'] = $request->except(['type','act','id']) + $dataInject + $dataInjectNew;
    //     $data['id'] = $request->id;
    //     $data['matchThese'] = array('user_id'=>$id);

    //     return $data;

    // }

    public function dataDetail(Request $request)
    {
        if ($request->id === 'new') {
            $data['main'] = $this->select('*')->first();
        }else{
            $data['main'] = $this->select('*')
            ->where('user_id',$request->id)
            ->first();
        }

        // $data['db_length'] = DB::select("SELECT column_name,character_maximum_length,data_type
        // from INFORMATION_SCHEMA.COLUMNS
        // where character_maximum_length is not null and table_name = ?",[$this->table]);
     
       
        return response()->json([
            'rc' => 0,
            'rm' => "sukses",
            'data' => $data
        ]);
    }
}
