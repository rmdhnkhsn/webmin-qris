@php
   $req = (isset($required)) ? 'required':'';
   $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }

   $setMaxlength = (isset($maxlength)) ? $maxlength:10;
   $labelClass = (isset($labelClass)) ? $labelClass : '';
   $bgReadOnly = (isset($bgReadOnly)) ? $bgReadOnly : '';
   $bgFilter = (isset($bgFilter)) ? $bgFilter : '';
@endphp

<div class="form-group">
    <label class="title-form">{{$title}}</label>
    <input type="text" class="form-control borderInput {{$bgReadOnly}} {{$bgFilter}}" autocomplete="off" oninput="znClearInput(this)" maxlength="{{$setMaxlength}}" value="{{$value}}" placeholder="Masukkan {{$title}}..." name="{{$id}}" id="{{$id}}" {{$setDisabled}}>
</div>