<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use Request as Req;
use Auth;
use DB;
use Illuminate\Support\Str;
use Endroid\QrCode\QrCode;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Log;
use Yajra\DataTables\DataTables;
date_default_timezone_set('Asia/Jakarta');

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function dashToCamelCase($string, $capitalizeFirstCharacter = false) {
        $str = str_replace('_', '', ucwords($string, '_'));
        if (!$capitalizeFirstCharacter) {
           $str = lcfirst($str);
        }
        return $str;
    }

    public function bsGetView($view,$param)
    {
        if (Req::ajax()) {
            return view('onlyContent')->nest('child', $view,$param);
        }else {
            return view('main')->nest('child', $view,$param);
        }
  
    }

    public function decryptId($request)
    {
        try {
            if ($request->id) {
                $decId = Crypt::decryptString($request->id);

                $request->merge([
                    'id' => $decId,
                ]);
            }

            if ($request->get_id) {
                $decId = Crypt::decryptString($request->get_id);

                $request->merge([
                    'get_id' => $decId,
                ]);
            }
            return ['rc' => 0, 'data'=> $request];
        } catch (DecryptException $e) {
            return ['rc' => 0, 'data'=> $request];
        }
    }

    public function decryptIdOnly($id)
    {
        try {
            $decId = Crypt::decryptString($id);
            return $decId;

        } catch (DecryptException $e) {
            return ['rc' => 999, 'data'=> 'Enc Failed'];

        }
    }

    public function hashPassword($password)
    {
        $iterations = 310000;
        $salt = openssl_random_pseudo_bytes(16);
        $hash_password = hash_pbkdf2('sha256', $password, $salt,$iterations,0, false);
        $salt = bin2hex($salt);
        return $salt.$hash_password;
    }

    public function hashPasswordCheck($passwordInput,$passwordUser)
    {
        $salt = substr($passwordUser,0,32);
        $saltHex = hex2bin($salt);

        $iterations = 310000;
        $hash_password = hash_pbkdf2('sha256', $passwordInput, $saltHex,$iterations,0, false);
        return $salt.$hash_password;
    }



    
    public function checkAccessData($type)
    {
        $check = 1;
        return $check;
    }


    public function convertDate($date)
    {
        return date('Y-m-d',strtotime($date));
    }
    public function convertDateYear($date)
    {
        return date('Y',strtotime($date));
    }
    public function convertDateMonth($date)
    {
        return date('m',strtotime($date));
    }

  
  
    public function responseData($code, $message){
        return ['code' => $code, 'message'=> $message];
    }

  
    public function rupiah($nominal)
    {
        return "Rp ".number_format($nominal,0,",",".");
    }


    public function cleanString($string) {
        $string = str_replace('(', '', $string); 
        $string = str_replace(')', '', $string); 

        return preg_replace('|[^a-zA-Z0-9,()%@/_ .-]|u', '', $string);
     }

     public function cleanStringImg($string) {
        $string = str_replace(' ', '', $string); 
        $string = str_replace('(', '', $string); 
        $string = str_replace(')', '', $string); 

        return preg_replace('|[^a-zA-Z0-9,()%@/_ .-]|u', '', $string);
     }

    public function clearSeparator($nominal)
    {
        if($nominal){
            $nom = str_replace('.','',$nominal);
            $nom = str_replace(',','.',$nom);    
        }else{
            $nom = 0;
        }

        return $nom;
    }

    public function numFormat($nominal)
    {
        return number_format($nominal,0,",",".");
    }

    public function generateQR($data)
    {
        $toko_name = Str::of($data->outlet_nm)->slug('_');
        $fileName = $data->outlet_id. '_' . $toko_name . '_qrcode' . '.png';


        $qrCode = new QrCode();
        $pathImgFile = public_path('qrcode') . "/" . $fileName;


        $d_json = [
            'outlet_id' => Crypt::encryptString($data->outlet_id),
            'outlet_nm' => $data->outlet_nm,
            'mid' => $data->mid
        ];

        $enc_data = Crypt::encryptString($data->outlet_id);
        $qrCode->setText($enc_data)
            ->setSize(600)
            ->setPadding(30)
            ->setErrorCorrection('high')
            ->setForegroundColor(array('r' => 0, 'g' => 0, 'b' => 0, 'a' => 0))
            ->setBackgroundColor(array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0))
            // Path to your logo with transparency
            ->setLogo(public_path('/img/') . "bank_ntt.png")
            // Set the size of your logo, default is 48
            ->setLogoSize(150)
            ->setImageType(QrCode::IMAGE_TYPE_PNG);
        $qrCode->save($pathImgFile);

        return $fileName;

    }

    public function generateQRTable($data)
    {
        $toko_name = Str::of($data->outlet_nm)->slug('_');
        $fileName =  $data->table_id. '_' .$data->outlet_id. '_' . $toko_name . '_qrcode' . '.png';


        $qrCode = new QrCode();
        $pathImgFile = public_path('qrcode') . "/" . $fileName;

        $dataQR = url('/').'/list_menu_outlet/'.$data->outlet_id;

        $qrCode->setText($dataQR)
            ->setSize(600)
            ->setPadding(30)
            ->setErrorCorrection('high')
            ->setForegroundColor(array('r' => 0, 'g' => 0, 'b' => 0, 'a' => 0))
            ->setBackgroundColor(array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0))
            // Path to your logo with transparency
            ->setLogo(public_path('/img/') . "logo.png")
            // Set the size of your logo, default is 48
            ->setLogoSize(150)
            ->setImageType(QrCode::IMAGE_TYPE_PNG);
        $qrCode->save($pathImgFile);

        return $fileName;

    }

    public function generateQROutlet($data)
    {
        $toko_name = Str::of($data->outlet_nm)->slug('_');
        $fileName =  $data->outlet_id. '_' . $toko_name .'_qrcode' . '.png';


        $qrCode = new QrCode();
        $pathImgFile = public_path('qrcode') . "/" . $fileName;

        // $dataQR = url('/').'/pelanggan_pesan/'.$data->outlet_id;

        $url = env('API_URL_WEB')."auth/generate-token-outlet/".$data->outlet_id;
        // $url = env('API_URL2')."bill/kitchen?outletId=3&done={$request->done}";

        $response = \Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
            ])
        ->withOptions(['verify' => false])
        ->get($url);

        $this->auditTrailLogAPI($url,"API LOG",$response->status(),'',json_encode($response->json()),'TOKEN QR','TOKEN QR');

        $dataRes = $response->json();
        $setId = $dataRes['token'];
        $dataQR = url('/').'/pelanggan_pesan?id='.$setId;

      


        $qrCode->setText($dataQR)
            ->setSize(600)
            ->setPadding(30)
            ->setErrorCorrection('high')
            ->setForegroundColor(array('r' => 0, 'g' => 0, 'b' => 0, 'a' => 0))
            ->setBackgroundColor(array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0))
            // Path to your logo with transparency
            ->setLogo(public_path('/img/') . "logo.png")
            // Set the size of your logo, default is 48
            ->setLogoSize(150)
            ->setImageType(QrCode::IMAGE_TYPE_PNG);
        $qrCode->save($pathImgFile);

        return $fileName;

    }

    public function sendMail($view,$data)
    {

        Mail::send($view, $data, function ($message) use ($data) {
            $dataEmail = \DB::table('config_email')->first();
            $message->from($dataEmail->from, $dataEmail->name_sender);
            $message->to($data['sendto']);
            $message->subject($data['subject']); 
        });

    }

}
