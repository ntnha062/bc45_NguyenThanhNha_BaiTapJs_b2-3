

// Bài 1
document.getElementById('OK-1').onclick = function(){
    // input
    debugger
    var soNgayLam = +document.getElementById('so-ngay').value;

    //output
    var tienLuong = 0;

    //process
    tienLuong = soNgayLam *100000;

    //print
    document.getElementById('ket-qua-b1').innerHTML = tienLuong + 'Đ';
}

//bài 2
document.getElementById('OK-2').onclick = function(){
    //input
    var soThuNhat =  +document.getElementById('so-1').value;
    var soThuHai = +document.getElementById('so-2').value;
    var soThuBa = +document.getElementById('so-3').value;
    var soThuTu = +document.getElementById('so-4').value;
    var soThuNam = +document.getElementById('so-5').value;

    //output
    var giaTriTb = 0;

    //process
    giaTriTb = (soThuNhat+soThuNhat+soThuHai+soThuBa+soThuTu+soThuNam)/5;

    //print
    document.getElementById('ket-qua-b2').innerHTML = giaTriTb.toFixed(2);
}


//bài 3
document.getElementById('OK-3').onclick = function(){
    //input
    var usd =  +document.getElementById('usd').value;

    //output
    var vnd = 0;

    //process
    vnd = usd *23500;

    //print
    document.getElementById('ket-qua-b3').innerHTML = vnd + ' VND';
}

//bài 4
document.getElementById('OK-4').onclick = function(){
    //input
    var chieuDai =  +document.getElementById('chieu-dai').value;
    var chieuRong =  +document.getElementById('chieu-rong').value;

    //output
    var dienTinhHCN = 0;
    var chuViHCN = 0;

    //process
    dienTinhHCN = chieuDai *chieuRong;
    chuViHCN = (chieuDai + chieuRong)*2;

    //print
    document.getElementById('ket-qua-b4').innerHTML = `
        Chu vi hình chữ nhật: ${chuViHCN} <br>
        Diện tích hình chữ nhật: ${dienTinhHCN}
    `;
}

//bài 5
document.getElementById('OK-5').onclick = function(){
    //input
    var kySo =  +document.getElementById('ky-so').value;

    //output
    var soHangChuc = 0;
    var soHangDonVi = 0;
    var tongKySo = 0;

    //process
    soHangChuc = kySo %10;
    soHangDonVi = +Math.floor(kySo /10);
    tongKySo = soHangChuc + soHangDonVi;

    //print
    document.getElementById('ket-qua-b5').innerHTML = tongKySo;
}


