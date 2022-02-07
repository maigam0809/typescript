// ép kiểu trong ts
var kieu1 : any;
kieu1 = "Xin chào mình là Gấm nhá" ;

// kiểu 1: dùng ngoặc mũi tên <string>
console.log((<string>kieu1).length);
// Kiểu thứ 2 là dùng as
console.log((kieu1 as string).length);


// Hàm trả về kiểu dữ liệu là number đó là:

function ttong() : number {
    return 100 + 200;
}
console.log(ttong());

// Hàm kiểu string
function epstring() : string {
    return "Chuyển về kiểu dang string này";
}
console.log(epstring())

// hàm trả về 1 kiểu là object
var gam = {
    name: 'Gấm',
    price: '$400',
    weight: 60
}
function epOject() : object {
    return gam;
}
console.log(epOject());
function epOject1() : any {
    let gam1 = {
        name: 'Gấm',
        price: '$800',
        weight: 55,
        skill : {
            learn : "English",
            change : "Do",
            level: 1
        }
    }
    return gam1;
}
console.log(epOject1());

// hàm trả về 1 kiểu là mảng
function epMang() : object {
    return ['Gam','Mai','Thi'];
}
console.log(epMang());

// Bài 3: Sử dụng tham số trong function

function truyenbien(x: number, y:number) : void {
    var tbc = (x+y)/2
    console.log("Giá trị trung bình của "+ x + " và " + y + " là:" + tbc)
}

truyenbien(4,2);
truyenbien(10,2);

// Bài 4: Anonymous (hàm không có tên) và hàm có tên
var z = function(x:number, y:string): string{
    return `Chào ${y} năm nay bạn có phải ${x} tuổi có đúng không ? `;
}

console.log(z(22,'Gấm'));

var g: (x:number, y:string) => string = function(x, y){
    return `Chào ${y} năm nay bạn có phải ${x} tuổi có đúng không ?`;
}
console.log(z(21,'Mai'));

// function không có kiểu function
var h = (x:number): string {
    return x + 30;
}
console.log(h(20))