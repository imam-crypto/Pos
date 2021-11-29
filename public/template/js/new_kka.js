const URL = BASE_URL + "lanjutan/Kka/new_proses_tambah"
const UR = BASE_URL + "lanjutan/Kka/"


$('#btnAdForm').click(() => {
	let tr = `
	<tr>
	<td>

		<table style="width: 100%;" id="tabelJudul">
			<tbody>
				<tr>
					<td style="width: 50%;">
						<div class="col-md-12">
							<div
								class="form-group form-md-line-input has-success form-md-floating-label">
								<div class="input-icon">
									<input type="text" class="form-control"
										name="judul_temuan[]">
									<label for="form_control_1">Judul
										Temuan</label>

									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>

					</td>
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

								<button class="btn btn-circle green-dark"
									type="button" id="btnAdd"><i
										class="fa fa-plus"></i> </button>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>



		<table style="width: 100%;" id="tabelKondisi">
			<tbody>
				<tr>
					<td style="width: 50%;">
						<div class="col-md-12">
							<div
								class="form-group form-md-line-input has-success form-md-floating-label">
								<div class="input-icon">
									<input type="text" class="form-control"
										name="kondisi[]">
									<label for="form_control_1">Kondisi</label>

									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>

					</td>
					<td style="width: 50%;">
						<div class="col-md-10">
							<div
								class="form-group form-md-line-input has-success ">
								<div class="input-icon">
									<input type="file" class="form-control"
										name="gambar_kondisi[]">
									<label for="form_control_1">Gambar
										Kondisi</label>
									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>
						<div class="col-md-1">
							<div
								class="form-group form-md-line-input has-succes form-md-floating-label">

								<button class="btn btn-circle green-dark"
									type="button" id="btnAddd"><i
										class="fa fa-plus"></i> </button>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

		<table style="width: 100%;" id="tabelKriteria">
			<tbody>
				<tr>
					<td style="width: 50%;">
						<div class="col-md-12">
							<div
								class="form-group form-md-line-input has-success form-md-floating-label">
								<div class="input-icon">
									<input type="text" class="form-control"
										name="kriteria[]">
									<label for="form_control_1">Kriteria</label>

									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>

					</td>
					<td style="width: 50%;">
						<div class="col-md-10">
							<div
								class="form-group form-md-line-input has-success ">
								<div class="input-icon">
									<input type="file" class="form-control"
										name="gambar_kondisi[]">
									<label for="form_control_1">Gambar
										Kriteria</label>
									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>
						<div class="col-md-1">
							<div
								class="form-group form-md-line-input has-succes form-md-floating-label">

								<button class="btn btn-circle green-dark"
									type="button" id="btnAdddd"><i
										class="fa fa-plus"></i> </button>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

		<table style="width: 100%;" id="tabelSebab">
			<tbody>
				<tr>
					<td style="width: 50%;">
						<div class="col-md-12">
							<div
								class="form-group form-md-line-input has-success form-md-floating-label">
								<div class="input-icon">
									<input type="text" class="form-control"
										name="sebab[]">
									<label for="form_control_1">Sebab</label>

									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>

					</td>
					<td style="width: 50%;">
						<div class="col-md-10">
							<div
								class="form-group form-md-line-input has-success ">
								<div class="input-icon">
									<input type="file" class="form-control"
										name="gambar_sebab[]">
									<label for="form_control_1">Gambar
										Sebab</label>
									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>
						<div class="col-md-1">
							<div
								class="form-group form-md-line-input has-succes form-md-floating-label">

								<button class="btn btn-circle green-dark"
									type="button" id="btnAddddd"><i
										class="fa fa-plus"></i> </button>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

		<table style="width: 100%;" id="tabelAkibat">
			<tbody>
				<tr>
					<td style="width: 50%;">
						<div class="col-md-12">
							<div
								class="form-group form-md-line-input has-success form-md-floating-label">
								<div class="input-icon">
									<input type="text" class="form-control"
										name="akibat[]">
									<label for="form_control_1">Akibat</label>

									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>

					</td>
					<td style="width: 50%;">
						<div class="col-md-10">
							<div
								class="form-group form-md-line-input has-success ">
								<div class="input-icon">
									<input type="file" class="form-control"
										name="gambar_akibat[]">
									<label for="form_control_1">Gambar
										Akibat</label>
									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>
						<div class="col-md-1">
							<div
								class="form-group form-md-line-input has-succes form-md-floating-label">

								<button class="btn btn-circle green-dark"
									type="button" id="btnAdddddd"><i
										class="fa fa-plus"></i> </button>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

		<table style="width: 100%;" id="tabelRekomendasi">
			<tbody>
				<tr>
					<td style="width: 50%;">
						<div class="col-md-12">
							<div
								class="form-group form-md-line-input has-success form-md-floating-label">
								<div class="input-icon">
									<input type="text" class="form-control"
										name="rekomendasi[]">
									<label
										for="form_control_1">Rekomendasi</label>

									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>

					</td>
					<td style="width: 50%;">
						<div class="col-md-10">
							<div
								class="form-group form-md-line-input has-success ">
								<div class="input-icon">
									<input type="file" class="form-control"
										name="gambar_rekomendasi[]">
									<label for="form_control_1">Gambar
										rekomendasi</label>
									<i class="fa fa-bell-o"></i>
								</div>
							</div>
						</div>
						<div class="col-md-1">
							<div
								class="form-group form-md-line-input has-succes form-md-floating-label">

								<button class="btn btn-circle green-dark"
									type="button" id="btnAddddddd"><i
										class="fa fa-plus"></i> </button>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

		<div class="col-md-6">
			<div
				class="form-group form-md-line-input form-md-floating-label has-success">
				<select class="form-control edited" id="form_control_1"
					name="kelemahan[]">
					<option value=""> --- Pilih Kelemahan --- </option>
					<option value="akutansi">akutansi</option>
					<option value="kebijakan">kebijakan</option>
					<option value="keuangan">keuangan</option>
					<option value="pencatatan">pencatatan</option>
					<option value="pelaporan">pelaporan</option>
					<option value="prosedur">prosedur</option>
					<option value="sdm">sdm</option>
				</select>
				<label for="form_control_1">Kelemahan</label>
			</div>
		</div>
		<div class="col-md-2">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle blue" type="button"
					id="btnAdForm"><i class="fa fa-plus"></i> <span>(Tambah Form
						KKA)</span>
				</button>
			</div>
		</div>
	</td>
</tr>
		`
    $('#tabelKka tbody').append(tr);
})

$('#tabelKka tbody').on('click', '.hapus-form', function(e) {
    $(this).closest('tr').remove();
    console.log('.removeAjah');
})

// untuk judul temuan 

$('#btnAdGambarJudul').click(() => {
    let tr = `  <tr>


	<td>
		<div class="col-md-10">
			<div class="form-group form-md-line-input has-success ">
				<div class="input-icon">
					<input type="file" class="form-control"
						name="gambar_judul[]">
					<label for="form_control_1">Gambar
						Judul</label>
					<i class="fa fa-bell-o"></i>
				</div>
			</div>
		</div>
		<div class="col-md-1">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapusGambarJudul"
					type="button"><i
						class="fa fa-minus"></i>
				</button>
			</div>
		</div>
	</td>
</tr>`
    $('#tabelGambarJudul tbody').append(tr);
})

$('#tabelGambarJudul tbody').on('click', '.hapusGambarJudul', function(e) {
    $(this).closest('tr').remove();
    // console.log('.removeAjahh');
})

// end judul temuan


// untuk kondisi temuan


$('#btnAdGambarKondisi').click(() => {
    let tr = `	 <tr>


	<td>
		<div class="col-md-10">
			<div class="form-group form-md-line-input has-success ">
				<div class="input-icon">
					<input type="file" class="form-control"
						name="gambar_kondisi[]">
					<label for="form_control_1">Gambar
						Kondisi</label>
					<i class="fa fa-bell-o"></i>
				</div>
			</div>
		</div>
		<div class="col-md-1">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapusGambarKondisi"
					type="button"><i
						class="fa fa-minus"></i>
				</button>
			</div>
		</div>
	</td>
</tr>`
    $('#tabelGambarKondisi tbody').append(tr);
})

$('#tabelGambarKondisi tbody').on('click', '.hapusGambarKondisi', function(e) {
    $(this).closest('tr').remove();
})


$('#btnAdKondisi').click(() => {
	let tr = `	
	
	<tr>
<td style="width: 70%;">
	<div class="col-md-10">
	 <div
	 class="form-group form-md-line-input form-md-floating-label">
	 <textarea class="form-control" rows="4"
		 name="kondisi[]"></textarea>
	 <label for="form_control_1">Kondisi</label>
 </div>
</div>
<div class="col-md-1">
 <div
	 class="form-group form-md-line-input has-succes form-md-floating-label">

	 <button class="btn circle red hapusKondisi"
		 type="button" ><i
			 class="fa fa-minus"></i> </button>
 </div>
</div>
</td>
</tr>

	`
    $('#tabelKondisi tbody').append(tr);
})

$('#tabelKondisi tbody').on('click', '.hapusKondisi', function(e) {
    $(this).closest('tr').remove();
})


// end kondisi temuan

// untuk kriteria

$('#btnAdKriteria').click(() => {
    let tr = `
	<tr>
	<td style="width: 70%;">
		<div class="col-md-10">
			<div
				class="form-group form-md-line-input form-md-floating-label">
				<textarea class="form-control" rows="4"
					name="kriteria[]"></textarea>
				<label for="form_control_1">Kriteria</label>
			</div>
		</div>
		<div class="col-md-1">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapusKriteria"
					type="button""><i
						class="fa fa-minus"></i> </button>
			</div>
		</div>
	</td>


</tr>
	`
    $('#tabelKriteria tbody').append(tr);
})

$('#tabelKriteria tbody').on('click', '.hapusKriteria', function(e) {
    $(this).closest('tr').remove();
})



$('#btnAdGambarKriteria').click(() => {
    let tr = `	 <tr>


	<td>
		<div class="col-md-10">
			<div class="form-group form-md-line-input has-success ">
				<div class="input-icon">
					<input type="file" class="form-control"
						name="gambar_kriteria[]">
					<label for="form_control_1">Gambar
						Kriteria</label>
					<i class="fa fa-bell-o"></i>
				</div>
			</div>
		</div>
		<div class="col-md-1">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapusGambarKriteria"
					type="button"><i
						class="fa fa-minus"></i>
				</button>
			</div>
		</div>
	</td>
</tr>`
    $('#tabelGambarKriteria tbody').append(tr);
})

$('#tabelGambarKriteria tbody').on('click', '.hapusGambarKriteria', function(e) {
    $(this).closest('tr').remove();
})


// end kriteria


// untuk sebab
$('#btnAdSebab').click(() => {
    let tr = `   <tr>
	<td style="width: 70%;">
		<div class="col-md-10">
			<div
				class="form-group form-md-line-input form-md-floating-label">
				<textarea class="form-control" rows="4"
					name="sebab[]"></textarea>
				<label for="form_control_1">Sebab</label>
			</div>
		</div>
		<div class="col-md-1">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapusSebab"
					type="button"><i
						class="fa fa-minus"></i> </button>
			</div>
		</div>
	</td>


</tr>`
    $('#tabelSebab tbody').append(tr);
})

$('#tabelSebab tbody').on('click', '.hapusSebab', function(e) {
    $(this).closest('tr').remove();
})


$('#btnAdGambarSebab').click(() => {
    let tr = `	 <tr>


	<td>
		<div class="col-md-10">
			<div class="form-group form-md-line-input has-success ">
				<div class="input-icon">
					<input type="file" class="form-control"
						name="gambar_sebab[]">
					<label for="form_control_1">Gambar
						Sebab</label>
					<i class="fa fa-bell-o"></i>
				</div>
			</div>
		</div>
		<div class="col-md-1">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapusGambarSebab"
					type="button"><i
						class="fa fa-minus"></i>
				</button>
			</div>
		</div>
	</td>
</tr>`
    $('#tabelGambarSebab tbody').append(tr);
})

$('#tabelGambarSebab tbody').on('click', '.hapusGambarSebab', function(e) {
    $(this).closest('tr').remove();
})

// end sebab


// untuk akibat

$('#btnAdAkibat').click(() => {
    let tr = ` <tr>
	<td style="width: 70%;">
		<div class="col-md-10">
			<div
				class="form-group form-md-line-input form-md-floating-label">
				<textarea class="form-control" rows="4"
					name="akibat[]"></textarea>
				<label for="form_control_1">Akibat</label>
			</div>
		</div>
		<div class="col-md-1">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapusAkibat"
					type="button"><i
						class="fa fa-minus"></i> </button>
			</div>
		</div>
	</td>


</tr>`
    $('#tabelAkibat tbody').append(tr);
})

$('#tabelAkibat tbody').on('click', '.hapusAkibat', function(e) {
    $(this).closest('tr').remove();
})


$('#btnAdGambarAkibat').click(() => {
    let tr = `	 <tr>


	<td>
		<div class="col-md-10">
			<div class="form-group form-md-line-input has-success ">
				<div class="input-icon">
					<input type="file" class="form-control"
						name="gambar_akibat[]">
					<label for="form_control_1">Gambar
						Akibat</label>
					<i class="fa fa-bell-o"></i>
				</div>
			</div>
		</div>
		<div class="col-md-1">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapusGambarAkibat"
					type="button"><i
						class="fa fa-minus"></i>
				</button>
			</div>
		</div>
	</td>
</tr>`
    $('#tabelGambarAkibat tbody').append(tr);
})

$('#tabelGambarAkibat tbody').on('click', '.hapusGambarAkibat', function(e) {
    $(this).closest('tr').remove();
})

// end akibat

// untuk rekomendasi


$('#btnAdRekomendasi').click(() => {
    let tr = `  <tr>
	<td style="width: 70%;">
		<div class="col-md-10">
			<div
				class="form-group form-md-line-input form-md-floating-label">
				<textarea class="form-control" rows="4"
					name="rekomendasi[]"></textarea>
				<label for="form_control_1">Rekomendasi</label>
			</div>
		</div>
		<div class="col-md-1">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapusRekomendasi"
					type="button"><i
						class="fa fa-minus"></i> </button>
			</div>
		</div>
	</td>


</tr>`
    $('#tabelRekomendasi tbody').append(tr);
})

$('#tabelRekomendasi tbody').on('click', '.hapusRekomendasi', function(e) {
    $(this).closest('tr').remove();
})

// end rekomendasi

// untuk dokumen pendukung

$('#btnAddDokumen').click(() => {
	let tr = `	
	<tr>
	<td>
		<div class="col-md-6">
			<div class="form-group form-md-line-input has-success ">
				<div class="input-icon">
					<input type="file" class="form-control"
						name="dokumen_pendukung[]">
					<label for="form_control_1">Dokumen Pendukung</label>
					<span class="help-block">Attachment</span>
					<i class="fa fa-bell-o"></i>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div
				class="form-group form-md-line-input has-succes form-md-floating-label">

				<button class="btn btn-circle red hapus-dokumen" type="button"
					><i class="fa fa-minus"></i> </button>
			</div>
		</div>
	</td>
</tr>
	
	`
    $('#tabelDokumen tbody').append(tr);
})

$('#tabelDokumen tbody').on('click', '.hapus-dokumen', function(e) {
    $(this).closest('tr').remove();
})



// end dokumen pendukung 



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
        let arr_k = [];
        let arr_v = [];
        resultJson.forEach(val => {
            arr_k.push(val.status);
            arr_v.push(parseInt(val.jml));
        });

        // console.log(arr_k)
        // console.log(arr_v)

        Highcharts.chart('container', {
            title: {
                text: 'Grafik Temuan'
            },
            subtitle: {
                text: 'Global'
            },
            xAxis: {
                categories: arr_k
            },
            series: [{
                type: 'column',
                colorByPoint: true,
                data: arr_v,
                showInLegend: false
            }]
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
