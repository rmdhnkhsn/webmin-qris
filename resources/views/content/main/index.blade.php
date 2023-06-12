@section('content')
    <div class="app-wrapper">
        <div class="row">
            <div class="col-12">
                <div class="justify-sb-res">
                    <div class="title c-666" id="set_breadcrumbs_sub">#</div>
                    <div class="containerRight">
                        <div class="relative">
                            <input type="text" data-kt-filter="search" class="form-control searchInput" placeholder="Cari..." />
                            <img src="{{ url('image/ic_search.svg')}}" class="imgSearch">
                        </div>
                        <div class="justify-start gap-3">
                            @if(view()->exists($vToolbar))
                                @include($vToolbar)
                            @endif
                            <button type="button" onclick="getTable();" class="btn btn-sm btn-icon bg-navy-3" style="border-radius: 20px">
                                <i class="la la-sync fs-4"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="table-responsive mt-8">
                    <table class="table table-row-bordered align-middle gy-4 gs-9 w-100" id="indexTable">
                        <thead class="tableHeader">
                            <tr>
                                @foreach($tableHead as $item)
                                    <th class="{{ $item[1] }}"
                                        {{ ($item[0] == 'No') ? "style='width:50px;'":"" }}
                                        {{ ($item[0] == 'Act') ? "style='width:50px;'":"" }}
                                        {{ ($item[0] == 'Status') ? "style='width:70px;'":"" }}>
                                        {{ $item[0] }}</th>
                                @endforeach
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
    @if(view()->exists($vForm))
        @include($vForm)
    @endif
@endsection

@section('contentScript')
    @include('content.main.main_action_global')
    @include($vAction)
@endsection
