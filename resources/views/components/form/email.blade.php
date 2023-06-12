@php
   $req = (isset($required)) ? 'required':'';
   $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }

   $labelClass = (isset($labelClass)) ? $labelClass : '';
@endphp
<div class="form-group">
    <label class="title-form">{{$title}}</label>
    <input type="text" class="form-control borderInput" autocomplete="off" oninput="znClearInputEmail(this)" value="{{$value}}" placeholder="Masukkan {{$title}}..." name="{{$id}}" id="{{$id}}" {{$setDisabled}}>
</div>