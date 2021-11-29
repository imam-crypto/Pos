const URL = BASE_URL + "lanjutan/Kka/"



$('#tblKondisi tbody').on('click', '.btn-detail', function(e) {
    let id = $(this).data('id');

    fetch(URL + 'getDetail/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;
            $('#id_kondisi').val(v.id_kondisi)
            $('#id_penugasan').val(v.id_penugasan)
            $('#id_kka').val(v.id_kka)
            $('#judul_temuan').val(v.judul_temuan)
            $('#kondisi').val(v.kondisi)
            $('#kriteria').val(v.kriteria)
            $('#sebab').val(v.sebab)
            $('#akibat').val(v.akibat)
            $('#usulan_rekomendasi').val(v.usulan_rekomendasi)
            $('#tanggapan').val(v.tanggapan)
            $('#tanggal_komitmen').val(v.tanggal_komitmen)

            $('#lampiran_file').attr('href', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)
            $('#lampiran_file').text(v.lampiran_kertas_kerja)

            // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

        })
})

$('#btnSimpan').click(() => {

    if ($("input[name=approvalAnggota3	]").val() == "") {


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


        fetch(URL + 'proses_assesment', {
                method: 'POST',
                body: new FormData(frmDetail)
            })
            .then(responseJson => responseJson.json())
            .then(resultJson => {
                if (resultJson.success = true) {

                    // icon = "fa fa-check";
                    // $('.btn-detail').append(icon);
                    window.location.href = BASE_URL + "lanjutan/Kka/detail/" + resultJson.id_penugasan

                };
            })
    }

})

// + resultJson.id_role