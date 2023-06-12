<div class="modal fade" id="{{$id}}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="background: 00000091;">
    <div class="modal-dialog modal-dialog-centered modal-{{$size}}" role="document">
        <div class="modal-content" id="{{$id}}_content">
            

            <div class="modal-body" id="{{$id}}_body">
                <div class="modalHead">
                    <div id="{{$id}}_title" class="modalTitle">{{$title}}</div>
                    <div id="{{$id}}_subTitle" class="modalSubTitle" >{{$subTitle}}</div>
                </div>
                <!-- <p id="{{$id}}_info" class="modalTextInfo">{{$info}}</p> -->
                @if ($action == '')
                <div class="btn btn-icon btn-sm btn-active-light-primary ms-2 zn-close"  id="{{$id}}_btnClose" data-bs-dismiss="modal" aria-label="Close">
                    <span class="la la-close"></span>
                </div>
                @endif
                {{$content}}
               
                @if ($action != '')
                <div id="{{$id}}_action" class="cardFooter">
                    <button class="btnModal bg-navy-3" id="{{$id}}_btnClose" data-bs-dismiss="modal" aria-label="Close">
                        BATAL
                    </button>
                    {{$action}} 
                </div>
                @endif
            </div>
          
        </div>
    </div>
</div>
