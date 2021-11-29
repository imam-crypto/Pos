const URL = BASE_URL + "divisi/DashboardDivisi/"

const URI = BASE_URL + "Welcome/"


$('#btnKomen').click(() => {

    if ($("input[name=lampiran_komentar]").val() == "") {


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

        const a = new FormData(formNewKomen);
        console.log(a);

        fetch(URL + 'proses_komentar_auditi', {
                method: 'POST',
                body: new FormData(formNewKomen)
            })
            .then(responseJson => responseJson.json())
            .then(resultJson => {
                if (resultJson.success = true) {
                    window.location.href = BASE_URL + "divisi/DashboardDivisi/index/" + resultJson.id_role
                };
            })
    }
})
