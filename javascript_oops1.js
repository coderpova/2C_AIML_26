class student{
    static totalstudent=0;

    constructor(name,rollno,marks){
        this.name=name;
        this.rollno=rollno;
        this.marks=marks;


        student.totalstudent++;
    }


    displayresult(){
        console.log("your name is: ",this.name);
        console.log("your rollnumber is: ",this.rollno)
        console.log("your marks is: ",this.marks)

        if(this.marks>= 33){
            console.log("you are pass mooj le tabhi mcha de ladke");
        }
        else{
            console.log("you are fail kuch baski nhi hai chod de pdhai.")
        }

        console.log("----------------------------------------------------------")
    }


    static displaytotalstudent(){
        console.log("total number of student register ",student.totalstudent);
    }
}

let student1 = new student("naman sharma",21,100);
let student2 = new student("naina sharma",22,32);

student1.displayresult();
student2.displayresult();

student.displaytotalstudent();