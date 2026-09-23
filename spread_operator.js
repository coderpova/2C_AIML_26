let data = [1,2,3,4,5]
function sum(...args){
    let sum =0;
    for(let i of args){
        sum = sum+i;
    }
    console.log(sum);
}

sum(...data);