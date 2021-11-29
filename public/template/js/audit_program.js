const URL = BASE_URL + "dokumen/AuditProgram/proses_tambah"
const URI = BASE_URL + "dokumen/AuditProgram/proses_update"


$('#btnTambah').click(() => {
    let tr = `
	<tr>
<td>
<div class="col-md-11">
<div class="form-group form-md-line-input has-success ">
	<div class="input-icon">
		<input type="text" class="form-control" name="sasaran_audit[]">
		<label for="form_control_1">Sasaran Audit</label>
		<span class="help-block">Sasaran Audit</span>
		<i class="fa fa-bell-o"></i>
	</div>
</div>
</div>
<div class="col-md-1">
<div class="form-group form-md-line-input has-succes form-md-floating-label">

	<button class="btn btn-circle red removeAjah" type="button" ><i class="fa fa-minus"></i> </button>
</div>
</div>
</tr>`
    $('#tabelSasaran tbody').append(tr);
})

$('#tabelSasaran tbody').on('click', '.removeAjah', function(e) {
    $(this).closest('tr').remove();
    console.log('.removeAjah');
})


$('#btnAddd').click(() => {
    let tr = `
	<tr>
<td>
<div class="col-md-11">
<div class="form-group form-md-line-input has-success ">
	<div class="input-icon">
		<input type="text" class="form-control" name="list_dokumen[]">
		<label for="form_control_1">Dokumen Yang Dibuthkan</label>
		<span class="help-block">Dokumen Yang Dibuthkan</span>
		<i class="fa fa-bell-o"></i>
	</div>
</div>
</div>
<div class="col-md-1">
<div class="form-group form-md-line-input has-succes form-md-floating-label">

	<button class="btn btn-circle red removeAjah" type="button" ><i class="fa fa-minus"></i> </button>
</div>
</div>
</tr>`
    $('#tabelDokumen tbody').append(tr);
})

$('#tabelDokumen tbody').on('click', '.removeAjah', function(e) {
    $(this).closest('tr').remove();
    console.log('.removeAjah');
})


$('#btnAdd').click(() => {
    let tr = `
	<tr>
<td>
<div class="col-md-11">
<div class="form-group form-md-line-input has-success ">
	<div class="input-icon">
		<input type="text" class="form-control" name="list_langkah_kerja[]">
		<label for="form_control_1">Langkah Kerja</label>
		<span class="help-block">Langkah Kerja</span>
		<i class="fa fa-bell-o"></i>
	</div>
</div>
</div>
<div class="col-md-1">
<div class="form-group form-md-line-input has-succes form-md-floating-label">

	<button class="btn btn-circle red removeAjahh" type="button" ><i class="fa fa-minus"></i> </button>
</div>
</div>
</tr>`
    $('#tabelLangkahKerja tbody').append(tr);
})

$('#tabelDokumen tbody').on('click', '.removeAjahh', function(e) {
    $(this).closest('tr').remove();
    console.log('.removeAjahh');
})



$('#btnSimpan').click(() => {

    var ddd = new FormData(frmProgram)
    console.log(ddd)
    fetch(URL, {
            method: 'POST',
            body: new FormData(frmProgram)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "dokumen/AuditProgram"
            };
        })
})

$('#btnUpdate').click(() => {

    var ddd = new FormData(frmProgramUpdate)
    console.log(ddd)
    fetch(URI, {
            method: 'POST',
            body: new FormData(frmProgramUpdate)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "dokumen/AuditProgram"
            };
        })
})
