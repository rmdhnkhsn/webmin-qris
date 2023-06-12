@php
   $req = (isset($required)) ? 'required':'';
    $setModal = (isset($modal)) ? $modal:''; 
    $solid = (isset($solid)) ? 'form-select-solid':'';
    $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }
@endphp
<div class="form-group floating-label-content mb-10">
    <label class="{{$req}} title-form" id="label_{{$id}}">{{$title}}</label>
    <select class="form-control borderInput znselect" data-control="select2" {{$setDisabled}} name="{{$id}}" id="{{$id}}">
        {{$option}}
    </select>
</div>

