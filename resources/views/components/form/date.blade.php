@php
   $req = (isset($required)) ? 'required':'';
   $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }
@endphp

<div class="form-group">
    <label class="{{$req}} title-form" id="label_{{$id}}">{{$title}}</label> 
    <input type="date" class="form-control borderInput znDate" placeholder="Pilih Tanggal" {{$setDisabled}} value="{{$value}}" name="{{$id}}" id="{{$id}}"/>
</div>