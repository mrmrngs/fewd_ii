// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
while (true) {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx:'));
    if (!isNaN(investment)) {
        break;
    } else {
        alert('Please enter your investment amount as a numeric sequence in the format ####.##');
    }
}
while (true) {
    rate = parseFloat(prompt('Enter interest rate as xx.x:'));
    if (!isNaN(rate) && (rate > 0 && rate <= 20)) {
        break;
    } else {
        alert('Please enter your interest rate as a numeric sequence in the format ##.#');
    }
}
while (true) {
    years = parseInt(prompt('Enter the number of years you want to invest for:'));
    if (!isNaN(years) && (years >= 1 && years <= 30)) {
        break;
    } else {
        alert('Please enter a numeral. Must be between 1 and 30.');
    }
}


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * (rate / 100));
}

// DISPLAY RESULT
document.write(`Original investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future investment value: $${futureValue.toFixed(2)}`);