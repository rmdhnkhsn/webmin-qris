
@section("content")
    <div class="app-wrapper dashboardPage">
        <div class="row mb-5">
            <div class="col-lg-4 col-md-6">
                <div class="relative">
                    <x-form.input title="Tanggal" id="kt_daterangepicker_4" maxlength="100" value="" bgFilter="bgFilter" />
                    <img src="{{ url('image/ic_calendar.svg')}}" class="imgInput">
                </div>
            </div>
            <div class="col-md-4 refreshNone">
                <label class="title-form text-white">-</label>
                <button type="button" class="btnRefresh bg-green-2" onclick="get_dashboard();">
                    <i class="la la-sync"></i>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="cards cardInfo">
                    <div class="contents">
                        <div class="number" id="j_transaksi">0</div>
                        <div class="text">
                            <div class="text1">Jumlah</div>
                            <div class="text2 text-success">Transaksi</div>
                        </div>
                        <div class="icons bg-trx">
                            <span class="svg-icon svg-icon-success svg-icon-2x">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor"/>
                                    <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="money">
                        <div class="rp">Rp </div>
                        <div class="count" id="t_transaksi">0</div>
                    </div>
                    <div class="aksenTrx"></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="cards cardInfo">
                    <div class="contents">
                        <div class="number" id="j_fee">0</div>
                        <div class="text">
                            <div class="text1">Jumlah</div>
                            <div class="text2 c-yellow">Fee</div>
                        </div>
                        <div class="icons bg-fee">
                            <span class="svg-icon svg-icon-warning svg-icon-1 mb-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M3.20001 5.91897L16.9 3.01895C17.4 2.91895 18 3.219 18.1 3.819L19.2 9.01895L3.20001 5.91897Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21C21.6 10.9189 22 11.3189 22 11.9189V15.9189C22 16.5189 21.6 16.9189 21 16.9189H16C14.3 16.9189 13 15.6189 13 13.9189ZM16 12.4189C15.2 12.4189 14.5 13.1189 14.5 13.9189C14.5 14.7189 15.2 15.4189 16 15.4189C16.8 15.4189 17.5 14.7189 17.5 13.9189C17.5 13.1189 16.8 12.4189 16 12.4189Z" fill="currentColor"/>
                                    <path d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21V7.91895C21 6.81895 20.1 5.91895 19 5.91895H3C2.4 5.91895 2 6.31895 2 6.91895V20.9189C2 21.5189 2.4 21.9189 3 21.9189H19C20.1 21.9189 21 21.0189 21 19.9189V16.9189H16C14.3 16.9189 13 15.6189 13 13.9189Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="money">
                        <div class="rp">Rp </div>
                        <div class="count" id="t_fee">0</div>
                    </div>
                    <div class="aksenFee"></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="cards cardInfo">
                    <div class="contents">
                        <div class="number" id="j_berhasil">0</div>
                        <div class="text">
                            <div class="text1">Jumlah</div>
                            <div class="text2 text-primary">Transaksi Berhasil</div>
                        </div>
                        <div class="icons bg-oke">
                            <span class="svg-icon svg-icon-primary svg-icon-2x">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="money">
                        <div class="rp">Rp </div>
                        <div class="count" id="t_berhasil">0</div>
                    </div>
                    <div class="aksenOke"></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="cards cardInfo">
                    <div class="contents">
                        <div class="number" id="j_gagal">0</div>
                        <div class="text">
                            <div class="text1">Jumlah</div>
                            <div class="text2 c-pink">Transaksi Gagal</div>
                        </div>
                        <div class="icons bg-fail">
                            <span class="svg-icon svg-icon-pink svg-icon-2x">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="7.05025" y="15.5356" width="12" height="2" rx="1" transform="rotate(-45 7.05025 15.5356)" fill="currentColor"/>
                                    <rect x="8.46447" y="7.05029" width="12" height="2" rx="1" transform="rotate(45 8.46447 7.05029)" fill="currentColor"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="money">
                        <div class="rp">Rp </div>
                        <div class="count" id="t_gagal">0</div>
                    </div>
                    <div class="aksenFail"></div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="cards borderGrey">
                    <div class="contentText">
                        <img src="{{ url('image/ic_chart.svg')}}" class="chartImg">
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