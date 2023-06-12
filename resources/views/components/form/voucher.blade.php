@php
   $req = (isset($required)) ? 'required':'';
   $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }
   
   $setMaxlength = (isset($maxlength)) ? $maxlength:10;
@endphp

<div class="form-group floating-label-content">
    <div class="relative">
        <input type="text" class="inputLogin floating-input ext-uppercase" autocomplete="off" oninput="znClearInputUsername(this)" maxlength="{{$setMaxlength}}" value="{{$value}}" placeholder=" " name="{{$id}}" id="{{$id}}" {{$setDisabled}}>
        <label class="floating-label" id="label_{{$id}}">{{$title}}</label>
    </div>
</div>