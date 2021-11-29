const URL = BASE_URL + "laporan/Ml/proses_tambah"

$('#btnSave').click(() => {

    fetch(URL, {
            method: 'POST',
            body: new FormData(frmMl)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "laporan/Ml/index/"
            };
        })
})


$('#tabelMl tbody').on('click', '.delete', function(e) {
    $(this).closest('tr').remove();
    console.log('.delete');
})
