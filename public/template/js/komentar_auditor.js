const URL = BASE_URL + "lanjutan/Komentar/"

$('#btnKomen').click(() => {

    if ($("input[name=id_komentar]").val() == "") {


        Swal.fire({
            title: 'Harap Pilih Lampiran Komentar (Warna Kuning)',
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

        // console.log(ddd)
        fetch(URL + 'proses_komentar_auditor', {
                method: 'POST',
                body: new FormData(formNewKomenAuditor)
            })
            .then(responseJson => responseJson.json())
            .then(resultJson => {
                if (resultJson.success = true) {
                    window.location.href = BASE_URL + "lanjutan/Komentar/komentar/" + resultJson.id_assesment
                };
            })

    }
})

$('.getIdKomentar').on('click', function(e) {
    let id = $(this).data('id');
    console.log(id);



    fetch(URL + 'get_id_komentar/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;

            if (v == null) {


                Swal.fire({
                    title: 'Auditi Belum Mengirim Dokumen',
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

                $('#id_komentar').val(v.id_komentar)
                $('#id_assesment').val(v.id_assesment)
                $('#lampiran_komentar').text(v.lampiran_komentar)

                $('#lampiran_komentar').val(v.lampiran_komentar)

            }
        })

})
