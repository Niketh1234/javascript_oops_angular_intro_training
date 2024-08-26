function processStock(st:stockType){
    console.log(st.name+' '+st.id)
}

type stockType = {
    name:string,
    id:number;
}
processStock({name:"niketh",id:100})



function processValue(st:{price:number, interest:number}){
    console.log(st.price+' '+st.interest);
}

processValue({price:1900,interest:0.9})



type Building = {
    area:number;
    location:string;
}
type Flat = Building &{
    salerate : number;
}

function showBuilding(sb:Building){

}

function showFlat(f:Flat){

}

class anotherFlat implements Flat{
    area:number;
    location:string;
    salerate:number;
}  