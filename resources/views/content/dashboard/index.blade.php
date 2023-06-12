
@section("content")
    <div class="app-wrapper dashboardPage">
        <div class="row mb-5">
            <div class="col-lg-4 col-md-6">
                <div class="relative">
                    <x-form.input title="Tanggal" id="kt_daterangepicker_4" maxlength="100" value="" />
                    <img src="{{ url('image/ic_calendar.svg')}}" class="imgInput">
                </div>
            </div>
            <div class="col-md-4 refreshNone">
                <label class="title-form text-white">-</label>
                <button type="button" class="btnRefresh" onclick="get_dashboard();">
                    <i class="la la-sync"></i>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="cards relative bg-status o-hidden">
                    <div class="contentJumlah">
                        <div class="number" id="j_transaksi">0</div>
                        <div class="text">
                            <div class="text1">Jumlah</div>
                            <div class="text2 c-blue">Transaksi</div>
                        </div>
                    </div>
                    <div class="contentMoney">
                        <div class="rp">Rp </div>
                        <div class="count" id="t_transaksi">0</div>
                    </div>
                    <img src="{{ url('image/ic_trx.svg')}}" class="duotoneIcon">
                    <!-- <img src="{{ url('image/trx.svg')}}" class="imgIcon"> -->
                    <!-- <img src="{{ url('image/green-wave.png')}}" class="imgWave2"> -->
                </div>
            </div>
            <div class="col-md-3">
                <div class="cards relative bg-status o-hidden">
                    <div class="contentJumlah">
                        <div class="number" id="j_fee">0</div>
                        <div class="text">
                            <div class="text1">Jumlah</div>
                            <div class="text2 c-yellow">Fee</div>
                        </div>
                    </div>
                    <div class="contentMoney">
                        <div class="rp">Rp </div>
                        <div class="count" id="t_fee">0</div>
                    </div>
                    <img src="{{ url('image/ic_fee.svg')}}" class="duotoneIcon">
                    <!-- <img src="{{ url('image/fee.svg')}}" class="imgIcon"> -->
                    <!-- <img src="{{ url('image/green-wave.png')}}" class="imgWave2"> -->
                </div>
            </div>
            <div class="col-md-3">
                <div class="cards relative bg-status o-hidden">
                    <div class="contentJumlah">
                        <div class="number" id="j_berhasil">0</div>
                        <div class="text">
                            <div class="text1">Jumlah</div>
                            <div class="text2 c-green">Transaksi Berhasil</div>
                        </div>
                    </div>
                    <div class="contentMoney">
                        <div class="rp">Rp </div>
                        <div class="count" id="t_berhasil">0</div>
                    </div>
                    <img src="{{ url('image/ic_check.svg')}}" class="duotoneIcon">
                    <!-- <img src="{{ url('image/trx_success.svg')}}" class="imgIcon"> -->
                    <!-- <img src="{{ url('image/green-wave.png')}}" class="imgWave2"> -->
                </div>
            </div>
            <div class="col-md-3">
                <div class="cards relative bg-status o-hidden">
                    <div class="contentJumlah">
                        <div class="number" id="j_gagal">0</div>
                        <div class="text">
                            <div class="text1">Jumlah</div>
                            <div class="text2 c-pink">Transaksi Gagal</div>
                        </div>
                    </div>
                    <div class="contentMoney">
                        <div class="rp">Rp </div>
                        <div class="count" id="t_gagal">0</div>
                    </div>
                    <img src="{{ url('image/ic_ban.svg')}}" class="duotoneIcon">
                    <!-- <img src="{{ url('image/trx_fail.svg')}}" class="imgIcon"> -->
                    <!-- <img src="{{ url('image/green-wave.png')}}" class="imgWave2"> -->
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="cards borderGrey">
                    <div class="contentText">
                        <img src="{{ url('image/ic_chart2.svg')}}" class="chartImg">
                        <div class="text">
                            <div class="text1">Grafik Transaksi Perbulan</div>
                            <div class="text2">Data Grafik Transaksi Perbulan</div>
                        </div>
                    </div>
                    <div class="contentChart">
                        <div id="chartTahunan"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section("contentScript")
    @include('content.dashboard.action')
@endsection