const URL = BASE_URL + "lanjutan/Kka/"

$('#tabelManage tbody').on('click', '.oke', function(e) {
    let id = $(this).data('id');


    // console.log(id);
    fetch(URL + 'get_detail_data/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;
            $('#id_kondisi').val(v.id_kondisi)
			$('#id_kka').val(v.id_kka)
            $('#id_penugasan').val(v.id_penugasan)
			
            $('#judul_temuan').val(v.judul_temuan)
            $('#kondisi').val(v.kondisi)
            $('#kriteria').val(v.kriteria)
            $('#sebab').val(v.sebab)
            $('#akibat').val(v.akibat)
            $('#usulan_rekomendasi').val(v.usulan_rekomendasi)

            // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

        })
});


$('#tabelManage tbody').on('click', '.tombol-hapus', function(e) {
    let id = $(this).data('id');


    // console.log(id);
    fetch(URL + 'hapus_temuan/' + id)
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


			if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Kka/index/"
            };

            // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

        })
});



$('#btnUpdate').click(() => {

    var ddd = new FormData(frmManage)
    console.log(ddd)
    fetch(URL + "proses_update", {
            method: 'POST',
            body: new FormData(frmManage)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Kka/manage/" + resultJson.id_auditor + "/" + resultJson.id_penugasan
            };
        })
})
