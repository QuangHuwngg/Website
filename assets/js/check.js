function success(){
    swal(
        'Nguyễn Quang Hưng',
        '<b style="color:green;">Toán</b>: 10 <b style="color:green;">Văn</b>: 10 <b style="color:green;">Anh</b>: 10',
        'success'
    )
};
function error() {
    swal(
        'Error!',
        'Thông tin đăng nhập không chính xác',
        'error'
    )
};
function check(){
    var u = document.getElementById("tk").value;
    var p = document.getElementById("mk").value;
    if (u == "quanghuwngg" && p == "14102008ok") 
        success()
    // if (u == "" && p == "") 
    //     success()
    else
        error()
}