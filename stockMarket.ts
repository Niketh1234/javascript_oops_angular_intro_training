import stock from './index';

class stockMarket{
    name:string;
    constructor();
    constructor(){
        this.name = "valeu";
    }
    display(){
        console.log(this.name);
    }

}

let sm = new stockMarket();
sm.display();
// console.log(sm.displayStock());


class MutualFund{
    constructor(public fundname:string, public fundcode:string, public broker:string){
    }
    showData(){
        console.log(this.fundname+' '+this.fundcode+' '+this.broker);
    }
}
new MutualFund('helo','ram','whow').showData();




