class khoahoc {
    public id: number;
    public ten:string;
    public dodai: number;

    public constructor (id:number, ten:string, dodai:number){
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }

    public xemKhoaHoc (){
        console.log(`
        ID khoá học là: ${this.id},
        Tên khoá học là: ${this.ten},
        Thời lượng khoá học là: ${this.dodai} tiếng,
        `)
    }
}


class khoalaptrinh extends khoahoc {
    public filedinhkem: string;
    public constructor(id:number, ten:string, dodai:number, filedinhkem:string){
        super(id, ten, dodai);
        this.filedinhkem = filedinhkem;
    }

    public xemKhoaHoc() {
        super.xemKhoaHoc();
        console.log('File đính kèm là:'+ this.filedinhkem);
    }
}

// test trong public
// test trong class đã nha
let khoa08 = new khoahoc(1,"Khoá học adobe", 12);
console.log(khoa08.ten); // với bên ngoài class
console.log(khoa08.xemKhoaHoc()); // với bên trong class

let khoa09 = new khoalaptrinh(2,"Khoá học lập trình",23,'https://nextjs.org/docs/basic-features/pages')
console.log(khoa09);

// getter:lấy dữ liệu và setter:sét giưc liệu/giá trị
class hero {
    private _ten:string;

    constructor(_ten:string) {
        this._ten = _ten;
    }

    public get ten():string {
        return this._ten;
        // return `0 truy cập tên được đâu`;
    }
    
    public set ten(v:string):string {
        this._ten = v;
    }
}

var zeus = new hero('Zenus');
console.log("Tên tướng là: "+ zeus.ten);

zeus.ten = "Thần zus nhé";
console.log("Thần sau khi đổi tên đó là:" +zeus.ten);

// Thực hành với getter và setter 
var matkhau:string = "Anh so"
class Nguoi {
    private _ten1:string;
    public get ten1() : string {
        if(matkhau == "Anh so"){
            return this._ten1;
        } else {
            return "Mật khẩu không chính xác";
        }
    }
    
    public set ten1(v : string) {
        if(matkhau == "Anh so"){
            this._ten1 = v;
        } else {
            this._ten1 = "Sai mật khẩu";
        }
    }
    
    
}

matkhau = "Anh việt số 2";
matkhau = "Anh so";
var nguoiso1 = new Nguoi();
nguoiso1.ten1 = "Ngao ngán";

// Sử dụng getter
console.log(nguoiso1.ten1);


// Bài 7: Sử dụng abstract  method
abstract class DienThoai {
    ten:string;
    abstract guitinnhan():void{}
    abstract goidienthoai():string{}
}

// chính xác hoá bằng cách sử dụng từ khoá abstract để sử dụng lại bản trong thiết kế abstract
class Adroid extends DienThoai{
    guitinnhan(): void {
        console.log(`Gui tin nhắn cho điện thoại adroid này`);
    }
    goidienthoai(): string {
        console.log( `Cho này gọi điện thoại này`);
    }
}

var a = new Adroid();
a.goidienthoai();
a.guitinnhan();

// Generic trong typescript
function xem <T> (x:T) :T {
    return x;
}

console.log(xem<string>("okook"));
console.log(xem<number>(9999));

class MayTinh {
    static xemThongTin <T>(x:T[]): void{
        console.log(x);
    }
}

MayTinh.xemThongTin<string>(["Macbook","Dell","Asus"]);
MayTinh.xemThongTin<any>(["Phức hơp","Dell",1000]);

// Interface
interface Nguoi {
    tuoi?: number;
    ten?: string;
}

function xemtt(motnguoi:nguoi) {
    console.log(`
    Xin chào mọi người tôi là ${motnguoi.ten}
    năm nay bạn ${motnguoi.tuoi}
    tuổi phải không ?
    `)
}

xemtt({tuoi: 40, ten: "Ting"});

// interface class -> quy định khi có 1 class tạo từ interface
// thì class đó phải có đủ các thuộc tính 
interface tuongInterface {
    ten:string;
    mau:number;
    satthuong:number;
    mota:string;
    xemtuong ():void;
    donkinang (mau:number):any ;
    bienve():void;
}

class tuong implements tuongInterface {
    ten:string;
    mau:number;
    satthuong:number;
    mota: string;

    xemtuong ():void{
        console.log('xem');
    }
    dokinang (mau:number):any {
        return `đòn kĩ năng`;

    }
    bienve(): void {
        console.log("bien ve")
    }
}

// namespace và export
module Adroid{
    export class String {

    }
    export class Number {
        
    }
}
var coca = new Adroid.String();
var coca = new Adroid.Number();