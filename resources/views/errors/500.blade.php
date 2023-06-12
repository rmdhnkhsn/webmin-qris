{{-- @extends('errors::layout')

@section('title', __('Server Error'))
@section('code', '500')
@section('code1', '5')
@section('code2', '0')
@section('code3', '0')
@section('message', __('Server Error')) --}}


<!DOCTYPE html>

<html lang="en">
	<!--begin::Head-->
	<head>
        <link href="{{asset('assets/css/pages/error/error-3.css?v=7.0.5')}}" rel="stylesheet" type="text/css" />
        <x-master.head/>
	</head>
	<!--end::Head-->
	<!--begin::Body-->
	<body id="kt_body" class="header-mobile-fixed subheader-enabled aside-enabled aside-fixed aside-secondary-enabled page-loading">
		<!--begin::Main-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Error-->
			<div class="error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center" style="background-image: url({{asset('assets/media/error/bg3.jpg')}});">
				<!--begin::Content-->
				<div class="px-10 px-md-30 py-10 py-md-0 d-flex flex-column justify-content-md-center">
					<h1 class="error-title text-stroke text-transparent">419</h1>
					<p class="display-4 font-weight-boldest text-white mb-12">NO ACCESS</p>
					<p class="font-size-h1 font-weight-boldest text-dark-75">Sorry we can't seem to find the page you're looking for.</p>
					<p class="font-size-h4 line-height-md">Mybe Problem with your connection, You mush Refresh Your Page or Login Again </p>
				</div>
				<!--end::Content-->
			</div>
			<!--end::Error-->
		</div>
	
	</body>
	<!--end::Body-->
</html>