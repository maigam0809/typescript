import {SanPham} from './sanpham.ts';

class QuanLyHang {
    private hang = SanPham[] = [];
    constructor (){}
    getCacSanPham () :SanPham[] {
        return [];
    }
    getSanPhamById () : SanPham{
        var motasanpham = new SanPham(1,"Quả cherry nhập khẩu","chery nhập khẩu rất ngon với hương vị","image/1.jpg",20000,true);
        return motasanpham;
    }

    addSanPham () :void{}
    showSanPham () :string{ return '';}
}