class hinh {
    ten:string ;
    slogan:string ;
    luongM:number ;

    // để tạo instance 
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
}

var nhanvat1 = new hinh('Mai', 'Kiếm hiệp Việt Nam', 40);
console.log(nhanvat1);
// console.log(nhanvat1.hienthiten());