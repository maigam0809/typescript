class mai{
    ten:string ;
    slogan:string ;
    luongM:number ;

    constructor(ten:string,slogan:string,luongM:number) {
        this.ten = ten;
        this.slogan = slogan;
        this.luongM = luongM;
    }

    chay(){}
    nhay(){}
    
    hienthiten(){
        return `tên nhân vật đó là: ${this.ten}`;
    }

    hienthislogan(){
        return `Khẩu hiệu nhân vật đó là: ${this.slogan}`;
    }
    
    hienthiluongMau(){
        return `Lượng máu của vật đó là: ${this.slogan}`;
    }
}

var nhanvat1 = new mai('Mai', 'Kiếm hiệp Việt Nam', 40);
var nhanvat2 = new mai('Gấm', 'Kiếm hiệp Xuyên Thủ Quốc Gia', 60);
// console.log(nhanvat1);
// console.log(nhanvat2);
// console.log("Hiển thị: "+ nhanvat1.hienthiten());
// console.log("Hiển thị: "+ nhanvat2.hienthislogan());
// console.log("Hiển thị: "+ nhanvat2.hienthiluongMau());


class dien_thoai {
    ten: string;
    gia: number[];
    mausac: string[];
    sao: number;

    constructor (ten:string, gia:number[], mausac:string[], sao:number){
        this.ten = ten;
        this.mausac = mausac;
        this.gia = gia;
        this.sao = sao;
    }

    showNoiDung (){
        return `San phẩm này có tên là: ${this.ten},
        có ${this.mausac.length} màu,
        màu ${this.mausac[0]}, 
        màu ${this.mausac[1]},
        màu ${this.mausac[2]},
        gồm các giá như sau: ${this.gia.length} $
        giá ${this.gia[0]},
        giá ${this.gia[1]},
        giá ${this.gia[2]},
        có số sao là: ${this.sao}
        `
    }


}

var samsung = new dien_thoai("SamSung",[1,2,3],['Xanh','Đỏ','Vàng'], 4);
var samsung2 = new dien_thoai("SamSung",[1,2,3],['Tím','Nâu','Cam'], 3);
// console.log(samsung.showNoiDung())
// console.log(samsung2.showNoiDung())


enum State {
    Create  = 10,
    Prosesing,
    Fisnish
}
class congViec {
    id: number;
    static ten: string = "Học CSS";
    trangthai: state;

    constructor (id:number, ten:string, trangthai:state){
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai;
    }

    thongTin (){
        return `
            ID - ${this.id} , 
            Tên - ${this.ten} , 
            Trạng thái - ${this.trangthai}
        `;
    }

    static staticfilter (){
        return `Chỗ này chạy lấy static này`;
    }
}

// let cv1 = new congViec(1,"Học HTML","Đã hoàn thành");
// console.log(cv1.thongTin());
let cv2 = new congViec(1,"Học HTML",State.Fisnish);
// console.log(cv2.thongTin());

// Bình thường nếu như muôn gọi 1 đối tượng thì bạn phải gọi new và chỉ trỏ đến đối tượng đó
// Nhưng có cách khác là tạo Biến static khi gọi đối tượng thì sẽ không cần phải cầu kì nữa
console.log(congViec.ten)
console.log(congViec.staticfilter())


// bài 4: Kế thừa trong typescipt
class Tuong {
    ten:string ;
    motaTuong:string ;
    kinang:string[];

    constructor (ten:string, motaTuong:string, kinang:string[]){
        this.ten = ten;
        this.motaTuong = motaTuong;
        this.kinang = kinang;
    }

    showThongTin () :string{
        var kn:string = '';
        for (var i = 0; i < this.kinang.length; ++i) {
            kn+= this.kinang[i];
            kn+= "|"
        }
        return `
            Tên tướng: ${this.ten},
            Mô tả tướng: ${this.motaTuong},
            Kĩ năng của tướng: ${kn} 
        `

    }

    showThongTin2 ():void {
        var kn:string = '';
        for (var i = 0; i < this.kinang.length; ++i) {
            kn+= this.kinang[i];
            kn+= "|"
        }
        var thongtinsatthu =  `
            Tên tướng: ${this.ten},
            Mô tả tướng: ${this.motaTuong},
            Kĩ năng của tướng: ${kn},
        `;
        console.log(thongtinsatthu);

    }

}

// var ash = new Tuong('Tú hâm', 'Tướng này khá béo nhá',['Hát','nhảy','múa','ăn']);
// console.log(ash.showThongTin());

class SatThu extends Tuong {
    donsatthu:string;

    constructor (ten:string, motaTuong:string, kinang:string[], donsatthu:string){
        super(ten, motaTuong,kinang);
        this.donsatthu = donsatthu;
    }

    showThongTin ():string{
        var kn:string = '';
        for (var i = 0; i < this.kinang.length; ++i) {
            kn+= this.kinang[i];
            kn+= "|"
        }
        return `
            Tên tướng: ${this.ten},
            Mô tả tướng: ${this.motaTuong},
            Kĩ năng của tướng: ${kn},
            Đòn sát thủ của tướng: ${this.donsatthu}
        `

    }

    showThongTin2 ():void {
        super.showThongTin2();
        console.log("Đòn sát thủ của tướng lần 2 là:" + this.donsatthu);

    }

}
var gamcoder = new SatThu('Gấm beo', 'Tướng này khá là beo nha',['code','hát','phụ hoạ','quẩy'],"Kiếm thiên hiệp");
gamcoder.showThongTin();

// var gamcoder2 = new SatThu('Gấm beo 2', 'Tướng này khá là beo nha 22',['code','hát','phụ hoạ','quẩy'],"Kiếm thiên hiệp");
gamcoder.showThongTin2();