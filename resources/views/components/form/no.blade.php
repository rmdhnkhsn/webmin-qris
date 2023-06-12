@php
   $req = (isset($required)) ? 'required':'';
   $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }
@endphp
<div class="form-group">
    <label class="title-form">{{$title}}</label>
    <input type="text" class="form-control borderInput" autocomplete="off" oninput="znToNumber(this)" value="{{$value}}" placeholder="Masukkan {{$title}}..." name="{{$id}}" id="{{$id}}" {{$setDisabled}}>
</div>