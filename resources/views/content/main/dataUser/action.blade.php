<script>
// INIT FORM

var blockUI = new KTBlockUI(document.querySelector("#mForm_content"));

function clearForm() {
    $("#formData")[0].reset();
    $('#formData').bootstrapValidator("resetForm",true);
    setId = 'new';
}

function modalForm(id) {
    setId = id
    $('#mForm').modal('show');
    if (id == 'new') {
        $('#mForm_title').html(`Tambah Data`);
        $('#mForm_subTitle').html(`Tambah Data `+title);
    }else{
        $('#mForm_title').html(`Edit Data`);
        $('#mForm_subTitle').html(`Edit Data `+title);
    }

    $('.znselectModal').select2({
        placeholder: "Silahkan Pilih",
        dropdownParent: "#mForm_content"
    });
    
    
    $('#listData').html(``);
    blockUI.block();
    let formData = new FormData();
    formData.append('id',setId);
    doPost(routeStoreCustom+'&act=dataDetail', formData, function (msg, res) {
        console.log(res)
        let {main} = res.data

        let noNeedNew = []
        if (id === 'new') {
            noNeedNew = []
        }
        initValidate(main,'formData')
        
         // SET VAL
        if (id === 'new') {
            clearForm()   

        }else{

            for ( var key in main ) {
                let val = main[key]
                if (fieldSelect.includes(key)) {
                    $('#'+key).val(val).trigger('change.select2');
                }
                else{
                    $('#'+key).val(val)

                    
                   
                }
            }

            $('#formData').data('bootstrapValidator').validate();
        }

        

        blockUI.release();
        
    })
}


function blockUser(id) {
    popConfirm("Block User",  
        `Anda Yakin Akan Block User Ini ? `, function () {
            znLoadingPage();
            let formData = new FormData();
            formData.append('id',id);
            doPost(routeStoreCustom+'&act=blockUser', formData, function (msg, res) {
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

function aktifUser(id) {
    popConfirm("Aktifkan User",  
    `Anda Yakin Akan Aktifkan User Ini ? `, function () {
        znLoadingPage();
        let formData = new FormData();
        formData.append('id',id);
        doPost(routeStoreCustom+'&act=aktifkUser', formData, function (msg, res) {
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

function resetPassword(id) {
    popConfirm("Reset Password",  
        `Anda Yakin Akan Reset Password ? `, function () {
            znLoadingPage();
            let formData = new FormData();
            formData.append('id',id);
            doPost(routeStoreCustom+'&act=resetPassword', formData, function (msg, res) {
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

function initValidate(data,formData) {
    let tmpValidate = {}
    let addValidate = {}

    let noNeed = ['password','user_id','password_retry','reg_date','date_password','is_active']

    for ( var key in data ) {
        if (!noNeed.includes(key)) {

            if (key == 'email') {
                addValidate = {
                    "emailAddress": {
                        "message": 'format email salah'
                    }
                };
            }
            else if (key == 'ktp') {
                addValidate = {
                    "stringLength": {
                        "min": 16,
                        "max": 16,
                        "message": 'Harus Di Isi 16 Digit'
                    },
                };
            }else{
                addValidate = {}
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

        }
    }
    

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

function storeCustom() {
    let button = document.querySelector("#btnStore");
    let myForm = document.getElementById('formData');
    let formData = new FormData(myForm);
    formData.append('id',setId);

    console.warn('simpan');
    var $validator = $('#formData').data('bootstrapValidator').validate();
    if ($validator.isValid()) {
        
        // button.setAttribute("data-kt-indicator", "on");
        
        doPost(routeStoreCustom+'&act=storeUpdate', formData, function (msg, res) {

            blockUI.release();

            if (res == null){
                znNotif("danger", msg);
            }else {
                if(res.rc == 0){
                    znNotif('success','Berhasil Menyimpan Data');
                    $('#mForm').modal('hide');
                    table.ajax.url(routeTable).load();
                }else{
                    znNotif("danger", res.rm);
                }
            }

        })
    }else{
        znNotif("warning", "Data Belum Lengkap !");
    }
}


function getRef() {
    let formData = new FormData();
    doPost(routeStoreCustom+'&act=refDetail', formData, function (msg, res) {
        let dataRef = res.data

        for (const key in dataRef) {           
            listSelect[key] = dataRef[key].map((v,i) => {
                return `<option value="${v.value}">${v.print}</option>`
            })
        }
    })
}


function getTable() {
    var query = {
        filterParam: $('#filterParam').val(),
    }
    table.ajax.url(routeTable+'&'+$.param(query)).load();
}

$(document).ready(function () {
    // getRef()
    $('#filterParam').on('select2:select', function (e) {
        // var data = e.params.data;
        getTable()
    });
})




</script>