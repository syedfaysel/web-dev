

const bank = (owner) => {
    balance = 0;
    return (amount) => {
        balance+=amount;
        return balance;
    }
}


// Creating ...
const RajoBank = bank("Mr. Rajo");

console.log(RajoBank(200)); //200 deposit; balance = 200
console.log(RajoBank(100)); //100 more deposit ; balance = 300

//trying to access balance outside the function
console.log(RajoBank.balance); //output: undefined 



// Advance 


const advanceBank = (owner) => {
    balance = 0;
    return {
        deposit: (amount) => {
            balance+=amount;
            return balance;
        },
        withdraw: (amount) => {
            balance -= amount;
            return balance;
        }
    }
}

const Faysel = advanceBank("Syed Faysel");
console.log(Faysel.deposit(500));
console.log(Faysel.withdraw(50));
