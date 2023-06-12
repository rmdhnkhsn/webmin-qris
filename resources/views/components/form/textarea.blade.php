@php
   $req = (isset($required)) ? 'required':'';
   $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }
   $setHeight = (isset($height)) ? $height:'125px';
@endphp

<div class="form-group">
    <label class="title-form">{{$title}}</label>
    <textarea class="form-control borderInput py-2" autocomplete="off" placeholder=" " name="{{$id}}" id="{{$id}}" style="height:{{$setHeight}};" cols="30" rows="10"  {{$setDisabled}}>{{$value}}</textarea>
</div>