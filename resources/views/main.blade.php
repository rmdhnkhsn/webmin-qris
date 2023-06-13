<!DOCTYPE html>
<html lang="en">
	<head>
		<x-master.head />  
	</head>
	<body id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="false" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" class="app-default">
		<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
			<div class="app-page flex-column flex-column-fluid">
				<div id="kt_app_header" class="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">
					<div class="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
						<x-master.brand />  
						<x-master.menu />  
					</div>
				</div>
				<div id="pageLoad">
					@yield('content')
				</div>
				
			</div>
		</div>


		<x-other.modal id="mChangePassword" title="Ubah Password" subTitle="Form Ubah Password" info="" separator="false" size="md">
			<x-slot name="action">
				<button onclick="changePassword_store()" class="btnModal bg-navy-1">Ubah</button>
			</x-slot>
			<x-slot name="content">
				<form id="mChangePasswordForm">
					<x-form.password id="oldPassword" title="Password Lama" value=""/>
					<x-form.password id="newPassword" title="Password Baru" value=""/>
					<div class="text-muted fs-8 mb-5">Password minimal 8 karakter terdiri dari huruf, huruf Kapital, angka dan spesial karakter. Contoh : PointOfSale01@</div>
					<x-form.password id="confirmPassword" title="Ketik Ulang Password Baru" value=""/>
				</form>

			</x-slot>
		</x-other.modal>

		<x-other.notif />
		<x-master.script />
        @yield('contentScript')
	</body>
	<!--end::Body-->
</html>