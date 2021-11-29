const URL = BASE_URL + "dokumen/Rencana/proses_tambah";
const UR = BASE_URL + "dokumen/Rencana/proses_update";

$("#btnAddRencana").click(() => {
	let tr = `
	
	

	`;
	$("#tabelRencana tbody").append(tr);
});
$("#tabelRencana tbody").on("click", ".removeRow", function (e) {
	$(this).closest("tr").remove();
});

$("#btnAd").click(() => {
	let tr = `	<tr>
	<td>
	
	<div class="col-md-10">
	<div class="form-group form-md-line-input has-success form-md-floating-label">
		<div class="input-icon">
			<input type="text" class="form-control" name="ruang_lingkup_audit[]">
			<label for="form_control_1">Ruang Lingkup Audit</label>
			<span class="help-block">Ruang Lingkup Audit</span>
			<i class="fa fa-bell-o"></i>
		</div>
	</div>
</div>
<div class="col-md-1">
	<div class="form-group form-md-line-input has-succes form-md-floating-label">

		<button class="btn btn-circle yellow removeAjah" type="button" ><i class="fa fa-minus"></i> </button>
	</div>
</div>
	
	</td>
</tr>`;
	$("#tabelLingkup tbody").append(tr);
});
$("#tabelLingkup tbody").on("click", ".removeAjah", function (e) {
	$(this).closest("tr").remove();
	console.log(".removeAjah");
});

$("#btnAdd").click(() => {
	let tr = `	<tr>
	<td>
	
	<div class="col-md-10">
	<div class="form-group form-md-line-input has-success form-md-floating-label">
		<div class="input-icon">
			<input type="text" class="form-control" name="pedoman_audit[]">
			<label for="form_control_1">Pedoman Audit</label>
			<span class="help-block">Pedoman Audit</span>
			<i class="fa fa-bell-o"></i>
		</div>
	</div>
</div>
<div class="col-md-1">
	<div class="form-group form-md-line-input has-succes form-md-floating-label">

		<button class="btn btn-circle yellow removeAjahh" type="button" ><i class="fa fa-minus"></i> </button>
	</div>
</div>
	
	</td>
</tr>`;
	$("#tabelPendekatan tbody").append(tr);
});
$("#tabelPendekatan tbody").on("click", ".removeAjahh", function (e) {
	$(this).closest("tr").remove();
});

$("#btnAddd").click(() => {
	let tr = `	<tr>
	<td>
	
	<div class="col-md-10">
																	<div class="form-group form-md-line-input has-success">
																		<div class="input-icon">
																			<input type="date" class="form-control" name="jadwal_audit[]">
																			<label for="form_control_1">Jadwal Audit</label>
																			<span class="help-block">Jadwal Audit</span>
																			<i class="fa fa-date"></i>
																		</div>
																	</div>
																	<div class="form-group form-md-line-input has-success form-md-floating-label">
																	<div class="input-icon">
																		<input type="text" class="form-control" name="keterangan[]">
																		<label for="form_control_1">Keterangan Jadwal</label>
																		<span class="help-block">Keterangan Jadwal</span>
																		<i class="fa fa-bell-o"></i>
																	</div>
																</div>
																</div>
<div class="col-md-1">
	<div class="form-group form-md-line-input has-succes form-md-floating-label">

		<button class="btn btn-circle yellow removeAjahhh" type="button" ><i class="fa fa-minus"></i> </button>
	</div>
</div>
	
	</td>
</tr>`;
	$("#tabelJadwal tbody").append(tr);
});
$("#tabelJadwal tbody").on("click", ".removeAjahhh", function (e) {
	$(this).closest("tr").remove();
});

$("#btnSimpan").click(() => {
	var ddd = new FormData(frmRencana);
	console.log(ddd);

	if ($("input[name=umum]").val() == "") {
		Swal.fire({
			title: "Gambaran Umum Penugasan Jangan Kosong",
			showClass: {
				popup: "animate__animated animate__fadeInDown",
			},
			hideClass: {
				popup: "animate__animated animate__fadeOutUp",
			},
		});

		// alert("no penugasan jangan kosong");
		return false;
	} else if ($("select[name=id_penugasan]").val() == "") {
		Swal.fire({
			title: "Harap Pilih Nomor Penugasan",
			showClass: {
				popup: "animate__animated animate__fadeInDown",
			},
			hideClass: {
				popup: "animate__animated animate__fadeOutUp",
			},
		});
	} else {
		fetch(URL, {
			method: "POST",
			body: new FormData(frmRencana),
		})
			.then((responseJson) => responseJson.json())
			.then((resultJson) => {
				if ((resultJson.success = true)) {
					window.location.href = BASE_URL + "dokumen/Rencana/index/";
				}
			});
	}
});

$("#btnUpdate").click(() => {
	var ddd = new FormData(frmRencanaUpdate);
	console.log(ddd);

	fetch(UR, {
		method: "POST",
		body: new FormData(frmRencanaUpdate),
	})
		.then((responseJson) => responseJson.json())
		.then((resultJson) => {
			if ((resultJson.success = true)) {
				window.location.href = BASE_URL + "dokumen/Rencana/index/";
			}
		});
});
