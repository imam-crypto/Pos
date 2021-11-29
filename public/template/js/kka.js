const URL = BASE_URL + "lanjutan/Kka/proses_tambah"
const UR = BASE_URL + "lanjutan/Kka/"


$('#btnAd').click(() => {
    let tr = `	<tr>
	<td>
	<div class="col-md-6">
	<div class="form-group form-md-line-input has-success form-md-floating-label">
		<div class="input-icon">
			<input type="text" class="form-control" name="judul_temuan[]">
			<label for="form_control_1">Judul Temuan</label>
			<i class="fa fa-bell-o"></i>
		</div>
	</div>
</div>
<div class="col-md-6">
	<div class="form-group form-md-line-input has-success form-md-floating-label">
		<div class="input-icon">
			<input type="text" class="form-control" name="kondisi[]">
			<label for="form_control_1">Kondisi</label>
			<i class="fa fa-bell-o"></i>
		</div>
	</div>
</div>
<div class="col-md-6">
	<div class="form-group form-md-line-input has-success form-md-floating-label">
		<div class="input-icon">
			<input type="text" class="form-control" name="kriteria[]">
			<label for="form_control_1">Kriteria</label>
			<i class="fa fa-bell-o"></i>
		</div>
	</div>
</div>



<div class="col-md-6">
	<div class="form-group form-md-line-input has-success form-md-floating-label">
		<div class="input-icon">
			<input type="text" class="form-control" name="sebab[]">
			<label for="form_control_1">Sebab</label>
			<i class="fa fa-bell-o"></i>
		</div>
	</div>
</div>
<div class="col-md-6">
	<div class="form-group form-md-line-input has-success form-md-floating-label">
		<div class="input-icon">
			<input type="text" class="form-control" name="akibat[]">
			<label for="form_control_1">Akibat</label>
			<i class="fa fa-bell-o"></i>
		</div>
	</div>
</div>
<div class="col-md-6">
	<div class="form-group form-md-line-input has-success form-md-floating-label">
		<div class="input-icon">
			<input type="text" class="form-control" name="usulanRekomendasi[]">
			<label for="form_control_1">Usulan Rekomendasi</label>
			<i class="fa fa-bell-o"></i>
		</div>
	</div>
</div>

<div class="col-md-6">
		<div class="form-group form-md-line-input form-md-floating-label has-success">
			<select class="form-control edited" id="form_control_1" name="kelemahan[]">
				<option value=""> --- Pilih Kelemahan --- </option>
					<option value="akutansi">akutansi</option>
						<option value="kebijakan">kebijakan</option>
						<option value="keuangan">keuangan</option>
						<option value="pencatatan">pencatatan</option>
						<option value="pelaporan">pelaporan</option>
						<option value="prosedur">prosedur</option>
						<option value="sdm">sdm</option>
			</select>
			<label for="form_control_1">Kelmahan</label>
		</div>
	</div>

<div class="col-md-2">
<div class="form-group form-md-line-input has-succes form-md-floating-label">

	<button class="btn btn-circle green-dark removeAjah" type="button"><i class="fa fa-minus"></i> </button>
</div>
</div>
	</td>
</tr>`
    $('#tabelKka tbody').append(tr);
})

$('#tabelKka tbody').on('click', '.removeAjah', function(e) {
    $(this).closest('tr').remove();
    console.log('.removeAjah');
})


$('#btnAdd').click(() => {
    let tr = `	<tr>
	<td>
	<td style="width: 50%;">
	<div class="col-md-10">
		<div
			class="form-group form-md-line-input has-success ">
			<div class="input-icon">
				<input type="file" class="form-control"
					name="dokumen_pendukung[]">
				<label for="form_control_1">Gambar Judul
					Temuan</label>
				<span class="help-block">Attachment</span>
				<i class="fa fa-bell-o"></i>
			</div>
		</div>
	</div>
	<div class="col-md-1">
		<div
			class="form-group form-md-line-input has-succes form-md-floating-label">

			<button class="btn btn-circle red removeAjahh"
				type="button"><i
					class="fa fa-minus"></i> </button>
		</div>
	</div>
</td>
	</td>
</tr>`
    $('#tabelDokumen tbody').append(tr);
})

$('#tabelDokumen tbody').on('click', '.removeAjahh', function(e) {
    $(this).closest('tr').remove();
    console.log('.removeAjahh');
})


$('#btnSimpan').click(() => {

    var ddd = new FormData(frmKka)
    console.log(ddd)
    fetch(URL, {
            method: 'POST',
            body: new FormData(frmKka)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Kka/index/"
            };
        })
})


// console.log(ID_PENUGASAN);
fetch(UR + "grafik_json/" + ID_PENUGASAN)
    .then(responseJson => responseJson.json())
    .then(resultJson => {
        console.log(resultJson)
        let arr_o = [];
        let arr_ot = [];
        let arr_c = [];
        let arr_t = [];
		
        resultJson.forEach(val => {
            arr_ot.push(val.open);
			arr_o.push(parseInt(val.open));
			arr_c.push(parseInt(val.close));
			arr_t.push(parseInt(val.total));
        });

        // console.log(arr_k)
        // console.log(arr_v)

        Highcharts.chart('container', {
            title: {
                text: 'Grafik Temuan'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
				categories:['open','close','total']
			},
			
            series: [{
                type: 'column',
                colorByPoint: true,
				data:[arr_o,arr_c,arr_t],
				
                showInLegend: false
			}],
			
			
			
			
          
        });

    })

fetch(UR + "grafik_kelemahan/" + ID_PENUGASAN)
    .then(responseJson => responseJson.json())
    .then(resultJson => {
        // console.log(resultJson);
        // let x = Object.values(resultJson);

        const arr2 = [];
        resultJson.forEach(v => {
            // let name2 = v.name;
            let y2 = parseInt(v.y);
            arr2.push({ "name": v.name, "y": y2 });
        });

        // Build the chart
        Highcharts.chart('container2', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Tahun 2021'
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.2f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                    },
                    showInLegend: true
                }
            },
            series: [{
                colorByPoint: true,
                data: arr2
                    // data: [{
                    //     name: 'Keuangan',
                    //     y: 1
                    // }, {
                    //     name: 'Pencatatan',
                    //     y: 1
                    // }, {
                    //     name: 'Akuntansi',
                    //     y: 3
                    // }, {
                    //     name: 'Kebijakan',
                    //     y: 1
                    // }]
            }]
        });

    });
