const URL = BASE_URL + "dokumen/SuratPenugasan/proses_tambah_surat";
const URI = BASE_URL + "dokumen/SuratPenugasan/";

$('#btnTambah').click(() => {
    let tr = ` 							
	
	<tr>
	<td>


		<div class="form-group form-md-line-input has-success form">
			<div class="input-icon">
				<input type="text" class="form-control" name="sasaran_audit[]">
				<label for="form_control_1">Sasaran Audit</label>
				<span class="help-block">Sasaran Audit</span>
				<i class="fa fa-bell-o"></i>
			</div>
		</div>


	</td>
	<td style="width: 10%; text-align: center;">
		<button class="btn btn-circle red removeAjah" type="button"><i class="fa fa-minus"></i> </button>

	</td>
</tr>
	`
    $('#tabelSasaran tbody').append(tr);
})

$('#tabelSasaran tbody').on('click', '.removeAjah', function(e) {
    $(this).closest('tr').remove();
})


$('#btnTunda').click(() => {

    // console.log($("input[name=nomor_penugasan]").val());

    if ($("input[name=nomor_penugasan]").val() == "") {


        Swal.fire({
            title: 'Nomor Penugasan Jangan Kosong',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

        // alert("no penugasan jangan kosong");
        return false;
    } else {

        // var ddd = new FormData(frmPenugasan)
        // console.log(ddd)
        fetch(URL, {
                method: 'POST',
                body: new FormData(frmPenugasan),

            })
            .then(responseJson => responseJson.json())
            .then(resultJson => {
                if (resultJson.success = true) {
                    window.location.href = BASE_URL + "dokumen/SuratPenugasan/index"
                }
            })

    }

})

$('#simpanUpdate').click(() => {

    var ddd = new FormData(frmEditPenugasan)
    console.log(ddd)
    fetch(URI + "proses_update_surat", {
            method: 'POST',
            body: new FormData(frmEditPenugasan),

        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "dokumen/SuratPenugasan/index"
            }
        })

})
