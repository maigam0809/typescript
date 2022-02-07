export class SanPham {
    // các thuộc tính bao gồm đó là:
    private _id: number;
    private _ten: string;
    private _mota: string;
    private _anh: string;
    private _gia: number;
    private _tinhtrang: boolean;
    constructor(_id:number, _ten:string, _mota:string, _anh:string, _gia:number, _tinhtrang:boolean){
        this._id = _id;
        this._ten = _ten;
        this._mota = _mota;
        this._gia = _gia;
        this._anh = _anh;
        this._tinhtrang = _tinhtrang;
    }

    public get id(): number {
        return this._id;
    }
    
    public set id(v : number) {
        this._id = v;
    }

    public get ten(): string {
        return this._ten;
    }
    
    public set ten(v : string) {
        this._ten = v;
    }

    public get mota(): string {
        return this._mota;
    }
    
    public set mota(v : string) {
        this._mota = v;
    }
    public get gia(): number {
        return this._gia;
    }
    
    public set gia(v : number) {
        this._gia = v;
    }

    public get anh(): string {
        return this._anh;
    }
    
    public set anh(v : string) {
        this._anh = v;
    }

    public get tinhtrang(): boolean {
        return this._tinhtrang;
    }
    
    public set tinhtrang(v : boolean) {
        this._tinhtrang = v;
    }
    
}