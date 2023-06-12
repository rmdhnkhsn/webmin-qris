@php
   $req = (isset($required)) ? 'required':'';
   $setDisabled = '';
   if (isset($disabled)) {
    $setDisabled = ($disabled == 'true') ? 'disabled':'';
   }
   $setReadonly = '';
   if (isset($readonly)) {
    $setReadonly = ($readonly == 'true') ? 'readonly':'';
   }

@endphp
<div class="form-group floating-label-content mb-10">
    {{-- <label class="{{$req}} form-label text-capitalize" id="label_{{$id}}">{{$title}}</label> --}}
    <div class="relative">
        <select class="inputCustom floating-input znselectModal" data-control="select2" data-placeholder="Pilih Data " {{$setDisabled}} {{$setReadonly}} name="{{$id}}" id="{{$id}}">
            {{$option}}
        </select>
        <label class="floating-label-custom">Pilih {{$title}}</label>
    </div>
</div>


