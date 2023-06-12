@php
   $req = (isset($required)) ? 'required':'';
@endphp
<div class="mb-5 form-group">
    <label class="{{$req}} form-label text-capitalize">{{ $title }}</label>

    <div class="input-group input-group-solid input-group-md mb-2 zn_sh_password{{ $id }}">
        <input oninput="znClearInputUsername(this)" type="password" class="form-control" value="{{ $value }}"
            name="{{ $id }}" id="{{ $id }}" placeholder="XXXXXXX" />
        <div class="pt-1" onclick="znShowPassword(`{{ $id }}`)" style="cursor: pointer; background: #f9f9f9; border-radius: 0 10px 10px 0">
            <span class="input-group-text zn-icon-eye{{ $id }}"><i class="la la-eye-slash fs-3"></i></span>
        </div>
    </div>

</div>
