const URL = BASE_URL + "lanjutan/Kka/"

$('#tabelUpdate tbody').on('click', '.oke', function(e) {
    let id = $(this).data('id');


    // console.log(id);
    fetch(URL + 'get_detail_data/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;
            $('#id_kondisi').val(v.id_kondisi)
            $('#id_kka').val(v.id_kka)
            $('#judul_temuan').val(v.judul_temuan)
            $('#kondisi').val(v.kondisi)
            $('#kriteria').val(v.kriteria)
            $('#sebab').val(v.sebab)
            $('#akibat').val(v.akibat)
            $('#usulan_rekomendasi').val(v.usulan_rekomendasi)

            // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

        })
});


$('#btnUpdate').click(() => {

    var ddd = new FormData(frmUpdate)
    console.log(ddd)
    fetch(URL + "proses_update", {
            method: 'POST',
            body: new FormData(frmUpdate)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Kka/manage/" + resultJson.id_auditor + "/" + resultJson.id_penugasan
            };
        })
})
