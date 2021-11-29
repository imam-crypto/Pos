const URL = BASE_URL + "divisi/DashboardDivisi/"

$('#btnLampiran').click(() => {

	if ($("input[name=lampiran	]").val() == "") {


        Swal.fire({
            title: 'Harap Lampirkan File',
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




    fetch(URL + 'proses_kirim_data_ulang', {
            method: 'POST',
            body: new FormData(frmLampiran)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "divisi/DashboardDivisi/pemenuhan_data/" + resultJson.id_role
            };
        })
	}
	
});
