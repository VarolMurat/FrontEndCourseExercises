function Account(name) {
    this.name = name;
    this.balance = 0;
    this.IBAN = "GR" + Math.floor(Math.random() * 10000000);
}

Account.prototype.deposit = function (amount) {
    if (amount < 0 || typeof amount !== "number") {
        return "Invalid amount!";
    }
    else {
        this.balance += amount ;
    }
}

Account.prototype.withdraw = function (amount) {
    if (amount < 0 || typeof amount !== "number") {
        return "Invalid amount!" ;
    }
    else if (amount > this.balance) {
        return "Not enough money!" ;
    }
    else {
        return this.balance -= amount ;
    }
}

Account.prototype.getBalance = function () {
    return this.balance ;
}

