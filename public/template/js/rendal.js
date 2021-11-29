const URL = BASE_URL + "admin/DataUser/"

$('.getIdKomentar').on('click', function(e) {
    let id = $(this).data('id');
    console.log(id);



    fetch(URL + 'get_id_komentar/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;



            $('#id_komentar').val(v.id_komentar)
            $('#lampiran_komentar').text(v.lampiran_komentar)

            $('#lampiran_komentar').val(v.lampiran_komentar)

        })

})

$('#selObyek').change(function() {
    let id = $(this).val();
    // console.log(id_penugasan);

    console.log(id);



    fetch(URL + 'getEmail/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;



            $('#email').val(v.email);
            $('#nama').val(v.nama_vp);

        })



});