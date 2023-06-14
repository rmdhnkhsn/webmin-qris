
<title>Webmin QRIS</title>
<meta name="csrf-token" content="{{ csrf_token() }}"/>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="shortcut icon" href="{{ asset('image/logo.png')}}" />
<link href="/poppins/poppins.css" rel="stylesheet" type="text/css" />
<link href="{{ asset('/assets/css/datepicker.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ asset('/assets/css/datatables.bundle.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ asset('/assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ asset('/assets/css/bootstrapValidator.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ asset('/assets/css/plugins.bundle.min.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ asset('/assets/sass/variable.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ asset('/assets/sass/globalStyle.css')}}" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">

@php
$token = csrf_token();
setcookie('XSRF-TOKEN', $token, time()+3600,'','',true,false);
@endphp