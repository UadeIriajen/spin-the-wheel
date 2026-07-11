// Deposit money
// Determine the number of lines you want to bet on 
// Collect the bet amount 
// Spin the wheel
// Check if the user won
// Give the user his win 

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2, 
    B: 4,
    C: 6,
    D: 8
}

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

const deposit = () => {
    while (true) {
        const depositedAmount = prompt("Enter a deposited amount: ");
        const numberDepositedAmount = parseFloat(depositedAmount);
        if (isNaN(numberDepositedAmount) || numberDepositedAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositedAmount;
        }
    }
}

const getNumberOfLines = () => {
    while (true) {
        const Lines = prompt("Enter the number of lines to bet on(1-3): ");
        const numberOfLines = parseInt(Lines);
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number to bet on. Please choose between (1-3)");
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
    while (true) {
        const Bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(Bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)) {
            console.log("Invalid bet, try again");
        } else {
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) { 
        for (let i = 0; i < count; i++) { 
            symbols.push(symbol);
        }
    }

    const generatedReels = [];
    for (let i = 0; i <COLS; i++) {
        generatedReels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) { 
            const randomIndex = Math.floor(Math.random() * reelSymbols.length); 
            const selectedSymbol = reelSymbols[randomIndex];
            generatedReels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return generatedReels;
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();

console.log(reels);
