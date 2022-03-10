let coinFlip;
let userChoice = parseInt(prompt('Enter a number of times you would like to flip the coin:'))
for (let i = 0; i < userChoice; i++) {
    let randomNum = Math.round(Math.random());
    coinFlip = randomNum;
    if (coinFlip === 0) {
        console.log('Heads');
    } else {
        console.log('Tails');
    }
}