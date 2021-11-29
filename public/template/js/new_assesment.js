const URL = BASE_URL + "lanjutan/Kka/"

$('#btnNew').click(() => {

    // var ddd = new FormData(frmKka)
    console.log(ddd)
    fetch(URL, {
            method: 'POST',
            body: new FormData(frmNewAssesment)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Kka/index/"
            };
        })
})


$('#tblNew tbody').on('click', '.btn-new', function(e) {

    let id = $(this).data('id');
    console.log(id);
    fetch(URL + 'get_data_new_assesment/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;
            console.log(v);
            $('#id_judul_temuan').val(v.id_judul_temuan)
            $('#id_penugasan').val(v.id_penugasan)
            $('#id_kka').val(v.id_kka)
            $('#type').val(v.type)
            $('#id_assesment').val(v.id_assesment)
            $('#id_obyek_audit').val(v.id_obyek_audit)

            $('#lampiran_tindak_lanjut').attr('href', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_tindak_lanjut)
            $('#lampiran_nota').attr('href', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_nota)

            $('#lampiran_tindak_lanjut').text(v.lampiran_tindak_lanjut)
            $('#lampiran_nota').text(v.lampiran_nota)

            // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

        })
})


$('#btnSimpan').click(() => {

    fetch(URL + 'proses_new_assesment', {
            method: 'POST',
            body: new FormData(frmAssest)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Kka/hasil_assesment_auditi/" + resultJson.id_penugasan

            };
        })
})
