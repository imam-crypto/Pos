const URL = BASE_URL + "laporan/Lha/proses_tambah"

$('#btnSimpan').click(() => {

    var ddd = new FormData(frmLha)
    fetch(URL, {
            method: 'POST',
            body: new FormData(frmLha)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "laporan/Lha/index/"
            };
        })
})

$('#tabelLha tbody').on('click', '.hapus', function(e) {
    $(this).closest('tr').remove();
    console.log('.hapus');
})

