export default class stock{
    constructor(public id:number,public name:string,public price:number){ }
    displayStock(): string {
        return this.id+' '+this.name+' '+this.price;
    }
}

