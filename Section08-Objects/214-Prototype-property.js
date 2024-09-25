function Account(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
};

const john = new Account('John', 200);
const bob = new Account('Bob', 0);

Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

console.log(john.bank);

john.deposit(300);
bob.deposit(1000);