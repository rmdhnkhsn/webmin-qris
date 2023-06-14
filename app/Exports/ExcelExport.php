<?php

namespace App\Exports;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithMapping;

class ExcelExport implements FromView,ShouldAutoSize,WithColumnFormatting
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function __construct($param)
    {
        $this->param = $param;
    }

    public function view(): View
    {
        return view($this->param['view'], [
            'param' => $this->param 
        ]);
    }

    public function columnFormats(): array
    {
        return [
            'B' => NumberFormat::FORMAT_NUMBER
        ];
    }

}