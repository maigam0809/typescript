var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mai = /** @class */ (function () {
    function mai(ten, slogan, luongM) {
        this.ten = ten;
        this.slogan = slogan;
        this.luongM = luongM;
    }
    mai.prototype.chay = function () { };
    mai.prototype.nhay = function () { };
    mai.prototype.hienthiten = function () {
        return "t\u00EAn nh\u00E2n v\u1EADt \u0111\u00F3 l\u00E0: ".concat(this.ten);
    };
    mai.prototype.hienthislogan = function () {
        return "Kh\u1EA9u hi\u1EC7u nh\u00E2n v\u1EADt \u0111\u00F3 l\u00E0: ".concat(this.slogan);
    };
    mai.prototype.hienthiluongMau = function () {
        return "L\u01B0\u1EE3ng m\u00E1u c\u1EE7a v\u1EADt \u0111\u00F3 l\u00E0: ".concat(this.slogan);
    };
    return mai;
}());
var nhanvat1 = new mai('Mai', 'Kiếm hiệp Việt Nam', 40);
var nhanvat2 = new mai('Gấm', 'Kiếm hiệp Xuyên Thủ Quốc Gia', 60);
// console.log(nhanvat1);
// console.log(nhanvat2);
// console.log("Hiển thị: "+ nhanvat1.hienthiten());
// console.log("Hiển thị: "+ nhanvat2.hienthislogan());
// console.log("Hiển thị: "+ nhanvat2.hienthiluongMau());
var dien_thoai = /** @class */ (function () {
    function dien_thoai(ten, gia, mausac, sao) {
        this.ten = ten;
        this.mausac = mausac;
        this.gia = gia;
        this.sao = sao;
    }
    dien_thoai.prototype.showNoiDung = function () {
        return "San ph\u1EA9m n\u00E0y c\u00F3 t\u00EAn l\u00E0: ".concat(this.ten, ",\n        c\u00F3 ").concat(this.mausac.length, " m\u00E0u,\n        m\u00E0u ").concat(this.mausac[0], ", \n        m\u00E0u ").concat(this.mausac[1], ",\n        m\u00E0u ").concat(this.mausac[2], ",\n        g\u1ED3m c\u00E1c gi\u00E1 nh\u01B0 sau: ").concat(this.gia.length, " $\n        gi\u00E1 ").concat(this.gia[0], ",\n        gi\u00E1 ").concat(this.gia[1], ",\n        gi\u00E1 ").concat(this.gia[2], ",\n        c\u00F3 s\u1ED1 sao l\u00E0: ").concat(this.sao, "\n        ");
    };
    return dien_thoai;
}());
var samsung = new dien_thoai("SamSung", [1, 2, 3], ['Xanh', 'Đỏ', 'Vàng'], 4);
var samsung2 = new dien_thoai("SamSung", [1, 2, 3], ['Tím', 'Nâu', 'Cam'], 3);
// console.log(samsung.showNoiDung())
// console.log(samsung2.showNoiDung())
var State;
(function (State) {
    State[State["Create"] = 10] = "Create";
    State[State["Prosesing"] = 11] = "Prosesing";
    State[State["Fisnish"] = 12] = "Fisnish";
})(State || (State = {}));
var congViec = /** @class */ (function () {
    function congViec(id, ten, trangthai) {
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai;
    }
    congViec.prototype.thongTin = function () {
        return "\n            ID - ".concat(this.id, " , \n            T\u00EAn - ").concat(this.ten, " , \n            Tr\u1EA1ng th\u00E1i - ").concat(this.trangthai, "\n        ");
    };
    congViec.staticfilter = function () {
        return "Ch\u1ED7 n\u00E0y ch\u1EA1y l\u1EA5y static n\u00E0y";
    };
    congViec.ten = "Học CSS";
    return congViec;
}());
// let cv1 = new congViec(1,"Học HTML","Đã hoàn thành");
// console.log(cv1.thongTin());
var cv2 = new congViec(1, "Học HTML", State.Fisnish);
// console.log(cv2.thongTin());
// Bình thường nếu như muôn gọi 1 đối tượng thì bạn phải gọi new và chỉ trỏ đến đối tượng đó
// Nhưng có cách khác là tạo Biến static khi gọi đối tượng thì sẽ không cần phải cầu kì nữa
console.log(congViec.ten);
console.log(congViec.staticfilter());
// bài 4: Kế thừa trong typescipt
var Tuong = /** @class */ (function () {
    function Tuong(ten, motaTuong, kinang) {
        this.ten = ten;
        this.motaTuong = motaTuong;
        this.kinang = kinang;
    }
    Tuong.prototype.showThongTin = function () {
        var kn = '';
        for (var i = 0; i < this.kinang.length; ++i) {
            kn += this.kinang[i];
            kn += "|";
        }
        return "\n            T\u00EAn t\u01B0\u1EDBng: ".concat(this.ten, ",\n            M\u00F4 t\u1EA3 t\u01B0\u1EDBng: ").concat(this.motaTuong, ",\n            K\u0129 n\u0103ng c\u1EE7a t\u01B0\u1EDBng: ").concat(kn, " \n        ");
    };
    Tuong.prototype.showThongTin2 = function () {
        var kn = '';
        for (var i = 0; i < this.kinang.length; ++i) {
            kn += this.kinang[i];
            kn += "|";
        }
        var thongtinsatthu = "\n            T\u00EAn t\u01B0\u1EDBng: ".concat(this.ten, ",\n            M\u00F4 t\u1EA3 t\u01B0\u1EDBng: ").concat(this.motaTuong, ",\n            K\u0129 n\u0103ng c\u1EE7a t\u01B0\u1EDBng: ").concat(kn, ",\n        ");
        console.log(thongtinsatthu);
    };
    return Tuong;
}());
// var ash = new Tuong('Tú hâm', 'Tướng này khá béo nhá',['Hát','nhảy','múa','ăn']);
// console.log(ash.showThongTin());
var SatThu = /** @class */ (function (_super) {
    __extends(SatThu, _super);
    function SatThu(ten, motaTuong, kinang, donsatthu) {
        var _this = _super.call(this, ten, motaTuong, kinang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    SatThu.prototype.showThongTin = function () {
        var kn = '';
        for (var i = 0; i < this.kinang.length; ++i) {
            kn += this.kinang[i];
            kn += "|";
        }
        return "\n            T\u00EAn t\u01B0\u1EDBng: ".concat(this.ten, ",\n            M\u00F4 t\u1EA3 t\u01B0\u1EDBng: ").concat(this.motaTuong, ",\n            K\u0129 n\u0103ng c\u1EE7a t\u01B0\u1EDBng: ").concat(kn, ",\n            \u0110\u00F2n s\u00E1t th\u1EE7 c\u1EE7a t\u01B0\u1EDBng: ").concat(this.donsatthu, "\n        ");
    };
    SatThu.prototype.showThongTin2 = function () {
        _super.prototype.showThongTin2.call(this);
        console.log("Đòn sát thủ của tướng lần 2 là:" + this.donsatthu);
    };
    return SatThu;
}(Tuong));
var gamcoder = new SatThu('Gấm beo', 'Tướng này khá là beo nha', ['code', 'hát', 'phụ hoạ', 'quẩy'], "Kiếm thiên hiệp");
gamcoder.showThongTin();
// var gamcoder2 = new SatThu('Gấm beo 2', 'Tướng này khá là beo nha 22',['code','hát','phụ hoạ','quẩy'],"Kiếm thiên hiệp");
gamcoder.showThongTin2();
