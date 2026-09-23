class bank{
    static account =0;

    constructor(accountNo, holderName,  balance){
        this.accountNo= accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    depositresult(amount){
        this.balance +=amount;
        console.log("amount",this.balance," has been crited paytm krooooo");

         console.log("-------------------------------------------------------------")
    }

    withdraw(amount){
        if(this.balance>= amount){
            this.balance -= amount;
            console.log("amount",this.balance," has been dected paytm krooooo");

             console.log("-------------------------------------------------------------")
        }
        else{
            console.log("low balance ");
        }
        console.log("-------------------------------------------------------------")
    }

    displaybalanced(){
        console.log("your reamining balance is ",this.balance);
    }
}

let bank1 = new bank(25532553,"vansh vashistha",10000000);
let bank2 = new bank(25532554,"neha vashistha",10000000);

bank1.depositresult(12000);
bank2.depositresult(1234);

bank1.withdraw(1000);
bank2.withdraw(1);

bank1.displaybalanced(12000);
bank2.displaybalanced(150000);


