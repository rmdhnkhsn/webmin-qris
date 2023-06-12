
<script>
    var routeStore = "{{$store}}";
    var routeEdit = "{{$edit}}";
    var routeSetActive = "{{$setActive}}";
    var routeDelete = "{{$delete}}";
    var routeStoreCustom = "{{$storeCustom}}";
    var routeImportXls = "{{$importXls}}"
    var exportData = "{{$exportData}}";
    var routeTable = "{{$table}}";
    var tableHead = "{{$head}}";
    var tableHeadAlias = "{{$headAlias}}";
    var title = "{{$title}}";
    var typeRoute = "{{$typeRoute}}";
    var userRole = "{{Auth::user()->role_id}}"

    var setId = null;
    var col = tableHead.split(',');
    var colum = [];
    var code = '';
    var setPart = 0;
    var fieldUsername = [];
    var colAlias = (tableHeadAlias) ? tableHeadAlias.split(','):null;

    // FORM
    var dataDetail = [];
    var listSelect = [];
    var noNeed = [];
    var fieldSelect = [];
    var fieldDate = [];
    var fieldNo = [];
    var fieldCurrency = [];
    var fieldTextarea = [];
    var setValidate = {}

    var setPageLength = 10;
    if (title == 'Import Rutin' || title == 'Export Rutin') {
        setPageLength = 50;
    }

    col.forEach((c,k) => { 
        var v = {};
        v['data'] = col[k];
        v['name'] = (tableHeadAlias) ? colAlias[k]:'';
        colum.push(v); 
    });

    var addStyleColumn = []
   

    var columStyle =
    [
        {
            className: 'dtr-control',
            // orderable: false,
            targets:   0
        },
        // { "orderable": false, "targets": [-1] },
    ];

    if (typeRoute == 'masterProduct') {
        columStyle.push({ "className" : 'text-end',"targets":[4,5,6]})
        columStyle.push({ "className" : 'text-center',"targets":[7]})
    }

    
    var table = znGetTable(routeTable,colum,columStyle,'indexTable',setPageLength);

    var handleSearchDatatable = () => {
        const filterSearch = document.querySelector('[data-kt-filter="search"]');
        filterSearch.addEventListener('keyup', function (e) {
            table.search(e.target.value).draw();
        });
    }

    function setDataFormGlobal(main) {
        for ( var key in main ) {
            let val = main[key]
            let title = key.replace(/\_/g, " ");
            if (fieldSelect.includes(key)) {
                $('#'+key).val(val).trigger('change.select2');

            }
            if (fieldDate.includes(key)) {
                (val) ? $("#"+key).datepicker().datepicker("setDate", new Date(val)) : null   
            }
        }
    }

      
    function buildFormGlobal(data,idForm) {

        
        let {main} = data
        let {db_length} = data

        let listData = ``
        for ( var key in main ) {
            if (!noNeed.includes(key)) {
                let tmpValidate = {}
                let addValidate = {}
                if (key == 'email') {
                    addValidate = {
                        "emailAddress": {
                            "message": 'format email salah'
                        }
                    };
                }

                tmpValidate = { 
                    "notEmpty": {
                        "message": 'Tidak Boleh Kosong'
                    }
                };

                tmpValidate = { ...tmpValidate, ...addValidate };

                setValidate[key] = { 
                    "validators": tmpValidate
                };

                let val = main[key]
                let title = key.replace(/\_/g, " ");

                // CHECK LENGTH COLUMN
                let maxlength = 100;
                let maxlengthCustom = maxlength;
                if (db_length) {
                    let checkLength = db_length.find(v => v.column_name == key);
                    maxlengthCustom = (checkLength) ? checkLength.character_maximum_length:null;
                }
                
                // CHECK LENGTH COLUMN

                if (fieldSelect.includes(key)) 
                {
                    listData += `
                    <div id="view_${key}" class="col-md-6">
                        <x-form.selectModal title="${title}" id="${key}" required="true"  >
                            <x-slot name="option">
                                <option value=""></option>
                                ${listSelect[key]}
                            </x-slot>
                        </x-form.selectModal>
                    </div>`
                    $('#'+key).val(val).trigger('change.select2');
                }
                else if(fieldDate.includes(key))
                {
                    listData += `
                        <div id="view_${key}" class="col-md-6">
                            <x-form.date title="${title}" value="" id="${key}" required="true" />
                        </div>`
                }
                else if(fieldNo.includes(key))
                {
                    maxlength = (maxlengthCustom) ? maxlengthCustom : 50;

                    listData += `
                        <div id="view_${key}" class="col-md-6 ">
                            <x-form.no maxlength="${maxlength}" title="${title}" value="${znClearString(val)}" id="${key}" required="true" />
                        </div>`
                }
                else if(fieldCurrency.includes(key))
                {
                    let maxlength = 3;
                    let setCurrency = (val) ? val : 0;

                    console.log(key);
                    switch (key) {
                        case 'masa_kerja_umur':
                            maxlength = 3;
                        break;
                        case 'tenor':
                            maxlength = 3;
                        break;
                        case 'max_gaji':
                            maxlength = 2;
                        break;
                        default:
                            maxlength = 15;
                        break;
                    }

                    

                    listData += `
                        <div id="view_${key}" class="col-md-6">
                            <x-form.currency maxlength="${maxlength}" title="${title}" value="${znNumFormat(setCurrency)}" id="${key}" required="true" />
                        </div>`
                }
                else if(fieldTextarea.includes(key))
                {
                    maxlength = (maxlengthCustom) ? maxlengthCustom : 250;

                    listData += `
                        <div id="view_${key}" class="col-md-6">
                            <x-form.textarea maxlength="${maxlength}" title="${title}" value="${znClearString(val)}" id="${key}" required="true" />
                        </div>`
                }
                else if(fieldUsername.includes(key))
                {
                    maxlength = (maxlengthCustom) ? maxlengthCustom : 50;

                    listData += `
                        <div id="view_${key}" class="col-md-6">
                            <x-form.username maxlength="${maxlength}" title="${title}" value="${znClearString(val)}" id="${key}" required="true" />
                        </div>`
                }
                else{
                    maxlength = (maxlengthCustom) ? maxlengthCustom : 100;

                    // let setDisabled = (type == 'disabled') ? 'test':'f'

                    listData += `
                        <div id="view_${key}" class="col-md-6">
                            <x-form.input maxlength="${maxlength}" title="${title}" value="${znClearString(val)}" id="${key}" required="true" />
                        </div>`

                }
            }
        };

        $('#'+idForm).html(listData);

    }

    function buildFormDisabledGlobal(data,idForm) {

        
        let {main} = data
        let {db_length} = data

        let listData = ``
        for ( var key in main ) {
            if (!noNeed.includes(key)) {
               
                let val = main[key]
                let title = key.replace(/\_/g, " ");

                let maxlength = 100;
                let maxlengthCustom = maxlength;
                if (fieldSelect.includes(key)) 
                {
                    listData += `
                    <div class="col-md-6">
                        <x-form.selectModal title="${title}" id="${key}" required="true" disabled="true"  >
                            <x-slot name="option">
                                <option value=""></option>
                                ${listSelect[key]}
                            </x-slot>
                        </x-form.select>
                    </div>`
                    $('#'+key).val(val).trigger('change.select2');
                }
                else if(fieldDate.includes(key))
                {
                    listData += `
                        <div class="col-md-6">
                            <x-form.date title="${title}" value="" id="${key}" required="true" disabled="true" />
                        </div>`
                }
                else if(fieldNo.includes(key))
                {
                    maxlength = (maxlengthCustom) ? maxlengthCustom : 50;

                    listData += `
                        <div class="col-md-6">
                            <x-form.no maxlength="${maxlength}" title="${title}" value="${znClearString(val)}" id="${key}" required="true" disabled="true" />
                        </div>`
                }
                else if(fieldCurrency.includes(key))
                {
                    let maxlength = 20;
                    let setCurrency = (val) ? val : 0;
                    listData += `
                        <div class="col-md-6">
                            <x-form.currency maxlength="${maxlength}" title="${title}" value="${znNumFormat(setCurrency)}" id="${key}" required="true" disabled="true" />
                        </div>`
                }
                else if(fieldTextarea.includes(key))
                {
                    maxlength = (maxlengthCustom) ? maxlengthCustom : 250;

                    listData += `
                        <div class="col-md-6">
                            <x-form.textarea maxlength="${maxlength}" title="${title}" value="${znClearString(val)}" id="${key}" required="true" disabled="true"/>
                        </div>`
                }
                else if(fieldUsername.includes(key))
                {
                    maxlength = (maxlengthCustom) ? maxlengthCustom : 50;

                    listData += `
                        <div class="col-md-6">
                            <x-form.username maxlength="${maxlength}" title="${title}" value="${znClearString(val)}" id="${key}" required="true" disabled="true"/>
                        </div>`
                }
                else{
                    maxlength = (maxlengthCustom) ? maxlengthCustom : 100;

                    listData += `
                        <div class="col-md-6">
                            <x-form.input maxlength="${maxlength}" title="${title}" value="${znClearString(val)}" id="${key}" required="true" disabled="true"/>
                        </div>`

                }
            }
        };

        $('#'+idForm).html(listData);

    }

    function initFormGlobal(){
        // INIT 
        $('.znselectModal').select2({
            placeholder: "Silahkan Pilih",
            dropdownParent: "#mForm_content"
        });

        $('.max-notif').maxlength({
            warningClass: "badge badge-warning",
            limitReachedClass: "badge badge-success"
        });

        $('.znDate').datepicker({
            orientation: "bottom left",
            todayHighlight: true,
            showDropdowns: true,
            format: 'dd-mm-yyyy',
            autoclose: true,
        });
        // INIT
    }

    function initValidateGlobal(formData,setValidate) {
        
        $("#"+formData).bootstrapValidator({
            excluded: [':disabled'],
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: setValidate
            
        }).on('success.field.bv', function (e, data) {
            var $parent = data.element.parents('.form-group');
            $parent.removeClass('has-success');
            $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
        });

        
    }

    // STORE ADD AND EDIT
    function store() {

        var isEdit = setId;
        let myForm = document.getElementById('formData');
        let formData = new FormData(myForm);
        formData.append('id',setId);

        // if(!isEdit){
        //     formData.append('is_active','t');
        // }

        

        var $validator = $('#formData').data('bootstrapValidator').validate();
        if ($validator.isValid()) {
            znLoadingModal('mForm_body')
            doPost(routeStore, formData, function (msg, data) {
               
                znLoadingModalEnd('mForm_body')
                if (data == null){
                    znNotif("danger", msg);
                }else {
                    if(data.rc == 0){
                        znNotif('success','Berhasil Menyimpan Data');
                        $('#mForm').modal('hide');
                        table.ajax.url(routeTable).load();
                    }
                    else if(data.rc == 422){
                        let {rm} = data
                        let listError = '';
                        for (const key in rm) {
                            if (rm.hasOwnProperty(key)) {
                               listError += `<li>${rm[key]} </li>` 
                            }
                        }
                        znNotif('warning',`<ul>${listError}</ul>`);
                    }
                    else{
                        znNotif("danger", data.rm);
                    }
                }
            })
        }
    }

    function refreshTable() {
        table.ajax.url(routeTable).load();
    }

    function actImportExcel() {
        let myForm = document.getElementById('formDataExcel');
        let formData = new FormData(myForm);

        var $validator = $('#formDataExcel').data('bootstrapValidator').validate();
        if ($validator.isValid()) {
            $('#viewValidate').hide();
           
            doPost(routeImportXls, formData, function (msg, data) {
                console.log(data);
                if (data == null){
                    znNotif("danger", msg);
                }else {
                    if(data.rc == 0){
                        znNotif('success','Berhasil Menyimpan Data');
                        $('#mImport').modal('hide');
                        table.ajax.url(routeTable).load();
                    }else{
                        $("#formDataExcel")[0].reset();
                        $('#formDataExcel').bootstrapValidator("resetForm",true);
                        $('#viewValidate').show();
                        $('#resultValidate').html(data.msg);
                    }
                }
            })
        }
    }

    function importExcel() {
        $('#mImport').modal('show');
        $('#viewValidate').hide();
        $("#formDataExcel")[0].reset();
        $('#formDataExcel').bootstrapValidator("resetForm",true);
    }

    function downloadExcel(setfilename) {
        let query = {
            filename: setfilename+code,
            typeExport: 'download_zip',
            part:setPart
        }
        window.open(exportData+'&'+$.param(query), "_blank");
    }
    
    function exportExcel(setfilename,type) {
        if (totalRowDT == 0) {
            znNotif("warning", 'Data Kosong!');
            return false
        }

        let setType = (type) ? type:'xlsx';

        if (totalRowDT >= 5000) {
            $('#downloadExport').hide();
            var button = document.querySelector("#btnExport");
            button.setAttribute("data-kt-indicator", "on");
            $('#btnExport').prop('disabled',true)
                let countFinish = 0;
                let part = totalRowDT / 5000;
                setPart = Math.ceil(part);
                $('#textExportStatus').html('Proses Export Excel... 0/'+setPart);
                code = znRandomString(5);

                var promises = [];
                for (let i = 0; i < setPart; i++) {
                    let query = {
                        filename: setfilename,
                        typeExport: 'xlsx_zip',
                        startDate: setStartDate,
                        endDate: setEndDate,
                        total_row: totalRowDT,
                        code:code,
                        part:i
                    }

                    let request = $.get(exportData+'&'+$.param(query), function (response, status, xhr) {
                        countFinish++
                        $('#textExportStatus').html(`Proses Export Excel... ${countFinish}/${setPart}`);
                    }).fail(function (response) {   
                        console.log(response);
                    });
                    
                    promises.push(request);
                }

                $.when.apply(null, promises).done(function(){
                    button.removeAttribute("data-kt-indicator");
                    $('#btnExport').prop('disabled',false)
                    $('#downloadExport').show();
                    
                })
            
            
        }else{
            var query = {
                filename: setfilename,
                typeExport: setType,
                startDate: setStartDate,
                endDate: setEndDate,
                total_row: 0,
            }

            window.open(exportData+'&'+$.param(query), "_blank");
        }
    }

    function setActive(id, isActive) {
        //console.log(isActive);
        if (isActive == true) {
            var titleSwal = `Non Aktif ${title}`;
            var textSwal = `Anda yakin akan menonaktifkan ${title} ini?`;
        } else {
            var titleSwal = `Aktif ${title}`;
            var textSwal = `Anda yakin akan mengaktifkan ${title} ini?`;
        }

        popConfirm(titleSwal,textSwal, function () {
            znLoadingPage();
            let formData = new FormData();
            formData.append('id',id);
            formData.append('active',isActive);
            doPost(routeSetActive, formData, function (msg, res) {
                znLoadingPageEnd();
                    if (res == null){
                    znNotif("danger", msg);
                }else {
                    if(res.rc == 0){
                        znNotif('success',res.rm);
                        table.ajax.url(routeTable).load();
                    }else{
                        znNotif("danger", res.rm);
                    }
                }
            })
        });
    }

    
    function hapus(id) {
        var titleSwal = `Hapus Data`;
        var textSwal = `Anda yakin akan Hapus ini?`;

        popConfirm(titleSwal,textSwal, function () {
            znLoadingPage();
            let formData = new FormData();
            formData.append('id',id);
            doPost(routeDelete, formData, function (msg, res) {
                znLoadingPageEnd();
                    if (res == null){
                    znNotif("danger", msg);
                }else {
                    if(res.rc == 0){
                        znNotif('success',res.rm);
                        table.ajax.url(routeTable).load();
                    }else{
                        znNotif("danger", res.rm);
                    }
                }
            })
        });
    }

    $(document).ready(function () {

        $("#set_breadcrumbs").html(title);
        $("#set_breadcrumbs_sub").html(`Data ${title}`);
        handleSearchDatatable();

        $('.znselect').select2({
            placeholder: "Silahkan Pilih"
        });

        $('#formData').on('keypress', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                e.preventDefault();
                document.getElementById("znBtnLoader").click();
            }
        });
    })

    

  
     
  
</script>