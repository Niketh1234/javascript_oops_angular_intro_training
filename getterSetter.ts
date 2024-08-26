class ATM{
    constructor(){
        this.variable = 'random'
    }
    private pincode : number;
    get code(){return this.pincode}
    set code(pincode:number){this.pincode = pincode}
    readonly variable:string = "name";
}

let pankaj = new ATM();
pankaj.code = 1234
let peru = pankaj.code;
console.log(peru)