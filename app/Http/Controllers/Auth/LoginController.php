<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
  
    protected $redirectTo = '/';
    
    public function loginView(Request $request)
    {
        
        return view('auth.login');
    }

    public function authenticate(Request $request)
    {
        $user = DB::table('users')
        ->where(function ($query) use($request) {
            $query->where('username', $request->input('username'))
                  ->orWhere('email', $request->input('username'));
        })->first();

        // dd($user);


        if (!is_null($user)) {
            $checkPassword = $this->hashPasswordCheck($request->input('password'),$user->password);
            if($checkPassword != $user->password){
                $data = User::find($user->user_id);

                $data->password_retry = $data->password_retry+1;
                $data->save();
        
                if ($data->password_retry > 6) {
                    $data = User::find($user->user_id);
                    $data->user_status_id = 3;
                    $data->save();

                    $event = 'Status User Telah di block, silahkan hubungi admin';
                    // $this->auditTrailLog($event,"Invalid Login Log",'',json_encode($user),'');

                    return response()->json([
                        'rc' => 0,
                        'rm' => 'Status User Telah di block, silahkan hubungi admin'
                    ]);
    
                }else{

                    $event = 'Username atau Password salah';
                    // $this->auditTrailLog($event,"Invalid Login Log",'',json_encode($user),'');

                    return response()->json([
                        'rc' => 0,
                        'rm' => 'Username atau Password salah'
                    ]);
                }
            }

            if ($user->user_status_id != 1){

                $event = 'Akun anda tidak aktif. Silahkan hubungi admin.';
                // $this->auditTrailLog($event,"Invalid Login Log",'',json_encode($user),'');

                return response()->json([
                    'rc' => 1,
                    'rm' => 'Akun anda tidak aktif. Silahkan hubungi admin.'
                ]);
            }

            Session::regenerate();
            Auth::loginUsingId($user->user_id);
            $event = 'Login User Success';
            // $this->auditTrailLog($event,"Login Log",'',json_encode($user),'');

            return response()->json([
                'rc' => 3,
                'rm' => 'success',
                'role' => $user->role_id,
                'api_token' => 123
            ]);


        } else {
            // login failed

            $event = 'User Tidak Di Izinkan, user :'.$request->input('username');
            // $this->auditTrailLog($event,"Invalid Login Log",'',json_encode($user),'');

            return response()->json([
                'rc' => 0,
                'rm' => 'User Tidak Di Izinkan'
            ]);
        }

    }

}
