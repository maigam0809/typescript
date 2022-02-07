"use strict";
exports.__esModule = true;
exports.SanPham = void 0;
var SanPham = /** @class */ (function () {
    function SanPham(_id, _ten, _mota, _anh, _gia, _tinhtrang) {
        this._id = _id;
        this._ten = _ten;
        this._mota = _mota;
        this._gia = _gia;
        this._anh = _anh;
        this._tinhtrang = _tinhtrang;
    }
    Object.defineProperty(SanPham.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (v) {
            this._ten = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "mota", {
        get: function () {
            return this._mota;
        },
        set: function (v) {
            this._mota = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "gia", {
        get: function () {
            return this._gia;
        },
        set: function (v) {
            this._gia = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "anh", {
        get: function () {
            return this._anh;
        },
        set: function (v) {
            this._anh = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "tinhtrang", {
        get: function () {
            return this._tinhtrang;
        },
        set: function (v) {
            this._tinhtrang = v;
        },
        enumerable: false,
        configurable: true
    });
    return SanPham;
}());
exports.SanPham = SanPham;
