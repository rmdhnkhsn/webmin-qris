
<script>
  var hostUrl = "assets/";
  var base_url = "{{ url('/') }}";
</script>
<script src="/assets/js/plugins.js"></script>
<script src="/assets/js/scripts.bundle.js"></script>
<script src="/assets/validator/bootstrapValidator.min.js" type="text/javascript"></script>
<script src="/assets/plugins/custom/datatables/dt.js"></script>
<script src="/assets/plugins/custom/datatables/dt.init.js"></script>
<link href="/assets/css/dt.responsive.css" rel="stylesheet" type="text/css" />
<script src="/assets/js/dt.responsive.js"></script>
<script src="/js/typeahead.js"></script>
<script src="/js/datepicker.js"></script>
<script src="/js/bootstrap-session-timeout.min.js"></script>
<script src="/assets/js/apexchart.js"></script>
<script>

var KTSessionTimeoutDemo = function() {
    var initDemo = function() {
        $.sessionTimeout({
            title: "Session Timeout",
            message: "",
            keepAlive:false,
            redirUrl: "/globalMainActionGet/logoutGet",
            logoutUrl: "/globalMainActionGet/logoutGet",
            warnAfter: 900000,
            redirAfter: 1200000,
            countdownSmart:true,
            ignoreUserActivity: false,
            countdownMessage: "Your session is about to expire in {timer} seconds.",
            countdownBar: true
        });
    }

    return {
        init: function() {
            initDemo();
        }
    };
}();

// INIT
jQuery(document).ready(function() {
    KTSessionTimeoutDemo.init();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    if (window.location.pathname != '/dashboard') {
        znLoadingPageEnd();
    }

    let formData = new FormData();
    doPost('/globalMainAction/check_expired_password', formData, function (msg, res) {
        if (res.rc == 99) {
            $('#mChangePassword').modal('show');
            $('#mChangePassword_btnClose').hide();
        }

    })

    $("#mChangePasswordForm").bootstrapValidator({
        excluded: [':disabled'],
        fields: {
            newPassword: {
                validators: {
                    notEmpty: {
                        message: 'Tidak Boleh Kosong'
                    },
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'Tidak Boleh Kosong'
                    },
                }
            },
            oldPassword: {
                validators: {
                    notEmpty: {
                        message: 'Tidak Boleh Kosong'
                    }
                }
            },
        }
    }).on('success.field.bv', function (e, data) {
        var $parent = data.element.parents('.form-group');
        $parent.removeClass('has-success');
        $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
    });
});

// CHANGE PASSWORD
function changePasswordShow() {
    $("#mChangePasswordForm")[0].reset();
    $('#mChangePasswordForm').bootstrapValidator("resetForm", true);

    $('#mChangePassword').modal('show');
}

function changePassword_store() {

    var $validor = $('#mChangePasswordForm').data('bootstrapValidator').validate();
    if ($validor.isValid()) {

        popConfirm("Ubah Password",
            `Anda Yakin Akan Merubah Password ? `,
            function () {

                znLoadingModal('mChangePassword_body')
                let myForm = document.getElementById('mChangePasswordForm');
                let formData = new FormData(myForm);
                doPost('/globalMainAction/change_password', formData, function (msg, res) {
                    znLoadingModalEnd('mChangePassword_body')
                    if (res == null) {
                        znNotif("danger", msg);
                    } else {
                        if (res.rc == 0) {
                            znNotif('success', res.rm);
                            $('#mChangePassword').modal('hide');
                            let formData = new FormData();
                            doPost('/globalMainAction/act_logout', formData, function (msg, res) {

                                if (res.rc == 0) {
                                    znNotif("success", 'Password Berhasil Diubah');
                                    setTimeout(() => {
                                        window.location.href = '/'
                                    }, 2500);

                                } else {
                                    znNotif("danger", res.rm);
                                }
                            })
                        } else {
                            znNotif("danger", res.rm);
                        }
                    }
                })
            });
    }

}

function znShowPassword(idx) {
    if ($(`.zn_sh_password${idx} input`).attr("type") == "text") {
        $(`.zn_sh_password${idx} input`).attr(`type`, `password`);
        $(`.zn-icon-eye${idx} i`).addClass("la-eye-slash");
        $(`.zn-icon-eye${idx} i`).removeClass("la-eye");
    } else if ($(`.zn_sh_password${idx} input`).attr("type") == "password") {
        $(`.zn_sh_password${idx} input`).attr(`type`, `text`);
        $(`.zn-icon-eye${idx} i`).removeClass("la-eye-slash");
        $(`.zn-icon-eye${idx} i`).addClass("la-eye");
    }
}

function actLogout() {
    $('#is-loading').fadeIn();
    let formData = new FormData();
    doPost('/globalMainAction/act_logout', formData, function (msg, res) {
        if (res.rc == 0) {
            window.location.href = '{{ url("/") }}/login';
        } else {
            // toastr.info(res.rm);
            znNotif("danger", res.rm);

        }
    })
}

window.onpopstate = function (event) {
    showPageBack(document.location);
};


function G_limit(text, limit) {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
}

function znNotif(type, text) {
    let icon;
    switch (type) {
        case 'success':
            $('#znAlert-title').html('Berhasil');
            icon = `<i class="la la-check-circle text-success" style="font-size:40px;margin-right:1rem"></i>`;
            break;
        case 'danger':
            $('#znAlert-title').html('Gagal');
            icon = `<i class="la la-remove text-danger" style="font-size:40px;margin-right:1rem"></i>`;
            break;
        case 'warning':
            $('#znAlert-title').html('Peringatan');
            icon = `<i class="la la-comment-o text-warning" style="font-size:40px;margin-right:1rem"></i>`;
            break;
        case 'info':
            $('#znAlert-title').html('Informasi');
            icon = `<i class="la la-info-circle text-info" style="font-size:40px;margin-right:1rem"></i>`;
            break;

        default:
            break;
    }
    $('#znAlertModal').addClass('modal-sm');
    $('#znAlert-title').addClass('text-' + type);
    $('.zn-card').addClass('wave-' + type);
    $('#znAlert-icon').html(icon);
    $('#znAlert-text').html(text);
    $('#znAlert-action').hide();
    $('#znAlert').modal('show');
    setTimeout(function () {
        $('#znAlert').modal('hide');
        $('.zn-card').removeClass('wave-' + type);
        $('#znAlert-title').removeClass('text-' + type);
    }, 2000);
}

function znNotifConfirm(text) {
    $('#znModal').removeClass('modal-sm');
    let  icon = `<i class="la la-question-circle zn-notif-icon text-success"></i>`;
    $('#znNotif-title').addClass('text-success');
    $('.zn-card').addClass('wave-success');
    $('#znNotif-icon').html(icon);
    $('#znNotif-text').html(text);
    $('#znNotif-title').html('Konfirmasi');
    $('#znNotif-action').show();
    $('#znNotif').modal('show');
}

function znNotifConfirmClose() {
    $('#znNotif').modal('hide');
}

function znModal(id) {
    $('#'+id).modal('show');
}


var totalRowDT = 0;
function znGetTable(dAct,dColum,dColumStyle,id,length = 10) {
    var table = $('#'+id).on('xhr.dt', function (e, settings, json, xhr) {
        totalRowDT = json.recordsTotal

    }).DataTable({
        aaSorting: [],
        aLengthMenu: [[5,15, 25, 50], [5, 15, 25, 50]],
        processing: true,
        serverSide: true,
        pageLength : 15,
        responsive: true,
        destroy:true,
        // dom: `<'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
        language: {
            'lengthMenu': 'Display _MENU_',
        },
        columnDefs: dColumStyle,
        ajax: {
            "url" : dAct,
            "error": function(jqXHR, textStatus, errorThrown)
                {
                    znNotif("warning","Koneksi Bermasalah, Terjadi Kesalahan Saat Pengambilan Data !");
                }
            },
        columns: dColum
    });

    table.on('draw', function () {
            KTMenu.createInstances();
        });


    return table;
}

function znGetTableManual(dAct, dColum, dColumStyle, id) {
    var table = $('#' + id).DataTable({
        aaSorting: [],
        processing: true,
        serverSide: true,
        pageLength: 5,
        responsive: true,
        destroy:true,
        paging:false,
        lengthMenu:false,
        bInfo : false,
        searching: false,
        ordering:false,
        dom: `<'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
        language: {
            'lengthMenu': 'Display _MENU_',
        },
        columnDefs: dColumStyle,
        ajax: {
            "url": dAct,
            "error": function (jqXHR, textStatus, errorThrown) {
                znNotif("warning", "Koneksi Bermasalah, Terjadi Kesalahan Saat Pengambilan Data !");
            }
        },
        columns: dColum
    });

    return table;
}

function loadContent(e, elm) {
    e.preventDefault();
    let path = $(elm).attr('href').replace('#', '');

    $('.menuLink').removeClass('active');
    $(elm).addClass('active');

    // $("[id^='sb-']").removeClass('zn-menu-active');
    // $("#"+elm.id).addClass('zn-menu-active');
    // $('#set_breadcrumbs').html(elm.childNodes[3].innerHTML);
    // $('#set_breadcrumbs_sub').html("Data "+elm.childNodes[3].innerHTML);

    showPage(path);
}

function showPage(url) {

    $('#pageLoad').fadeOut();
    znLoadingPage();

    if ( typeof(window.history.pushState) == 'function' ) {
        var stateObj ={
            title: 'backhistory',
            url: url,
        } ;
        window.history.pushState (stateObj, 'backhistory', url) ;
    }

    let state = {name: "name", page: 'History', url:url};
    doGet(url, function (msg, data) {
        
        znLoadingPageEnd();
        
        if (data == null){
            znNotif("danger", msg);

            // toastr.error(msg);
        }else {
            $('#pageLoad').html(data).fadeIn();
            window.history.replaceState(state, "History", url);
            animateCSS('#pageLoad', 'fadeInRight', function () {
            });

        }
    });
}

function znClearInputUsername(objek) {
    var separator = "";
    var a = objek.value;
    // var b = a.replace(/\'/g, "");
    var b = a.replace(/[^a-zA-Z0-9_@]/g, "");
    objek.value = b;
}

function znClearInputEmail(objek) {
    var separator = "";
    var a = objek.value;
    // var b = a.replace(/\'/g, "");
    var b = a.replace(/[^a-zA-Z0-9_.@]/g, "");
    objek.value = b;
}

function animateCSS(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }


function doPost(url, formData, callback) {
    $.ajax({
        processData: false,
        contentType: false,
        type: 'POST',
        global: false,
        url: url,
        data: formData,
        success: function (response) {
            // todo improve sesuai kebutuhan nantiya
            if (typeof callback == 'function') {
                callback("", response);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 419){
                window.location.replace("/");
            }else {
                if (typeof callback == 'function') {
                    callback(jqXHR.responseJSON?.message, null);
                }
            }
        }
    });
}
function doGet(url, callback) {
    $.get(url, function (response, status, xhr) {
        if (typeof callback == 'function') {
            callback("", response);
        }
    }).fail(function (response) {
        if (response.status === 401){
            window.location.replace("/login_action");
        }else {
            if (typeof callback == 'function') {
                callback(response.responseJSON?.message, null);
            }
        }
    });
}

var blockUIModal;

    function znLoadingModal(form) {
        var target = document.querySelector("#"+form);
        blockUIModal = new KTBlockUI(target,{
        message: '<div class="blockui-message"><span class="spinner-border text-primary"></span> Loading...</div>',
    });
        blockUIModal.block();
    }

function znLoadingModalEnd(form) {
    // var target = document.querySelector("#"+form);
    // blockUIModal = new KTBlockUI(target);
    blockUIModal.release();
    blockUIModal.destroy();
}

function znLoadingPage() {
    $('#container-loading').fadeIn()
}

function znLoadingPageEnd() {
    $('#container-loading').fadeOut()
}


function znToNumber(objek) {
    var separator = "";
    var a = objek.value;
    var b = a.replace(/[^\d]/g, "");
    var c = "";
    var panjang = b.length;
    var j = 0; for (var i = panjang; i > 0; i--) {
        j = j + 1; if (((j % 3) == 1) && (j != 1)) {
            c = b.substr(i - 1, 1) + separator + c;
        } else {
            c = b.substr(i - 1, 1) + c;
        }
    } objek.value = c;
}

function znClearNPWP(npwp){
    var new_npwp = npwp.replace(/\./g, "");
    new_npwp = new_npwp.replace(/\,/g, "");
    new_npwp = new_npwp.replace(/\-/g, "");
    return new_npwp;
}


function znClearString(str){
    // var new_str = str;
    // if(new_str.includes("<")){
    //     new_str = new_str.replace(/\</g, "");
    // }

    // if(new_str.includes(">")){
    //     new_str = new_str.replace(/\>/g, "");
    // }
    // if(new_str.includes("'")){
    //     new_str = new_str.replace(/\>/g, "");
    // }
    // if(new_str.includes('"')){
    //     new_str = new_str.replace(/\>/g, "");
    // }

    resultStr = (str) ? str:''
    return resultStr;
}

function znNumFormatClear(data) {
     let nom = data.replace(/\./g,'');

     return parseInt(nom);
}

function znToMoney(objek) {
    var separator = ".";
    var a = objek.value;
    var b = a.replace(/[^\d]/g, "");
    var c = "";
    var panjang = b.length;
    var j = 0; for (var i = panjang; i > 0; i--) {
        j = j + 1; if (((j % 3) == 1) && (j != 1)) {
            c = b.substr(i - 1, 1) + separator + c;
        } else {
            c = b.substr(i - 1, 1) + c;
        }
    } objek.value = c;
}

function znNumFormat(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

function znNumFormatDec(amount, decimalCount = 2, decimal = ",", thousands = ".") {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;

            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {

        }
    }

function znToRupiahDec(objek) {
    $(".money").maskMoney({prefix:'', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
}

function popConfirm(title, text, callback) {
    $('#znModal').removeClass('modal-sm');
    let icon = `<i class="la la-question-circle zn-notif-icon text-success"></i>`;
    $('#znNotif-title').addClass('text-success');
    $('.zn-card').addClass('wave-success');
    $('#znNotif-icon').html(icon);
    $('#znNotif-text').html(text);
    $('#znNotif-title').html(title);
    $('#znNotif-action').show();
    $('#btnNotifYes').prop("onclick", null).off("click");
    $('#btnNotifYes').click(function () {
        $('#znNotif').modal('hide');
        if (typeof callback == 'function') {
            callback();
        }
    });
    $('#znNotif').modal('show');
}


function G_cetakAny(typeExport,type,act,getid) {



    switch (type) {
        case "laporan_billing":
            var query = {
                startDate: $('#berkala_startDate').val(),
                endDate: $('#berkala_endDate').val(),
                outlet_filter: outlet_filter,
            }
        break;

    }

    window.open('/global/'+typeExport+'/'+type+'?'+$.param(query), "_blank");
    // this.print();
}

function znRandomString(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function G_FormatDate(dates,type) {
    var date = new Date(dates);

    var monthNames = [
    "Januari", "Februari", "Maret",
    "April", "Mei", "Juni", "Juli",
    "Agustus", "September", "Oktober",
    "November", "Desember"
    ];

    var monthNamesSmall = [
    "Jan", "Feb", "Mar",
    "Apr", "Mei", "Jun", "Jul",
    "Ags", "Sep", "Okt",
    "Nov", "Des"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var sec = date.getSeconds();

    switch (type) {
    case 'd':
        return day;
    break;
    case 'm':
        return monthIndex+1;
    break;
    case 'mm':
        return monthNamesSmall[(monthIndex)];
    break;
    case 'M':
        return monthNames[(monthIndex)];
    break;
    case 'Y':
        return year;
    break;
    case 'd-m-Y':
        return day+'-'+(monthIndex+1)+'-'+year;
    break;
    case 'd-mm-Y':
        return day+' '+monthNamesSmall[(monthIndex)]+' '+year;
    break;
    case 'd-M-Y':
        return day+' '+monthNames[(monthIndex)]+' '+year;
    break;
    case 'd-m-Y H:i:s':
        return day+'-'+monthIndex+'-'+year+ ', '+hour+':'+minute+':'+sec;
    break;
    case 'd-M-Y H:i:s':
        return day+' '+monthNames[(monthIndex)]+' '+year+ ', '+hour+':'+minute+':'+sec;
    break;
    case 'H:i':
        return hour+':'+minute;
    break;
    }
}

function znClearInput(objek) {
    var separator = "";
    var a = objek.value;
    // var b = a.replace(/\'/g, "");
    var b = a.replace(/[^a-zA-Z0-9_@,./:()&=+%\-\ ]/g, "");
    objek.value = b;
}


function znAutoComplete(idelm, url) {
    $('#' + idelm).typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        limit: 12,
        async: true,
        source: function (query, processSync, processAsync) {
            processSync([]);
            return $.ajax({
                url: url,
                type: 'POST',
                data: {
                    query: query
                },
                dataType: 'json',
                beforeSend: function () {
                    $('#loading_'+idelm).show();
                },
                success: function (response) {
                    console.log(response);

                }
            }).done(function (response) {

                    // in this example, json is simply an array of strings
                    return processAsync(response.data);
                    $('#loading_'+idelm).hide();
            });
        }
    }).on('typeahead:asyncrequest', function() {
        $('#loading_'+idelm).show();
    }).on('typeahead:asynccancel typeahead:asyncreceive', function() {
        $('#loading_'+idelm).hide();
    });
}

var waveToggle = false
function setWaveToggle() {
    waveToggle = !waveToggle
    console.log(waveToggle);
    if (waveToggle) {
        $('#zn_wive_head').css('left','-771px');
        $('.aside').css('width','75px');
    }else{
        $('#zn_wive_head').css('left','-566px');
        $('.aside').css('width','275px');
    }
}

$( "#kt_aside" ).mouseenter(()=>{
    if (waveToggle) {
        $('#zn_wive_head').css('left','-566px');
        $('.aside').css('width','275px');
    }

})
.mouseleave(()=>{
    if (waveToggle) {
        $('#zn_wive_head').css('left','-771px');
        $('.aside').css('width','75px');
    }

})

var menuToggle = false
function setMenuToggle() {
    menuToggle = !menuToggle
    if (menuToggle) {
        $('.drawer-start').css('left','250px');
    }else{
        $('.drawer-start').css('left','0px');
    }
}


</script>
