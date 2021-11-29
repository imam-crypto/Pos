const URL = BASE_URL + "lanjutan/Kka/"
const UL = BASE_URL

$('#tblKondisi tbody').on('click', '.btn-detail', function(e) {
    let id = $(this).data('id');

    fetch(URL + 'getDetailTemuan/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;
            $('#id_kka').val(v.id_kka)
            $('#id_penugasan').val(v.id_penugasan)
            $('#id_user').val(v.id_user)
            $('#id_kondisi').val(v.id_kondisi)
            $('#judul_temuan').val(v.judul_temuan)
            $('#kondisi').val(v.kondisi)
            $('#kriteria').val(v.kriteria)
            $('#sebab').val(v.sebab)
            $('#akibat').val(v.akibat)
            $('#usulan_rekomendasi').val(v.usulan_rekomendasi)
            $('#tanggapan').val(v.tanggapan)
            $('#tanggal_komitmen').val(v.tanggal_komitmen)

            $('#lampiran_tindak_lanjut').attr("href", BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_tindak_lanjut)
            $('#lampiran_tindak_lanjut').text(v.lampiran_tindak_lanjut)


            $('#lampiran_dookumen').attr("href", BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_dookumen)
            $('#lampiran_dokumen').text(v.lampiran_dokumen)


            $('#lampiran_nota').attr("href", BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_nota)
            $('#lampiran_nota').text(v.lampiran_nota)
                // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

        })
})

$('#btnSimpan').click(() => {

    fetch(URL + 'proses_tindak_lanjut', {
            method: 'POST',
            body: new FormData(frmAssest)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Kka/assesment/" + resultJson.id_penugasan

            };
        })
})


// untuk assesment 2

$('#tblAssesment2 tbody').on('click', '.btn-assesment2', function(e) {
    let id = $(this).data('id');



    fetch(URL + 'get_assesment2/' + id)
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


                $('#id_kka').val(v.id_kka)
                $('#id_penugasan').val(v.id_penugasan)
                $('#id_user').val(v.id_user)
                $('#judul_temuan').val(v.judul_temuan)
                $('#type').val(v.type)
                $('#kondisi').val(v.kondisi)
                $('#kriteria').val(v.kriteria)
                $('#sebab').val(v.sebab)
                $('#akibat').val(v.akibat)
                $('#usulan_rekomendasi').val(v.usulan_rekomendasi)
                $('#tanggapan').val(v.tanggapan)
                $('#tanggal_komitmen').val(v.tanggal_komitmen)

                $('#lampiran_tindak_lanjut').attr("href", BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_tindak_lanjut)
                $('#lampiran_tindak_lanjut').text(v.lampiran_tindak_lanjut)


                $('#lampiran_dookumen').attr("href", BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_dookumen)
                $('#lampiran_dokumen').text(v.lampiran_dokumen)


                $('#lampiran_nota').attr("href", BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_nota)
                $('#lampiran_nota').text(v.lampiran_nota)
                    // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)
            }
        })

})

// untuk assesment 3


$('#tblAssesment3 tbody').on('click', '.btn-assesment3', function(e) {
    let id = $(this).data('id');

    fetch(URL + 'get_assesment3/' + id)
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

                $('#id_kka').val(v.id_kka)
                $('#id_penugasan').val(v.id_penugasan)
                $('#id_user').val(v.id_user)
                $('#judul_temuan').val(v.judul_temuan)
                $('#kondisi').val(v.kondisi)
                $('#kriteria').val(v.kriteria)
                $('#sebab').val(v.sebab)
                $('#akibat').val(v.akibat)
                $('#usulan_rekomendasi').val(v.usulan_rekomendasi)
                $('#tanggapan').val(v.tanggapan)
                $('#tanggal_komitmen').val(v.tanggal_komitmen)

                $('#lampiran_tindak_lanjut').attr("href", BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_tindak_lanjut)
                $('#lampiran_tindak_lanjut').text(v.lampiran_tindak_lanjut)


                $('#lampiran_dookumen').attr("href", BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_dookumen)
                $('#lampiran_dokumen').text(v.lampiran_dokumen)


                $('#lampiran_nota').attr("href", BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_nota)
                $('#lampiran_nota').text(v.lampiran_nota)
                    // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

            }
        })

})

$('#btnSimpanHasas').click(() => {



    fetch(URL + 'proses_assesment2', {
            method: 'POST',
            body: new FormData(frmAssest2)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Kka/index/assesment2/" + resultJson.id_penugasan
            };
        })
})


$('#btnSimpanHasas3').click(() => {



    fetch(URL + 'proses_assesment3', {
            method: 'POST',
            body: new FormData(frmAssest3)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Kka/index/"
            };
        })
})