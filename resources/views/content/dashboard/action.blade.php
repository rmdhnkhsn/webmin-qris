<script>
   
	var setStartDate = null;
	var setEndDate = null;
	var chartTahunanInit;

	$(document).ready(function () {
		initDate()
		initChart('chartTahunan')

		$('.znselect').select2({
            placeholder: "Silahkan Pilih"
        });
	})

	function get_dashboard() {
      

	  var query = {
		  startDate: setStartDate,
		  endDate: setEndDate,
	  }

	  let setUrl = '/data/dashboard'+'?'+$.param(query);

	  $.ajax({
		  url: setUrl,
		  type: 'GET',
		  beforeSend: function () {
			  znLoadingPage();
		  },
		  success: function (res) {

            // JUMLAH
            $('#j_transaksi').html(znNumFormat(res.data.j_transaksi));
            $('#j_fee').html(znNumFormat(res.data.j_fee));
            $('#j_berhasil').html(znNumFormat(res.data.j_berhasil));
            $('#j_gagal').html(znNumFormat(res.data.j_gagal));

            // TOTAL
            $('#t_transaksi').html(znNumFormat(res.data.t_transaksi));
            $('#t_fee').html(znNumFormat(res.data.t_fee));
            $('#t_berhasil').html(znNumFormat(res.data.t_berhasil));
            $('#t_gagal').html(znNumFormat(res.data.t_gagal));

			getChart(res.data.grafik_tahunan.transaksi,'chartTahunan')
			
		  }
	  }).done(function (msg) {
		  znLoadingPageEnd();
	  });
  }

	
	function initDate() {
		var start = moment();
		var end = moment();

		function cb(start, end) {
			setStartDate =  start.format('DD-MM-YYYY');
			setEndDate = end.format('DD-MM-YYYY');
			get_dashboard()
			// console.log('New date range selected: ' + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
			$("#kt_daterangepicker_4").val(start.format('DD MMMM YYYY') + ' - ' + end.format('DD MMMM YYYY'));
		
		}

		$("#kt_daterangepicker_4").daterangepicker({
			startDate: start,
			endDate: end,
			locale: {
				format: 'DD MMMM YYYY'
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

	

	function initChart(type) {

		var catSet = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

		var options = {
			chart: {
				height: 340,
				type: "area"
			},
			dataLabels: {
				enabled: false
			},
			series: [
				{
					name: "Transaksi",
					data: [],
					color: "#4C9A2A"
				},
			],
			fill: {
				type: "gradient",
				gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				stops: [0, 90, 100]
				}
			},
			xaxis: {
				categories: catSet
			}
		};

        chartTahunanInit = new ApexCharts(document.querySelector("#chartTahunan"), options);
        chartTahunanInit.render();
	}

	function getChart(setData,type) {

		switch (type) {
			case 'chartTahunan':
				chartTahunanInit.updateSeries([{
					name: 'Transaksi',
					data: setData
				}])
			break;
		}
	}

</script>