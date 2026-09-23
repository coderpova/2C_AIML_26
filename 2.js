let name ="vikas";
let roll= 101;

let student ={
    name,roll,
    display(){
        console.log(this.name,this.roll);
    }
}

student.display();