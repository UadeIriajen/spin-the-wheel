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

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = ""; // Initialize an empty string to hold the row representation
        for (const [i, symbol] of row.entries()) { // Use entries() to get both index and symbol
            rowString += symbol; // Append the symbol to the row string
            if (i != row.length - 1) { // Check if it's not the last symbol in the row
                rowString += " | "; // Append a separator if it's not the last symbol
            }
        }
        console.log(rowString);
    }
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;
        for (const symbol of symbols) {
            if (symbol !== symbols[0]) {
                allSame = false;
                break;
            }
            }
        if (allSame) {
            winnings += bet * SYMBOLS_VALUES[symbols[0]];
        }
    }
    return winnings;
};


const game = () => {
    let balance = deposit();

    while (true) {
        console.log("You have a balance of $" + balance.toString());
        console.log("You have a balance of $" + balance.toString());
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
            console.log("You won, $" + winnings.toString());

            if (balance <= 0) {
                console.log("You ran out of money!");
                break;
            }
            const playAgain = prompt("Do you want to play again (y/n)? ");
            if (playAgain != "y") break;
        }
        

    }
game();