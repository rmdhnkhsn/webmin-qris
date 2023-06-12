<x-other.modal id="mForm" title="-" subTitle="-" info="" separator="false" size="md">
    <x-slot name="action">
        <button onclick="storeCustom()" type="button" class="btnModal bg-navy-1" id="btnStore">
            <span class="indicator-label">
                SIMPAN
            </span>
        </button>
     </x-slot>
    <x-slot name="content">
        <form id="formData" class="bs-form">
            <div class="row">
                <div class="d-none">
                    <x-form.input title="No" id="no" maxlength="100" value="" />
                </div>
                <div class="col-12">
                    <x-form.input title="Config ID" id="config_id" maxlength="100" value="" bgReadOnly="bgReadOnly" />
                </div>
                <div class="col-12">
                    <x-form.input title="Config Value" id="config_val" maxlength="100" value="" />
                </div>
            </div>
        </form>
    </x-slot>
</x-other.modal>

