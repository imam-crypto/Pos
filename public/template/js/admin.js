const URL = BASE_URL + "divisi/DashboardDivisi/"

// const URI = BASE_URL + "Welcome/"



$('#tblKondisi tbody').on('click', '.btn-tanggapi', function(e) {
    let id = $(this).data('id');

    fetch(URL + 'getKondisi/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;
            $('#id_kondisi').val(v.id_kondisi)
            $('#id_kka').val(v.id_kka)
            $('#judul_temuan').val(v.judul_temuan)
            $('#id_penugasan').val(v.id_penugasan)
            $('#kondisi').val(v.kondisi)
            $('#kriteria').val(v.kriteria)
            $('#sebab').val(v.sebab)
            $('#akibat').val(v.akibat)
            $('#tanggapan').val(v.tanggapan)
            $('#tanggal_komitmen').val(v.tanggal_komitmen)

            $('#lampiran_tindak_lanjut').attr('href', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_tindaK_lanjut)
            $('#lampiran_nota').attr('href', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_nota)


            $('#lampiran_tindak_lanjut').text(v.lampiran_tindak_lanjut)
            $('#lampiran_nota').text(v.lampiran_nota)

            // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

        })
})


$('#tblSelesai tbody').on('click', '.btn-selesai', function(e) {

    let id = $(this).data('id');
    console.log(id);
    fetch(URL + 'newGetKondisi/' + id)
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            let v = resultJson;
            $('#id_temuan_kka').val(v.id_temuan_kka)
            $('#id_penugasan').val(v.id_penugasan)
            $('#id_judul_temuan').val(v.id_judul_temuan)
            $('#judul_temuan').val(v.judul_temuan)
            $('#tanggal_komitmen').val(v.tanggal_komitmen)
            $('#type').val(v.type)
            $('#id_assesment').val(v.id_assesment)


            $('#lampiran_tindak_lanjut').attr('href', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_tindak_lanjut)
            $('#lampiran_nota').attr('href', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_nota)

            $('#lampiran_tindak_lanjut').text(v.lampiran_tindak_lanjut)
            $('#lampiran_nota').text(v.lampiran_nota)

            // $('#lampiran_gambar').attr('src', BASE_URL + 'asset/lampiran_divisi/' + v.lampiran_kertas_kerja)

        })
})



$('#btnSimpan').click(() => {

    if ($("input[name=tanggapan]").val() == "") {


        Swal.fire({
            title: 'Harap Mengisi Tanggapan',
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

        fetch(URL + 'proses_tanggapan', {
                method: 'POST',
                body: new FormData(frmKondisi)
            })
            .then(responseJson => responseJson.json())
            .then(resultJson => {
                if (resultJson.success = true) {
                    window.location.href = BASE_URL + "divisi/DashboardDivisi/tanggapi/" + resultJson.id_penugasan
                };
            })
    }
})

$('#btnUlang').click(() => {

    if ($("input[name=lampiran_nota]").val() == "") {


        Swal.fire({
            title: 'Harap Lampirkan Nota',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

        // alert("no penugasan jangan kosong");
        return false;
    } else if ($("input[name=lampiran_dokumen]").val() == "") {
        Swal.fire({
            title: 'Harap Lampirkan Dokumen Tindak Lanjut',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
        return false;
    } else {

        fetch(URL + 'proses_assesment_ulang', {
                method: 'POST',
                body: new FormData(frmAssesmentUlang)
            })
            .then(responseJson => responseJson.json())
            .then(resultJson => {
                if (resultJson.success = true) {
                    window.location.href = BASE_URL + "divisi/DashboardDivisi/index/" + resultJson.id_role
                };
            })
    }
})



$('#btnKomentar').click(() => {

    fetch(URL + 'proses_komentar', {
            method: 'POST',
            body: new FormData(frmKomentarAuditi)
        })
        .then(responseJson => responseJson.json())
        .then(resultJson => {
            if (resultJson.success = true) {
                window.location.href = BASE_URL + "divisi/DashboardDivisi/index/" + resultJson.id_role
            };
        })
})




$('#btnSelesai').click(() => {

    if ($("input[name=lampiran_nota]").val() == "") {


        Swal.fire({
            title: 'Harap Lampirkan Nota',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

        // alert("no penugasan jangan kosong");
        return false;
    } else if ($("input[name=lampiran_dokumen]").val() == "") {
        Swal.fire({
            title: 'Harap Lampirkan Dokumen Tindak Lanjut',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
        return false;
    } else {

        fetch(URL + 'proses_selesai', {
                method: 'POST',
                body: new FormData(frmKondisi)
            })
            .then(responseJson => responseJson.json())
            .then(resultJson => {
                if (resultJson.success = true) {
                    window.location.href = BASE_URL + "divisi/DashboardDivisi/selesai/" + resultJson.id_role
                };
            })
    }
})




// console.log(ID_PENUGASAN);
fetch(URL + "grafik_json/" + ID_PENUGASAN)
    .then(responseJson => responseJson.json())
    .then(resultJson => {
        console.log(resultJson)
		let arr_o = [];
        let arr_ot = [];
        let arr_c = [];
        let arr_t = [];
        resultJson.forEach(val => {
            arr_ot.push(val.open);
			arr_o.push(parseInt(val.open));
			arr_c.push(parseInt(val.close));
			arr_t.push(parseInt(val.total));
        });

        // console.log(arr_k)
        // console.log(arr_v)

        Highcharts.chart('container', {
            title: {
                text: 'Grafik Temuan'
            },
            subtitle: {
                text: 'Global'
            },
            xAxis: {
				categories:['open','close','total']

            },
            series: [{
                type: 'column',
                colorByPoint: true,
				data:[arr_o,arr_c,arr_t],

                showInLegend: false
            }]
        });

    })

fetch(URL + "grafik_kelemahan/" + ID_PENUGASAN)
    .then(responseJson => responseJson.json())
    .then(resultJson => {
        // console.log(resultJson);
        // let x = Object.values(resultJson);

        const arr2 = [];
        resultJson.forEach(v => {
            // let name2 = v.name;
            let y2 = parseInt(v.y);
            arr2.push({ "name": v.name, "y": y2 });
        });

        // Build the chart
        Highcharts.chart('container2', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Tahun 2021'
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.2f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                    },
                    showInLegend: true
                }
            },
            series: [{
                colorByPoint: true,
                data: arr2
                    // data: [{
                    //     name: 'Keuangan',
                    //     y: 1
                    // }, {
                    //     name: 'Pencatatan',
                    //     y: 1
                    // }, {
                    //     name: 'Akuntansi',
                    //     y: 3
                    // }, {
                    //     name: 'Kebijakan',
                    //     y: 1
                    // }]
            }]
        });

    });
