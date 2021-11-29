const URL = BASE_URL + "lanjutan/Notisi/new_proses_tambah"


$('#tabelNot tbody').on('click', '.removeAjah', function(e) {
    console.log('kopi');
})

$('#btnSimpan').click(() => {

    var ddd = new FormData(frmNot)
    console.log(ddd)
    fetch(URL, {
            method: 'POST',
            body: new FormData(frmNot)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "lanjutan/Notisi/"
            };
        })
})
