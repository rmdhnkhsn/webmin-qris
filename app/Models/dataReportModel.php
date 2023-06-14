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

class dataReportModel extends Model
{
    protected $primaryKey = 'msg_id';
    protected $table = 'msg';
    public $timestamps = false;
    protected $keyType = 'string';

    public function initData($request,$route)
    {
        // INIT DB
        $data['title'] = 'Laporan';
        $data['actButton'] = ['edit', 'delete'];
        $data['tableHead'] = 
        array(
            ["Tanggal Trx","all","crtdt"],
            ["Account No","all","account_no"],
            ["Nominal","all","amount"],
            ["Fee","all","fee"],
            ["RRN","all","rrn"],
            ["Trace No","all","traceno"],
            ["Proc Code","all","proc_code"],
            ["RC","all","rc"],
            ["RC CBS","all","rc_cbs"],
            ["RC CBS REV","all","rc_cbs_rev"],
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

    public function getQuery($request)
    {
        if ($request->startDate) {

            $startDate = date('Y-m-d',strtotime($request->startDate)).' 00:00:00';
            $endDate = date('Y-m-d',strtotime($request->endDate)).' 24:00:00';      
        }else{
            $startDate = date('Y-m-d').' 00:00:00';
            $endDate = date('Y-m-d').' 24:00:00';
   
        }

        $dtable = \DB::select("SELECT
                msg_id, crtdt, account_no, amount,
                fee, rrn, traceno, proc_code,
                rc, rc_cbs, rc_cbs_rev
                from msg
                where crtdt >= ? and crtdt <= ?
                order by msg_id ASC

        ",[$startDate, $endDate]);

        return $dtable;
    }

    public function getDT($request)
    {

        $dtable = $this->getQuery($request);

        $dt = DT::of($dtable);

        $dt->editColumn('crtdt',function($data) {
            return date('d M Y',strtotime($data->crtdt));
        });

        $dt->editColumn('account_no',function($data) {
            if ($data->account_no == null) {
                return "-";
            } else {
                return "{$data->account_no}";
            }
        });

        $dt->editColumn('amount',function($data) {

            if ($data->amount == null) {
                return "-";
            }else{
                $formatNum = number_format($data->amount,0,",",".");
                return "Rp. {$formatNum}";
                // return "<div class='fw-medium c-2b no-wrap'><small class='text-muted  fs-9'>Rp. </small> {$formatNum}</div>";
            }

        });

        $dt->editColumn('fee',function($data) {

            if ($data->fee == null) {
                return "-";
            }else{
                $formatNum = number_format($data->fee,0,",",".");
                return "Rp. {$formatNum}";
                // return "<div class='fw-medium c-2b no-wrap'><small class='text-muted  fs-9'>Rp. </small> {$formatNum}</div>";
            }

        });

        $dt->editColumn('rrn',function($data) {
            if ($data->rrn == null) {
                return "-";
            } else {
                return "{$data->rrn}";
            }
        });

        $dt->editColumn('traceno',function($data) {
            if ($data->traceno == null) {
                return "-";
            } else {
                return "{$data->traceno}";
            }
        });

        $dt->editColumn('proc_code',function($data) {
            if ($data->proc_code == null) {
                return "-";
            } else {
                return "{$data->proc_code}";
            }
        });

        $dt->editColumn('rc',function($data) {
            if ($data->rc == null) {
                return "-";
            } else {
                return "{$data->rc}";
            }
        });

        $dt->editColumn('rc_cbs',function($data) {
            if ($data->rc_cbs == null) {
                return "-";
            } else {
                return "{$data->rc_cbs}";
            }
        });

        $dt->editColumn('rc_cbs_rev',function($data) {
            if ($data->rc_cbs_rev == null) {
                return "-";
            } else {
                return "{$data->rc_cbs_rev}";
            }
        });

        

        return $dt;
    }

    
    public function exportData(Request $request)
    {
     
        $type = ($request->typeExport == "xlsx_zip") ? 'xlsx':$request->typeExport;
        $param['view'] = 'export.'.$type.'_'.$request->filename;
        $param['nameFile'] = $request->filename;
        $param['data'] = $this->getQuery($request);
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

                        $getMaxId = \DB::table('msg')->max('msg_id');

                        $addData = [
                            'msg_id' => $getMaxId+1,
                            'crtdt' => $request->crtdt,
                            'account_no' => $request->account_no,
                            'amount' => $request->amount,
                            'fee' => $request->fee,
                            'rrn' => $request->rrn,
                            'traceno' => $request->traceno,
                            'proc_code' => $request->proc_code,
                            'rc' => $request->rc,
                            'rc_cbs' => $request->rc_cbs,
                            'rc_cbs_rev' => $request->rc_cbs_rev,
                        ];

                        DB::table('msg')->insert($addData);

                    } else {

                        $updateData = [
                            'msg_id' => $request->msg_id,
                            'crtdt' => $request->crtdt,
                            'account_no' => $request->account_no,
                            'amount' => $request->amount,
                            'fee' => $request->fee,
                            'rrn' => $request->rrn,
                            'traceno' => $request->traceno,
                            'proc_code' => $request->proc_code,
                            'rc' => $request->rc,
                            'rc_cbs' => $request->rc_cbs,
                            'rc_cbs_rev' => $request->rc_cbs_rev,
                        ];

                        DB::table('msg')->where('config_id', $request->id)->update($updateData);
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
            ->where('msg_id',$request->id)
            ->first();
        }     
       
        return response()->json([
            'rc' => 0,
            'rm' => "sukses",
            'data' => $data
        ]);
    }
}
