const flashData = $(".flash-success").data("flashdata");
const flashHapus = $(".flash-hapus").data("flashhapus");
const flashFailed = $(".flash-failed").data("flashfailed");
const flashselesai = $(".flash-selesai").data("flashselesai");
const flashinfo = $(".flash-info").data("flashdata");

if (flashData) {
    Swal.fire({
        icon: 'success',
        title: '' + flashData,
        showConfirmButton: false,
        timer: 1800,
    })
}

if (flashinfo) {
    Swal.fire({
        title: '' + flashinfo,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}


if (flashHapus) {
    Swal.fire({

        icon: "success",
        title: "data berhasil " + flashHapus,
        showConfirmButton: false,
        timer: 1500,
    });
}



$(".tombol-hapus").on("click", function(e) {
    e.preventDefault();
    const href = $(this).attr("href");

    Swal.fire({
        title: "Anda yakin?",
        text: "data di hapus!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Hapus!",
    }).then((result) => {
        if (result.value == true) {
            document.location.href = href;
        }
    });
});
