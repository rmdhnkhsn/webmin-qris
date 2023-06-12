<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;
use Illuminate\Database\QueryException;

// use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Encryption\DecryptException;

use PDF;
use Excel;
use App\Exports\ExcelExport;
use App\Exports\ExcelExportCSV;
use Illuminate\Support\Facades\Log;

date_default_timezone_set('Asia/Jakarta');

class MainController extends Controller
{

    public function getInit($request,$route)
    {
        $modelName = '\\App\Models\\'.$route.'Model';
        $model = new $modelName;
        $data = $model->initData($request,$route);
        return $data;
    }

    public function index(Request $request)
    {

        //INIT
        $init = $this->getInit($request,$request->get('type'));

        $route = $init['route'];
        $param['title'] = $init['title'];
        $param['tableHead'] = $init['tableHead'];
        $param['head'] = $init['head'];
        $param['headAlias'] = (isset($init['headAlias'])) ? $init['headAlias']:null;

        $view = 'content.main.index';
        //END INIT
        $param['table'] = route('main.data')."?type=".$route;
        $param['edit'] = route('main.edit')."?type=".$route;
        $param['store'] = route('main.store')."?type=".$route;
        $param['storeCustom'] = route('main.storeCustom')."?type=".$route;
        $param['setActive'] = route('main.setActive')."?type=".$route;
        $param['delete'] = route('main.hapus')."?type=".$route;
        $param['importXls'] = route('main.import.xls')."?type=".$route;
        $param['exportData'] = route('main.exportData')."?type=".$route;
        $param['typeRoute'] = $route;
        $param['filter'] = $request->get('filter');


        $param['vForm'] = 'content.main.'.$route.'.form';
        $param['vAction'] = 'content.main.'.$route.'.action';
        $param['vToolbar'] = 'content.main.'.$route.'.toolbar';
        $param['vToolFilter'] = 'content.main.'.$route.'.toolFilter';
        $param['vMain'] = 'content.main.'.$route.'.main';

        $param['init'] = $init;

        //Main

        return view('main')->nest('child', $view,$param);
    }

    public function data(Request $request)
    {

        $init = $this->getInit($request,$request->get('type'));
        $type = $request->get('type');

        $modelName = '\\App\Models\\'.$init['route'].'Model';
        $model = new $modelName;
        $dt = $model->getDT($request);



        $dt->addColumn('action', function ($data) use($init,$type) {

            if ($type == 'masterProductPekerjaan') {
                $param['id_key'] = Crypt::encryptString($data->id_product.'|'.$data->id_pekerjaan);
            }
            else if ($type == 'masterProductDocument') {
                $param['id_key'] = Crypt::encryptString($data->id_product.'|'.$data->id_jenis_dokumen);
            }else{
                $param['id_key'] = Crypt::encryptString($data->{$init['db_key']});
            }

            $param['data'] = $data;
            $param['type'] = $type;
            //SET BUTTON
            return $this->getButtonAction($init['actButton'],$param);
        });
        $dt->rawColumns(['list_menu','is_mandatory','is_true','role_id','is_tunjangan','status','act','act_custom','action','is_active','gross_sales','gross_profit',
        'bill_amount','tax_amount','charge_amount','nilai_transaksi','total_amount',
        'charge_service_prs','paydt','reg_date','room_name','username','date_password','room_status_id','product_img','pay_amount','stock_qty','change_amount','sn','tax_prs','amount','min_bill_amount','booked_cnt','available_cnt',
        'tax_1','tax_2','tax_3','tax_4','tax_5','tax_6','tax_7','tax_8','tax_9','tax_10','tax_11','tax_12','tax_13','tax_14','tax_15','tax_16','tax_17',
        'sell_amt','service_pct','tax_amt','pendapatan','biaya','labarugi','penjulan_produk','nominal_voucher','total_deposit','pakai_deposit','sisa_deposit','service_amt','total_amt','penjualan_produk','jasa_layanan','pajak','promo_voucher','sell_price','total',
        'sell_amt','service_pct','tax_amt','service_amt','total_amt','min_stock']);
        return $dt->make(true);
    }

    public function store(Request $request)
    {

        DB::beginTransaction();
        try{

            //GET INIT
            $init = $this->getInit($request,$request->get('type'));
            $modelName = '\\App\Models\\'.$request->type.'Model';
            $model = new $modelName;

            $setField = $model->storeData($request);

            if (isset($setField['rc'])) {
                return response()->json($setField);
            }

            $id = $setField['id'];
            $id = ($id === 'new') ? $id:$this->decryptIdOnly($id);


            // AUDIT TRAIL
            // JIKA EDIT
            if ($id !== 'new') {
                $event = "Edit Data ".$request->get('type');
                $this->auditTrailValue($event,"Data",$init['db'],json_encode($setField['form']),json_encode($setField['oldData']));
                DB::table($init['db'])->updateOrInsert($setField['matchThese'],$setField['form']);
            }
            // JIKA TAMBAH
            else{
                $event = "Tambah Data ".$request->get('type');
                $this->auditTrailValue($event,"Data",$init['db'],json_encode($setField['form']),'');

                DB::table($init['db'])->insert($setField['form']);

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

            $this->auditLogError($request->get('type'),$e->getMessage());
            Log::warning($e->getMessage());

            return response()->json([
                'rc' => 99,
                'rm' => $response,
                'msg' => $e->getMessage()
            ]);
        }

    }

    public function storeCustom(Request $request)
    {

        $decryt = $this->decryptId($request);

        if ($decryt['rc'] == 0) {
            $init = $this->getInit($decryt['data'],$request->get('type'));
            $modelName = '\\App\Models\\'.$init['route'].'Model';
            $model = new $modelName;
            return $model->storeCustom($request->get('act'),$decryt['data']);
        }

    }

    public function edit(Request $request)
    {

        $decryt = $this->decryptId($request);

        if ($decryt['rc'] == 0) {
            $init = $this->getInit($decryt['data'],$request->get('type'));

            $getData = $init['get_data_edit'];

            $getData->id = Crypt::encryptString($getData->{$init['db_key']});


            return response()->json([
                'rc' => 0,
                'data' => $getData
            ]);
        }
    }

    public function hapus(Request $request)
    {

        $decryt = $this->decryptId($request);

        if ($decryt['rc'] == 0) {
            $init = $this->getInit($decryt['data'],$request->get('type'));

            if ($request->get('type') == 'masterProductPekerjaan') {
                $id = explode('|',$decryt['data']->id);

                DB::table($init['db'])->where('id_product', $id[0])->where('id_pekerjaan', $id[1])->delete();
            }
            else if ($request->get('type') == 'masterProductDocument') {
                $id = explode('|',$decryt['data']->id);
                DB::table($init['db'])->where('id_product', $id[0])->where('id_jenis_dokumen', $id[1])->delete();
            }
            else{
                DB::table($init['db'])->where($init['db_key'], $decryt['data']->id)->delete();
            }

            $event = "Hapus Data ".$request->get('type');

            // $this->auditTrailValue($event,"Data",$init['db'],$decryt['data']->id,'');

            return response()->json([
                'rc' => 0,
                'rm' => "Berhasil"
            ]);
        }
    }

    public function SetActive(Request $request)
    {
         //GET INIT
        //  $checkRole = $this->checkRoleAccessMain($request->get('type'));

        // if ($checkRole == false) {
        //     return view('errors.404');
        // }

         $decryt = $this->decryptId($request);

        if ($decryt['rc'] == 0) {
            $init = $this->getInit($decryt['data'],$request->get('type'));

            $id = $request->input('id');
            $isActive = $request->input('active');

            if ($isActive == true) {
                DB::table($init['db'])->where($init['db_key'], $decryt['data']->id)->update([
                    'is_active' => false,
                ]);
                $reqMessage = 'berhasil dinonaktifkan';

                $event = $request->get('type')." ".$reqMessage;
                // $this->auditTrailValue($event,"Aktifasi",$init['db'],$decryt['data']->id,'');

            } else {

                DB::table($init['db'])->where($init['db_key'], $decryt['data']->id)->update([
                    'is_active' => true,
                ]);
                $reqMessage = 'berhasil diaktifkan';
                $event = $request->get('type')." ".$reqMessage;
                // $this->auditTrailValue($event,"Aktifasi",$init['db'],$decryt['data']->id,'');

            }

            return response()->json([
                'rc' => 0,
                'rm' => $reqMessage
            ]);
        }
    }

    public function importXls(Request $request)
    {
        // $checkRole = $this->checkRoleAccessMain($request->type);
        // if ($checkRole == false) {
        //     return view('errors.404');
        // }

        if($request->hasFile('xls_file')){

            if ($request->type == 'importFasilitas') {
                $importName = '\\App\Imports\\Import'.$request->type.$request->segmen;
            }else{
                $importName = '\\App\Imports\\Import'.$request->type;
            }


            $import = new $importName;

            Excel::import($import, $request->file('xls_file'));

            if ($import->validate) {

                Log::warning($import->validate);
                return response()->json([
                    'rc' => 99,
                    'rm' => 'Data Tidak Sesuai',
                    'msg'=> $import->validate
                ]);
            }else{

                return response()->json([
                    'rc' => 0,
                    'rm' => 'berhasil',
                    'msg' => 'Berhasil Import'
                ]);
            }
        }
    }

    public function exportData(Request $request)
    {
        // $checkRole = $this->checkRoleAccessMain($request->type);
        // if ($checkRole == false) {
        //     return view('errors.404');
        // }

        $modelName = '\\App\Models\\'.$request->type.'Model';
        $model = new $modelName;

        $typeExport = $request->typeExport;


        if ($typeExport == 'pdf') {
            $dataExport = $model->exportData($request);
            $pdf = PDF::loadView($dataExport['view'],$dataExport)->setPaper($dataExport['customPaper'], $dataExport['paperType']);
            $pdf->getDomPDF()->set_option("enable_php", true)->set_option("enable_javascript", true);
                return $pdf->stream($dataExport['nameFile'].'.pdf');
        }
        elseif ($typeExport == 'xlsx') {
            $dataExport = $model->exportData($request);
            return Excel::download(new ExcelExport($dataExport),$dataExport['nameFile'].'.xlsx');
        }
        elseif ($typeExport == 'csv') {
            $dataExport = $model->exportData($request);
            return Excel::download(new ExcelExportCSV($dataExport),$dataExport['nameFile'].'.csv');
        }

        elseif($typeExport == 'xlsx_zip'){
            $dataExport = $model->exportData($request);

            Excel::store(new ExcelExport($dataExport), $dataExport['nameFile'].$request->code.'_part'.$request->part.'.xlsx','zip_upload');

            return response()->json([
                'rc' => 0,
                'rm' => 'success'
            ]);

        }elseif($typeExport == 'download_zip'){
            $zip_file = $request->filename.date('d-m-Y').'.zip';
            $zip = new \ZipArchive();
            $zip->open($zip_file, \ZipArchive::CREATE | \ZipArchive::OVERWRITE);

            for ($i=0; $i < $request->part; $i++) {
                $xlsFile = 'zip_upload/'.$request->filename.$request->code.'_part'.$i.'.xlsx';
                $zip->addFile(public_path($xlsFile), $xlsFile);
            }
             $zip->close();
            return response()->download($zip_file);
        }

    }

    public function getButtonAction($typeButton,$param)
    {
        $editBtn ="";
        $detailBtn ="";
        $ActiveBtn = "";
        $deleteBtn = "";

        // DETAIL BUTTON
        if ( in_array("detail", $typeButton)) {
            $detailBtn = '
            <li style="cursor: pointer;">
                <a onclick="detail(`'.$param['id_key'].'`)" class="dropdown-item p-3">
                    <span class="navi-icon"><i class="la la-arrows-alt fs-3"></i> </span>
                    <span class="navi-text fs-7">Detail</span>
                </a>
            </li>';
        }


         // EDIT BUTTON
         if (in_array("edit", $typeButton)) {



            $editBtn = '
            <li style="cursor: pointer;">
                <a onclick="modalForm(`'.$param['id_key'].'`)" class="dropdown-item p-3">
                    <span class="navi-icon"><i class="la la-edit fs-3"></i> </span>
                    <span class="navi-text fs-7">Ubah</span>
                </a>
            </li>';
        }

         // ACTIVE BUTTON
         if (in_array("active", $typeButton)) {
            if ($param['data']->is_active == 't') {
                $ActiveBtn = '

                <li style="cursor: pointer;">
                    <a onclick="setActive(`'.$param['id_key'].'`,`'.$param['data']->is_active.'`)" class="dropdown-item p-3">
                        <span class="navi-icon"><i class="la la-times-circle-o fs-3"></i> </span>
                        <span class="navi-text fs-7">Non Aktifkan</span>
                    </a>
                </li>
                ';
             }else{
                 $ActiveBtn = '
                 <li style="cursor: pointer;">
                    <a onclick="setActive(`'.$param['id_key'].'`,`'.$param['data']->is_active.'`)" class="dropdown-item p-3">
                        <span class="navi-icon"><i class="la la-check-circle-o fs-3"></i> </span>
                        <span class="navi-text fs-7">Aktifkan</span>
                    </a>
                </li>';
             }
        }

         // DELETE BUTTON
        if ( in_array("delete", $typeButton)) {

            $deleteBtn = '
                <li style="cursor: pointer;">
                    <a onclick="hapus(`'.$param['id_key'].'`)" class="dropdown-item p-3">
                        <span class="navi-icon"><i class="la la-trash fs-3"></i> </span>
                        <span class="navi-text fs-7">Hapus</span>
                    </a>
                </li>
            ';
            
        }

        $etcButton = '';

        if ($param['type'] == 'dataUser') {

            $etcButton .= '
                <li style="cursor: pointer;">
                    <a onclick="resetPassword(`'.$param['id_key'].'`)" class="dropdown-item p-3">
                        <span class="navi-icon"><i class="la la-key fs-3"></i></span>
                        <span class="navi-text fs-7">Reset Password</span>
                    </a>
                </li>';


            if ($param['data']->user_status_id == 3) {
                $etcButton .= '
                <li style="cursor: pointer;">
                    <a onclick="aktifUser(`'.$param['id_key'].'`)" class="dropdown-item p-3">
                    <span class="navi-icon"><i class="la la-check-circle fs-3"></i> </span>
                    <span class="navi-text fs-7">Aktifkan User</span>
                    </a>
                </li>';

            }else{


                $etcButton .= '
                <li style="cursor: pointer;">
                    <a onclick="blockUser(`'.$param['id_key'].'`)" class="dropdown-item p-3">
                    <span class="navi-icon"><i class="la la-ban fs-3"></i> </span>
                    <span class="navi-text fs-7">Block User</span>
                    </a>
                </li>';

            }
        }


        $resultBtn = $etcButton.$editBtn.$ActiveBtn.$detailBtn.$deleteBtn;

        return '<button type="button" class="btn btn-sm btn-icon bg-navy-3 btn-circle" style="width: 30px; height: 30px;" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                    <i class="la la-gear fs-3"></i>
                </button>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4" data-kt-menu="true">
                    '.$resultBtn.'
                </div>';
    }


}
