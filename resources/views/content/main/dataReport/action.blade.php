<script>

    var setStartDate = 0;
    var setEndDate = 0;
    
    $(document).ready(function () {
        initDate()
        getTable()
        $('.znselect').select2({
            placeholder: "Silahkan Pilih",
        });
    })
    
    function getTable() {
        let query = {
            startDate: setStartDate,
            endDate: setEndDate,
        }

        table.ajax.url(routeTable+'&'+$.param(query)).load();
    }
    
    function initDate() {
        var start = moment();
        var end = moment();
    
        function cb(start, end) {
            setStartDate =  start.format('DD-MM-YYYY');
            setEndDate = end.format('DD-MM-YYYY');
    
            getTable()
    
            console.log('New date range selected: ' + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
            $("#kt_daterangepicker_4").val(start.format('DD MMM YYYY') + ' - ' + end.format('DD MMM YYYY'));
        }
    
        $("#kt_daterangepicker_4").daterangepicker({
            startDate: start,
            endDate: end,
            locale: {
                format: 'DD MMM YYYY'
            },
            ranges: {
                "Hari Ini": [moment(), moment()],
                "Kemarin": [moment().subtract(1, "days"), moment().subtract(1, "days")],
                "7 Hari Terakhir": [moment().subtract(6, "days"), moment()],
                "30 Hari Terakhir": [moment().subtract(29, "days"), moment()],
                "Bulan Ini": [moment().startOf("month"), moment().endOf("month")],
                "Bulan Lalu": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
                "Tahun Ini": [moment().startOf("year"), moment().endOf("year")],
                "Tahun Lalu":  [moment().subtract(1, "year").startOf("year"), moment().subtract(1, "year").endOf("year")],
            }
        }, cb);
    
        cb(start, end);
    }
    
</script>