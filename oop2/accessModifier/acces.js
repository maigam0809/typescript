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
var khoahoc = /** @class */ (function () {
    function khoahoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    khoahoc.prototype.xemKhoaHoc = function () {
        console.log("\n        ID kho\u00E1 h\u1ECDc l\u00E0: ".concat(this.id, ",\n        T\u00EAn kho\u00E1 h\u1ECDc l\u00E0: ").concat(this.ten, ",\n        Th\u1EDDi l\u01B0\u1EE3ng kho\u00E1 h\u1ECDc l\u00E0: ").concat(this.dodai, " ti\u1EBFng,\n        "));
    };
    return khoahoc;
}());
var khoalaptrinh = /** @class */ (function (_super) {
    __extends(khoalaptrinh, _super);
    function khoalaptrinh(id, ten, dodai, filedinhkem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.filedinhkem = filedinhkem;
        return _this;
    }
    khoalaptrinh.prototype.xemKhoaHoc = function () {
        _super.prototype.xemKhoaHoc.call(this);
        console.log('File đính kèm là:' + this.filedinhkem);
    };
    return khoalaptrinh;
}(khoahoc));
// test trong public
// test trong class đã nha
var khoa08 = new khoahoc(1, "Khoá học adobe", 12);
console.log(khoa08.ten); // với bên ngoài class
console.log(khoa08.xemKhoaHoc()); // với bên trong class
var khoa09 = new khoalaptrinh(2, "Khoá học lập trình", 23, 'https://nextjs.org/docs/basic-features/pages');
console.log(khoa09);
// getter:lấy dữ liệu và setter:sét giưc liệu/giá trị
var hero = /** @class */ (function () {
    function hero(_ten) {
        this._ten = _ten;
    }
    Object.defineProperty(hero.prototype, "ten", {
        get: function () {
            return this._ten;
            // return `0 truy cập tên được đâu`;
        },
        set: function (v) {
            this._ten = v;
        },
        enumerable: false,
        configurable: true
    });
    return hero;
}());
var zeus = new hero('Zenus');
console.log("Tên tướng là: " + zeus.ten);
zeus.ten = "Thần zus nhé";
console.log("Thần sau khi đổi tên đó là:" + zeus.ten);
// Thực hành với getter và setter 
var matkhau = "Anh so";
var Nguoi = /** @class */ (function () {
    function Nguoi() {
    }
    Object.defineProperty(Nguoi.prototype, "ten1", {
        get: function () {
            if (matkhau == "Anh so") {
                return this._ten1;
            }
            else {
                return "Mật khẩu không chính xác";
            }
        },
        set: function (v) {
            if (matkhau == "Anh so") {
                this._ten1 = v;
            }
            else {
                this._ten1 = "Sai mật khẩu";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Nguoi;
}());
matkhau = "Anh việt số 2";
matkhau = "Anh so";
var nguoiso1 = new Nguoi();
nguoiso1.ten1 = "Ngao ngán";
// Sử dụng getter
console.log(nguoiso1.ten1);
// Bài 7: Sử dụng abstract  method
var DienThoai = /** @class */ (function () {
    function DienThoai() {
    }
    DienThoai.prototype.guitinnhan = function () { };
    DienThoai.prototype.goidienthoai = function () { };
    return DienThoai;
}());
// chính xác hoá bằng cách sử dụng từ khoá abstract để sử dụng lại bản trong thiết kế abstract
var Adroid = /** @class */ (function (_super) {
    __extends(Adroid, _super);
    function Adroid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adroid.prototype.guitinnhan = function () {
        console.log("Gui tin nh\u1EAFn cho \u0111i\u1EC7n tho\u1EA1i adroid n\u00E0y");
    };
    Adroid.prototype.goidienthoai = function () {
        console.log("Cho n\u00E0y g\u1ECDi \u0111i\u1EC7n tho\u1EA1i n\u00E0y");
    };
    return Adroid;
}(DienThoai));
var a = new Adroid();
a.goidienthoai();
a.guitinnhan();
// Generic trong typescript
function xem(x) {
    return x;
}
console.log(xem("okook"));
console.log(xem(9999));
var MayTinh = /** @class */ (function () {
    function MayTinh() {
    }
    MayTinh.xemThongTin = function (x) {
        console.log(x);
    };
    return MayTinh;
}());
MayTinh.xemThongTin(["Macbook", "Dell", "Asus"]);
MayTinh.xemThongTin(["Phức hơp", "Dell", 1000]);
function xemtt(motnguoi) {
    console.log("\n    Xin ch\u00E0o m\u1ECDi ng\u01B0\u1EDDi t\u00F4i l\u00E0 ".concat(motnguoi.ten, "\n    n\u0103m nay b\u1EA1n ").concat(motnguoi.tuoi, "\n    tu\u1ED5i ph\u1EA3i kh\u00F4ng ?\n    "));
}
xemtt({ tuoi: 40, ten: "Ting" });
var tuong = /** @class */ (function () {
    function tuong() {
    }
    tuong.prototype.xemtuong = function () {
        console.log('xem');
    };
    tuong.prototype.dokinang = function (mau) {
        return "\u0111\u00F2n k\u0129 n\u0103ng";
    };
    tuong.prototype.bienve = function () {
        console.log("bien ve");
    };
    return tuong;
}());
// namespace và export
(function (Adroid) {
    var String = /** @class */ (function () {
        function String() {
        }
        return String;
    }());
    Adroid.String = String;
    var Number = /** @class */ (function () {
        function Number() {
        }
        return Number;
    }());
    Adroid.Number = Number;
})(Adroid || (Adroid = {}));
var coca = new Adroid.String();
var coca = new Adroid.Number();
