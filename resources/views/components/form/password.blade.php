@php
   $req = (isset($required)) ? 'required':'';
@endphp
<div class="mb-5 form-group">
    <label class="{{$req}} form-label text-capitalize">{{ $title }}</label>

    <div class="input-group input-group-solid input-group-md mb-2 zn_sh_password{{ $id }}">
        <input oninput="znClearInputUsername(this)" type="password" class="form-control borderInput" value="{{ $value }}"
            name="{{ $id }}" id="{{ $id }}" placeholder="XXXXXXX" />
        <div onclick="znShowPassword(`{{ $id }}`)">
            <span class="input-group-text zn-icon-eye{{ $id }} h-40px" style="cursor: pointer; border-radius: 0 20px 20px 0"><i class="la la-eye-slash fs-3"></i></span>
        </div>
    </div>

</div>
