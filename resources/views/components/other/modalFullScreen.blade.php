<div class="modal fade" id="{{$id}}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="background: 00000091;">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen" role="document">
        <div class="modal-blur" id="{{$id}}_content">
            <div class="modalHead">
                <button class="btnBackModal"  id="{{$id}}_btnClose" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <img src="{{ url('image/aj_logo_plain.svg')}}" class="logo">
            </div>
            <div class="modal-body" id="{{$id}}_body">
                <div id="{{$id}}_title" style="color:transparent">{{$title}}</div>
                <input type="hidden" id="{{$id}}_subTitle" class="modalSubTitle" value="{{$subTitle}}">
                {{$content}}
            </div>
            @if ($action != '')
            <div id="{{$id}}_action" class="cardFooterFull">
                {{$action}}
            </div>
            @endif

        </div>
    </div>
</div>
