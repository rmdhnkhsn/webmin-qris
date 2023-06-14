<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Management QRIS</title>
		<meta name="csrf-token" content="{{ csrf_token() }}"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
		<link rel="shortcut icon" href="{{ asset('image/logo.png')}}" />
		<link href="/poppins/poppins.css" rel="stylesheet" type="text/css" />
		<link href="{{ asset('/assets/css/style.bundle.min.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{ asset('/assets/css/bootstrapValidator.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{ asset('/assets/custom/login.css')}}" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
	</head>
	<body>
		<div class="container-fluid" id="disableScroll">
			<img src="{{ url('image/login/aksen.svg')}}" class="background">
			<img src="{{ url('image/login/aksen2.svg')}}" class="background2">
			<div class="container">
				<div class="leftSide">
					<div class="grid">
						<div class="block">
							<a href="{{url('/')}}">
								<img src="{{url('image/logo_bank.svg')}}" class="logo">
							</a>
						</div>
						<div class="block">
							<div class="text">Webmin QRIS <div class="fs-2 mt-4">Analisis, manajemen user, config</div>  <div class="fs-2">dan laporan transaksi</div> </div>
						</div>
						<div class="block">
							<img src="{{url('image/login/data-report1.svg')}}" class="dataImg">
						</div>
					</div>
				</div>
				<div class="rightSide">
					<form class="form-vertical" id="formDataLogin">
						<div class="block centered">
							<a href="{{url('/')}}">
								<img src="{{url('image/logo_bank.svg')}}" class="logo2">
							</a>
						</div>
						<div class="cards">
							<div class="title">Log In </div>
							<div class="sub-title">Silahkan masukkan username dan password anda untuk masuk ke halaman selanjutnya</div>
							<div class="form-group relative">
								<div class="title-form">Username</div>
								<input type="text" class="form-control borderInput" name="username" autocomplete="off" placeholder="Masukkan username">
							</div>
							<div class="form-group relative zn_sh_password">
								<div class="title-form">Password</div>
								<input type="password" class="form-control borderInput" name="password" autocomplete="off" placeholder="Masukkan password">
								<button type="button" class="btnShowPassword" onclick="znShowPassword()">
									<i class="la la-eye-slash"></i>
								</button>
							</div>
							<div class="alert alert-danger alert-dismissible d-none" id="alertError">
								<a href="#" class="close" data-dismiss="alert" aria-label="close"><i class="la la-times"></i></a>
							</div>
	
							<div class="alert alert-warning alert-dismissible d-none" id="alertInfo">
								<a href="#" class="close" data-dismiss="alert" aria-label="close"><i class="la la-times"></i></a>
							</div>
	
							<div class="alert alert-success alert-dismissible d-none" id="alertSuccess">
								<a href="#" class="close" data-dismiss="alert" aria-label="close"><i class="la la-times"></i></a>
							</div>
							<div class="block mt-4">
								<button type="button" class="btnLogin" onclick="login();" id="znBtnLoader">
									<span class="indicator-label">
										LOGIN <i class="la la-arrow-right align-middle ms-2"></i>
									</span>
									<span class="indicator-progress">
										Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
									</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="footer">
				<div class="txt">Copyright &copy; 2023.</div>
			</div>
		</div>

		<script src="/assets/plugins/global/plugins.js"></script>
		<script src="/assets/js/scripts.js"></script>
		<script src="/assets/validator/bootstrapValidator.min.js" type="text/javascript"></script>
		
		<script>

			var button = document.querySelector("#znBtnLoader");

			function znShowPassword() {
				if($('.zn_sh_password input').attr("type") == "text"){
					$('.zn_sh_password input').attr('type', 'password');
					$('.btnShowPassword i').addClass( "la-eye-slash" );
					$('.btnShowPassword i').removeClass( "la-eye" );
				}
				else if($('.zn_sh_password input').attr("type") == "password"){
					$('.zn_sh_password input').attr('type', 'text');
					$('.btnShowPassword i').removeClass( "la-eye-slash" );
					$('.btnShowPassword i').addClass( "la-eye" );
				}
			}

				
			$(document).ready(function() {

				document.getElementById('disableScroll').addEventListener('wheel', event => {
				if (event.ctrlKey) {
					event.preventDefault()
				}
				}, true)

				$('#formDataLogin').on('keypress', function (e) {
					var keyCode = e.keyCode || e.which;
					if (keyCode === 13) {
						e.preventDefault();
						document.getElementById("znBtnLoader").click();
					}
				});

				$("#formDataLogin").bootstrapValidator({
					excluded: [':disabled'],
					fields: {
						username: {
							validators: {
								notEmpty: {
									message: 'Tidak Boleh Kosong'
								}
							}
						},
						password: {
							validators: {
								notEmpty: {
									message: 'Tidak Boleh Kosong'
								}
							}
						}

					}
				}).on('success.field.bv', function(e, data) {
					var $parent = data.element.parents('.form-group');
					$parent.removeClass('has-success');
					$parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
				}).on('success.form.bv', function(e) {
				

				});
			});

			function login(){
				var validateLogin = $('#formDataLogin').data('bootstrapValidator').validate();
				if (validateLogin.isValid()) {

					button.setAttribute("data-kt-indicator", "on");

					var formData = document.getElementById("formDataLogin");
					var objData = new FormData(formData);
					
					$.ajaxSetup({
						headers: {
							'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
						}
					});

					$.ajax({
						type: 'POST',
						url: '/login_action',
						data: objData,
						dataType: 'JSON',
						contentType: false,
						cache: false,
						processData: false,

						beforeSend: function () {
							$("#alertInfo").addClass('d-none');
							$("#alertError").addClass('d-none');
							$("#alertSuccess").addClass('d-none');
							$("#loading").css('display', 'block');
						},

						success: function (response) {
							// //console.log(response);
							

							$("#loading").css('display', 'none');
							switch (response.rc) {
								// password / username invalid
								case 0:
								button.removeAttribute("data-kt-indicator");
									$("#inputUsername").val('');
									$("#inputPassword").val('');
									$("#alertError").removeClass('d-none');
									$("#alertError").text(response.rm);
								break;

								// akun tidak aktif
								case 1:
								button.removeAttribute("data-kt-indicator");

									$("#inputUsername").val('');
									$("#inputPassword").val('');
									$("#alertInfo").removeClass('d-none');
									$("#alertInfo").text(response.rm);
								break;

								// reset password
								case 2:
								button.removeAttribute("data-kt-indicator");

									$("#inputUsername").val('');
									$("#inputPassword").val('');
									$("#form-data")[0].reset();
									$('#form-data').bootstrapValidator("resetForm", true);
									$("#modal").modal('show');
									$("#id").val(response.id_user);
								break;

								// login success
								case 3:
									window.location.href = '/dashboard';
								
									
									
								break;
							}
						}

					}).done(function (msg) {
						$("#loading").css('display', 'none');
					}).fail(function (msg) {
						$("#loading").css('display', 'none');
						// toastr.error("Terjadi Kesalahan");
					});
				}
			}
		</script>
	</body>
</html>