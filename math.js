function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
    this.deposit = function(amount) {
        this.balance += amount;
        console.log(`Deposit Amount: $${amount.toFixed(2)}`);
        console.log("Updated Account Info:");
        this.display();
    }
    this.withdrawal = function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal Amount: $${amount.toFixed(2)}`);
            console.log("Updated Account Info:");
            this.display();
        } else {
            console.log(`Insufficient funds in Account: ${this.accountNumber} for Withdrawal Amount: $${amount.toFixed(2)}`);
        };
    }
    this.compoundInterest = function(years) {
        const months = 12
        let a = (this.balance * Math.pow(1 + (3.25 / 100) / months), (months * years));
        console.log(`Interest Earned over ${years} Years For:`);
        this.display();
        console.log(`$${a.toFixed(2)}`);
    }
}

Account.prototype.display = function() {
    console.log(`Owner: ${this.owner}\nAccount Number: ${this.accountNumber}\nBalance: $${this.balance.toFixed(2)}`)
}


let account1 = new Account(10001, 3000, "Jane Doe");
let account2 = new Account(10002, 5000, "John Doe");

account1.deposit(300);
account2.deposit(500);
// account1.display();
// account2.display();

account1.withdrawal(600);
account2.withdrawal(1000);
// account1.display();
// account2.display();

account1.deposit(300);
account2.deposit(500);
// account1.display();
// account2.display();


account1.withdrawal(3300);
account2.withdrawal(5500);
// account1.display();
// account2.display();


account1.compoundInterest(5);
account2.compoundInterest(5);



