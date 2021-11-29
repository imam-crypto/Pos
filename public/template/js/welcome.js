const URL = BASE_URL + "Welcome/"
    // console.log(URL);


fetch(URL + "get_chart")
    .then(responseJson => responseJson.json())
    .then(resultJson => {
        let v = Object.values(resultJson);
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
        Highcharts.chart('container', {
            title: {
                text: 'Grafik Temuan Keseluruhan'
            },
            subtitle: {
                text: 'Global'
            },
            xAxis: {
                categories: ['open','close','total']

            },
            series: [{
                type: 'column',
                colorByPoint: true,
                // data: v.map(Number),

				data:[arr_o,arr_c,arr_t],

                showInLegend: false
            }]
        });



    })


fetch(URL + "open_chart")
    .then(responseJson => responseJson.json())
    .then(resultJson => {
        console.log(resultJson);
        let arr_ot = [];
		let arr_a = [];
        let arr_e = [];
        let arr_x = [];
        resultJson.forEach(val => {
			// arr_at.push(val.open);
			arr_a.push(parseInt(val.open));
			arr_e.push(parseInt(val.close));
			arr_x.push(parseInt(val.total));
        });
        Highcharts.chart('container1', {
            title: {
                text: 'Grafik Temuan PKAT'
            },
            subtitle: {
                // text: 'Global'
            },
            xAxis: {
                categories: ['open','close','total']

            },
            series: [{
                type: 'column',
                colorByPoint: true,
                // data: v.map(Number),

				data:[arr_a,arr_e,arr_x],

                showInLegend: false
            }]
        });



    })


fetch(URL + "non_pkat_chart")
    .then(responseJson => responseJson.json())
    .then(resultJson => {
        // console.log(resultJson);
		let v = Object.values(resultJson);
		
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
        const chart = Highcharts.chart('container4', {
            title: {
                text: 'Grafik OPEN PROGRAM NON PKAT'
            },
            subtitle: {
                text: ''
            },
			xAxis: {
                categories: ['open','close','total']
				
            },
            series: [{
                type: 'column',
				colorByPoint: true,
				data:[arr_o,arr_c,arr_t],
				
                showInLegend: false
            }]
        });



    })

fetch(URL + "chart_kelemahan")
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

    })
