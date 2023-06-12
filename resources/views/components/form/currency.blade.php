@php
   $req = (isset($required)) ? 'required':'';
   $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }
@endphp

<div class="form-group mb-3">
    <label class="title-form">{{$title}}</label>
    <input type="text" class="form-control borderInput" autocomplete="off" oninput="znToMoney(this)" value="{{$value}}" placeholder=" " name="{{$id}}" id="{{$id}}" {{$setDisabled}}>
</div>

