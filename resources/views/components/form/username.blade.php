@php
   $req = (isset($required)) ? 'required':'';
   $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }

   $setMaxlength = (isset($maxlength)) ? $maxlength:10;
   $labelClass = (isset($labelClass)) ? $labelClass : '';
@endphp

<div class="form-group">
    <label class="title-form">{{$title}}</label>
    <input type="text" class="form-control borderInput" autocomplete="off" oninput="znClearInputUsername(this)" value="{{$value}}" maxlength="{{$setMaxlength}}" placeholder="Masukkan {{$title}}..." name="{{$id}}" id="{{$id}}" {{$setDisabled}}>
</div>