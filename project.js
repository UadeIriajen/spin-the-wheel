// Deposite money
// Determine the number of lines you want to bet on 
// Collect the bet amount 
// Spin the wheel
// Check if th user won
// Give the user his win 

const prompt = require("prompt-sync")();

const deposit = () => {
    const depositedAmount = prompt("Enter a deposited amount: ");
    const numberDepositedAmount = parseFloat(depositedAmount);
    if (isNaN(numberDepositedAmount) || numberDepositedAmount <= 0) {
        console.log("Invalid deposit amount, try again.")

    }

}  
deposit();

