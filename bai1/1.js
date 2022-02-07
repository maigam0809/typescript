// ép kiểu trong ts
var kieu1;
kieu1 = "Xin chào mình là Gấm nhá";
// kiểu 1: dùng ngoặc mũi tên <string>
console.log(kieu1.length);
// Kiểu thứ 2 là dùng as
console.log(kieu1.length);
// Hàm trả về kiểu dữ liệu là number đó là:
function ttong() {
    return 100 + 200;
}
console.log(ttong());
// Hàm kiểu string
function epstring() {
    return "Chuyển về kiểu dang string này";
}
console.log(epstring());
// hàm trả về 1 kiểu là object
var gam = {
    name: 'Gấm',
    price: '$400',
    weight: 60
};
function epOject() {
    return gam;
}
console.log(epOject());
function epOject1() {
    var gam1 = {
        name: 'Gấm',
        price: '$800',
        weight: 55,
        skill: {
            learn: "English",
            change: "Do",
            level: 1
        }
    };
    return gam1;
}
console.log(epOject1());
// hàm trả về 1 kiểu là mảng
function epMang() {
    return ['Gam', 'Mai', 'Thi'];
}
console.log(epMang());
// Bài 3: Sử dụng tham số trong function
function truyenbien(x, y) {
    var tbc = (x + y) / 2;
    console.log("Giá trị trung bình của " + x + " và " + y + " là:" + tbc);
}
truyenbien(4, 2);
truyenbien(10, 2);
// Bài 4: Anonymous (hàm không có tên) và hàm có tên
var z = function (x, y) {
    return "Ch\u00E0o ".concat(y, " n\u0103m nay b\u1EA1n c\u00F3 ph\u1EA3i ").concat(x, " tu\u1ED5i c\u00F3 \u0111\u00FAng kh\u00F4ng ? ");
};
console.log(z(22, 'Gấm'));
var g = function (x, y) {
    return "Ch\u00E0o ".concat(y, " n\u0103m nay b\u1EA1n c\u00F3 ph\u1EA3i ").concat(x, " tu\u1ED5i c\u00F3 \u0111\u00FAng kh\u00F4ng ?");
};
console.log(z(21, 'Mai'));
// function không có kiểu function
var h = function (x) {
    return x + 30;
};
console.log(h(20));
