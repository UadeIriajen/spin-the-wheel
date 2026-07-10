// Deposite money
// Determine the number of lines you want to bet on 
// Collect the bet amount 
// Spin the wheel
// Check if the user won
// Give the user his win 

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositedAmount = prompt("Enter a deposited amount: ");
        const numberDepositedAmount = parseFloat(depositedAmount);
        if (isNaN(numberDepositedAmount) || numberDepositedAmount <= 0) {
            console.log("Invalid deposit amount, try again.")
        } else {
            return numberDepositedAmount;
        }
    }
}
const getNumberOfLines = () => {
    while (true) {
        const Lines = prompt("Enter the number of lines to bet on(1-3): ");
        const numberOfLines = parseFloat(Lines);
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number to bet on. Please choose between (1-3)");
        } else {
            return numberOfLines;
        }
    }

const getBet = (Balance) => {
    while (true) {
        const Bet = prompt("Enter the total bet: ");
        const numberBet = parseFloat(Bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
            console.log("Invalid bet, try again");
        } else {
            return numberBet;
        }
    }
}

let balance = deposit();
const  numberOfLines = getNumberOfLines();
const bet = getBet(balance);

