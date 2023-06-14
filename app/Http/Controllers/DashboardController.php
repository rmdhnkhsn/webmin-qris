<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Request as Req;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
{
  
    protected $redirectTo = '/';
    
    public function dashboardView(Request $request)
    {
        $view = 'content.dashboard.index';
        $param = [];
        if (Req::ajax()) {
            return view('onlyContent')->nest('child', $view,$param);
        }else {
            return view('main')->nest('child', $view,$param);
        }
    }

    public function data(Request $request)
    {

        $startDate = date('Y-m-d',strtotime($request->startDate)).' 00:00:00';
        $endDate = date('Y-m-d',strtotime($request->endDate)).' 24:00:00';   

        $money = \DB::select("SELECT
                    count(msg_id) as count_amount,
                    count(fee) as count_fee,
                    sum(amount) as amount,
                    sum(fee) as fee
                    from msg
                    where crtdt >= ? and crtdt <= ?

        ",[$startDate, $endDate]);

        $success = \DB::select("SELECT 
                        count(msg_id) as count_success,
                        sum(amount) as total_success 
                        from msg 
                        where 
                        rc = '00' and crtdt >= ? and crtdt <= ?

        ",[$startDate, $endDate]);

        $failed = \DB::select("SELECT 
                        count(msg_id) as count_failed,
                        sum(amount) as total_failed 
                        from msg    
                        where 
                        (rc <> '00' or rc is null) 
                        and 
                        crtdt >= ? and crtdt <= ?

        ",[$startDate, $endDate]);


        $jml_transaksi = 0;
        $jml_fee = 0;
        $jml_berhasil = 0;
        $jml_gagal = 0;
        $total_transaksi = 0;
        $total_fee = 0;
        $total_berhasil = 0;
        $total_gagal = 0;

        foreach ($money as $v) {
            $jml_transaksi += $v->count_amount;
            $jml_fee += $v->count_fee;
            $total_transaksi += $v->amount;
            $total_fee += $v->fee;
        }

        foreach ($success as $v) {
            $jml_berhasil += $v->count_success;
            $total_berhasil += $v->total_success;
        }

        foreach ($failed as $v) {
            $jml_gagal += $v->count_failed;
            $total_gagal += $v->total_failed;
        }

        $data['j_transaksi'] = $jml_transaksi;
        $data['j_fee'] = $jml_fee;
        $data['j_berhasil'] = $jml_berhasil;
        $data['j_gagal'] = $jml_gagal;
        $data['t_transaksi'] = $total_transaksi;
        $data['t_fee'] = $total_fee;
        $data['t_berhasil'] = $total_berhasil;
        $data['t_gagal'] = $total_gagal;

        // CHART //

        for ($bulan=1; $bulan <= 12; $bulan++) {

            $grafik = \DB::table('msg')
            ->whereMonth('crtdt','=',$bulan)
            ->where("crtdt", ">=", $startDate)
            ->where("crtdt", "<=", $endDate)
            ->count('msg_id');

            $temp_grafik[] = $grafik;
        }

        $data_grafik['transaksi'] = $temp_grafik;
        $data['grafik_tahunan'] = $data_grafik;

        return response()->json([
            'rc' => 0,
            'rm' => "sukses",
            'data'=> $data
        ]);
    }
}
