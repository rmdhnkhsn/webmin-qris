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

class dataConfigModel extends Model
{
    protected $primaryKey = 'config_id';
    protected $table = 'config_map';
    public $timestamps = false;
    protected $keyType = 'string';

    public function initData($request,$route)
    {
        // INIT DB
        $data['title'] = 'Manajemen Config';
        $data['actButton'] = ['edit'];
        $data['tableHead'] = 
        array(
            ["No","all","no"],
            ["Config ID","all","config_id"],
            ["Config Value","all","config_val"],
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

        $dtable = \DB::select("SELECT config_id, config_map.no, config_map.config_val from config_map");

        $dt = DT::of($dtable);
        
        return $dt;
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

                        $getMaxId = \DB::table('config_map')->max('no');

                        $addData = [
                            'no' => $getMaxId+1,
                            'config_id' => $request->config_id,
                            'config_val' => $request->config_val,
                        ];

                        DB::table('config_map')->insert($addData);

                    } else {

                        $updateData = [
                            'no' => $request->no,
                            'config_id' => $request->config_id,
                            'config_val' => $request->config_val,
                        ];

                        DB::table('config_map')->where('config_id', $request->id)->update($updateData);
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

    public function dataDetail(Request $request)
    {
        if ($request->id === 'new') {
            $data['main'] = $this->select('*')->first();
        }else{
            $data['main'] = $this->select('*')
            ->where('config_id',$request->id)
            ->first();
        }     
       
        return response()->json([
            'rc' => 0,
            'rm' => "sukses",
            'data' => $data
        ]);
    }
}
