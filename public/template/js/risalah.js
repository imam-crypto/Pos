const URL = BASE_URL + "lanjutan/RisalahPembahasan/"

$('#tblRisalah tbody').on('click', '.btn-detail', function(e) {

    let id = $(this).data('id');
    console.log(id);
    fetch(URL + 'getKondisi/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;
            $('#id_judul_temuan').val(v.id_judul_temuan)
            $('#id_penugasan').val(v.id_penugasan)
            $('#akibat').val(v.akibat)
            $('#tanggapan').val(v.tanggapan)
            $('#tanggal_komitmen').val(v.tanggal_komitmen)

            // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

        })
})

$('#btnUpdate').click(() => {

    fetch(URL + 'proses_update', {
            method: 'POST',
            body: new FormData(frmRisalah)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/RisalahPembahasan/update_pembahasan/" + resultJson.id_penugasan
            };
        })
})


$('#btnSimpan').click(() => {

    fetch(URL + "proses_tambah_risalah", {
            method: 'POST',
            body: new FormData(frmRisalah)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/RisalahPembahasan/"
            };
        })
})
