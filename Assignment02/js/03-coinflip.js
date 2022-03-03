let randomNum = Math.round(Math.random());
let coinFlip = randomNum;

let choice = prompt('Heads or Tails?').toLowerCase();
if (coinFlip < 0.5) {
    if (choice === 'heads') {
        alert('The flip was heads and you chose heads...you win!');
    }
    else if (choice === 'tails') {
        alert('The flip was heads but you chose tails...you lose!');
    }
} else {
    if (choice === 'heads') {
        alert('The flip was tails but you chose heads...you lose!');
    }
    else if (choice === 'tails') {
        alert('The flip was tails and you chose tails...you win!');
    }
}

// console.log(randomNum);
// used to verify program function