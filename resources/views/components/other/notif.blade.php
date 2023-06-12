<div class="modal fade" id="znNotif" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  data-backdrop="static" aria-labelledby="staticBackdrop"   aria-hidden="true">
    <div id="znModal" class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body py-8">
                <div class="d-flex align-items-center flex-column p-1">
                    <img src="{{ url('image/question2.svg')}}" class="questionImg">
                    <a id="znNotif-title" class="font-weight-bold font-size-h4 mb-0 text-center" style="font-size: 18px;"></a>
                    <div id="znNotif-text" class="text-center"></div>
                </div>
                <div id="znNotif-action" class="cardFooter">
                    <button onclick="znNotifConfirmClose()" class="btnModal bg-navy-3">No</button>
                    <button id="btnNotifYes" onclick="znNotifConfirmYa()" class="btnModal bg-navy-1">Yes</button>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="znAlert" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  data-backdrop="static" aria-labelledby="staticBackdrop"   aria-hidden="true">
    <div id="znAlertModal" class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="card zn-card card-custom wave wave-animate-slow mb-8 mb-lg-0 br-20">
            <div class="card-body">
                <div class="d-flex align-items-center p-1">
                    <div class="mr-6" id="znAlert-icon">
                    </div>
                    <div class="d-flex flex-column">
                        <a id="znAlert-title" class="font-weight-bold font-size-h4 mb-0" style="
                        font-size: 16px;
                        text-transform: uppercase;
                        font-weight: 600;
                    ">
                        </a>
                        <div id="znAlert-text" style="color: #1c1c1c;font-size: 14px;">
                        </div>
                        <div id="znAlert-action" class="mt-5">
                            <button id="btnNotifYes" class="btn btn-light-primary font-weight-bold mr-2">Yes</button>
                            <button onclick="znAlertConfirmClose()" class="btn btn-hover-bg-dark btn-text-dark btn-hover-text-white border-0 font-weight-bold mr-2">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
