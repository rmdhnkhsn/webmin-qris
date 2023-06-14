<x-other.modal id="mForm" title="-" subTitle="-" info="" separator="false" size="lg">
    <x-slot name="action">
        <button onclick="storeCustom()" type="button" class="btnModal bg-green-1" id="btnStore">
            <span class="indicator-label">
                SIMPAN
            </span>
            <span class="indicator-progress">
                Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
        </button>
     </x-slot>
    <x-slot name="content">
        <form id="formData" class="bs-form">
            <div class="row">
                <div class="col-md-6">
                    <x-form.username title="Username" id="username" maxlength="30" value="" />
                </div>
                <div class="col-md-6">
                    <x-form.email title="E-Mail" id="email" maxlength="50" value="" />
                </div>
                <div class="col-12">
                    <x-form.input title="Nama Pengguna" id="user_nm" maxlength="100" value="" />
                </div>
                <div class="col-md-6">
                    <x-form.no maxlength="15" title="No HP" id="phone_no" value="" />
                </div>
                <div class="col-md-6">
                    <x-form.no maxlength="16" title="KTP" id="ktp" value="" />
                </div>
                <div class="col-md-12">
                    <x-form.textarea title="Alamat" id="address" maxlength="250" value="" />
                </div>
               
            </div>
        </form>
    </x-slot>
</x-other.modal>

