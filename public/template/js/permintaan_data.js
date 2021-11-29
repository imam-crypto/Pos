const URL = BASE_URL + "lanjutan/PermintaanData/proses_tambah";
const URI = BASE_URL + "lanjutan/PermintaanData/proses_update";
const URS = BASE_URL + "lanjutan/PermintaanData/";

// $('#sel').change(function (e) {
// 	let id = $(this).data('id_penugasan');
// 	console.log(id);
// })


$('#btnTambah').click(() => {
    let tr = ` 							
	
	<tr>
	<td>


		<div class="form-group form-md-line-input has-success form-md-floating-label">
			<div class="input-icon">
				<input type="text" class="form-control" name="data[]">
				<label for="form_control_1">Data</label>
				<span class="help-block">Data</span>
				<i class="fa fa-bell-o"></i>
			</div>
		</div>


	</td>
	<td style="width: 10%; text-align: center;">
		<button class="btn red removeAjah" type="button"><i class="fa fa-minus"></i> </button>

	</td>
</tr>
	`
    $('#tabelPermintaan tbody').append(tr);
})

$('#tabelPermintaan tbody').on('click', '.removeAjah', function(e) {
    $(this).closest('tr').remove();
})


$('#btnTunda').click(() => {

    var ddd = new FormData(frmPermintaan)
    console.log(ddd)
    fetch(URL, {
            method: 'POST',
            body: new FormData(frmPermintaan),

        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/PermintaanData/index"
            };
        })

})

$('#btnLampiran').click(() => {

    var ddd = new FormData(frmLampiran)
    console.log(ddd)
    fetch(URL, {
            method: 'POST',
            body: new FormData(frmLampiran),

        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/PermintaanData/index"
            };
        })

})

$('#btnUpdate').click(() => {

    var ddd = new FormData(frmUpdate)
    console.log(ddd)
    fetch(URI, {
            method: 'POST',
            body: new FormData(frmUpdate),

        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/PermintaanData/index"
            };
        })

})
$('#tblData tbody').on('click', '.btn-detail', function(e) {
    let id = $(this).data('id');

	console.log(id);

    fetch(URS + 'getDetailData/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;
            $('#id_minta_data').val(v.id_minta_data)

            $('#lampiran').attr("href", BASE_URL + 'asset/lampiran_data/' + v.lampiran)
            $('#lampiran').text(v.lampiran)



        })
})

$('#btnSimpan').click(() => {

    fetch(URS + 'proses_upproval', {
            method: 'POST',
            body: new FormData(frmData)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/PermintaanData/lampiran/" + resultJson.id_permintaan

            };
        })
})

