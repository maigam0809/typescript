var hinh = /** @class */ (function () {
    // để tạo instance 
    function hinh(ten, slogan, luongM) {
        this.ten = ten;
        this.slogan = slogan;
        this.luongM = luongM;
    }
    hinh.prototype.chay = function () { };
    hinh.prototype.nhay = function () { };
    hinh.prototype.hienthiten = function () {
        return "t\u00EAn nh\u00E2n v\u1EADt \u0111\u00F3 l\u00E0: ".concat(this.ten);
    };
    return hinh;
}());
var nhanvat1 = new hinh('Mai', 'Kiếm hiệp Việt Nam', 40);
console.log(nhanvat1);
// console.log(nhanvat1.hienthiten());
