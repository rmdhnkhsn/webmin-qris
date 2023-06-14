@php
    $data = $param['data'];
@endphp

<table>
    <tr>
        <!-- <th style="border: 1px solid #2b2b2b; font-weight: bold">No</th> -->
        <th style="border: 1px solid #2b2b2b; font-weight: bold">Tanggal Trx</th>
        <th style="border: 1px solid #2b2b2b; font-weight: bold">Account No</th>
        <th style="border: 1px solid #2b2b2b; font-weight: bold">Nominal</th>
        <th style="border: 1px solid #2b2b2b; font-weight: bold">Fee</th>
        <th style="border: 1px solid #2b2b2b; font-weight: bold">RRN</th>
        <th style="border: 1px solid #2b2b2b; font-weight: bold">Trace No</th>
        <th style="border: 1px solid #2b2b2b; font-weight: bold">Proc Code</th>
        <th style="border: 1px solid #2b2b2b; font-weight: bold">RC</th>
        <th style="border: 1px solid #2b2b2b; font-weight: bold">RC CBS</th>
        <th style="border: 1px solid #2b2b2b; font-weight: bold">RC CBS REV</th>
    </tr>
    @foreach($data as $v)
        <tr>
            <!-- <td style="border: 1px solid #2b2b2b; font-weight: medium">{{$v->msg_id}}</td> -->
            <td style="border: 1px solid #2b2b2b; font-weight: medium">{{date('d/m/Y',strtotime($v->crtdt))}}</td>
            
            @if($v->account_no == null)
                <td style="border: 1px solid #2b2b2b; font-weight: medium">-</td>
            @else
                <td style="border: 1px solid #2b2b2b; font-weight: medium">{{$v->account_no}}</td>
            @endif
            
            @if($v->amount == null)
                <td style="border: 1px solid #2b2b2b; font-weight: medium">-</td>
            @else
                <td style="border: 1px solid #2b2b2b; font-weight: medium">Rp. {{number_format($v->amount)}}</td>
            @endif
            
            @if($v->fee == null)
                <td style="border: 1px solid #2b2b2b; font-weight: medium">-</td>
            @else
                <td style="border: 1px solid #2b2b2b; font-weight: medium">Rp. {{number_format($v->fee)}}</td>
            @endif
            
            @if($v->rrn == null)
                <td style="border: 1px solid #2b2b2b; font-weight: medium">-</td>
            @else
                <td style="border: 1px solid #2b2b2b; font-weight: medium">{{$v->rrn}}</td>
            @endif
            
            @if($v->traceno == null)
                <td style="border: 1px solid #2b2b2b; font-weight: medium">-</td>
            @else
                <td style="border: 1px solid #2b2b2b; font-weight: medium">{{$v->traceno}}</td>
            @endif
            
            @if($v->proc_code == null)
                <td style="border: 1px solid #2b2b2b; font-weight: medium">-</td>
            @else
                <td style="border: 1px solid #2b2b2b; font-weight: medium">{{$v->proc_code}}</td>
            @endif
            
            @if($v->rc == null)
                <td style="border: 1px solid #2b2b2b; font-weight: medium">-</td>
            @else
                <td style="border: 1px solid #2b2b2b; font-weight: medium">{{$v->rc}}</td>
            @endif
            
            @if($v->rc_cbs == null)
                <td style="border: 1px solid #2b2b2b; font-weight: medium">-</td>
            @else
                <td style="border: 1px solid #2b2b2b; font-weight: medium">{{$v->rc_cbs}}</td>
            @endif
            
            @if($v->rc_cbs_rev == null)
                <td style="border: 1px solid #2b2b2b; font-weight: medium">-</td>
            @else
                <td style="border: 1px solid #2b2b2b; font-weight: medium">{{$v->rc_cbs_rev}}</td>
            @endif
        </tr>
    @endforeach
</table>