<div class="modal fade" id="{{$id}}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="background: 00000091;">
    <div class="modal-dialog modal-dialog-centered modal-{{$size}}" role="document">
        <div class="modal-content" id="{{$id}}_content">

            <div class="modal-body" id="{{$id}}_body" style="background-position: right top; background-size: 100% auto;background-repeat: no-repeat; background-image: url({{asset('img/logo_half2.png')}})">
                <div id="{{$id}}_title" class="card-title fw-bold mb-0 fs-3">{{$title}}</div>
                <div id="{{$id}}_subTitle" class=" mt-1 mb-8 fs-4 fw-bold" style="color: #304f81;">{{$subTitle}}</div>
                <p id="{{$id}}_info" class="text-dark-75 font-weight-bolder font-size-h5 m-0">{{$info}}</p>

                <!--begin::Close-->
                <div class="btn btn-icon btn-sm btn-light-danger ms-2 zn-close" style="
                position: absolute;
                right: 10px;
                top: 10px;
                " id="{{$id}}_btnClose" data-bs-dismiss="modal" aria-label="Close">
                    <span class="la la-close"></span>
                </div>
                <!--end::Close-->
                <div class="separator separator-dashed separator-border-2 mt-5 mb-5"></div>
                {{$content}}

            </div>
            @if ($action != '')
            <div id="{{$id}}_action" class="card-footer text-right py-3 zn-bg-klt">
                {{$action}}
            </div>
        @endif

        </div>
    </div>
</div>
