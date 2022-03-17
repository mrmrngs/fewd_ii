function rps() {
    alert('Welcome to Rock, Paper, Scissors!')

    let userChoice = prompt('Enter your choice: rock, paper, or scissors?').toLowerCase();

    let compChoice;
    let randomNum = Math.random() * 10

    if (randomNum >= 0 && randomNum < 3.333) {
        compChoice = 'rock';
    } else if (randomNum >= 3.333 && randomNum < 6.667) {
        compChoice = 'paper';
    } else if (randomNum >= 6.667 && randomNum <= 10) {
        compChoice = 'scissors';
    }

    if ((userChoice === 'rock' && compChoice === 'scissors') || (userChoice === 'paper' && compChoice === 'rock') || (userChoice === 'scissors' && compChoice === 'paper')) {
        alert(`Congrats, ${userChoice} beats ${compChoice}. You won!`);
    }
    else if ((userChoice === 'rock' && compChoice === 'paper') || (userChoice === 'paper' && compChoice === 'scissors') || (userChoice === 'scissors' && compChoice === 'rock')) {
        alert(`Sorry, you chose ${userChoice} but the computer chose ${compChoice}. You lose!`);
    }
    else if (userChoice == compChoice) {
        alert(`It's a tie! You chose ${userChoice} and the computer chose ${compChoice}. Please try again.`)
    }
    else if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
        alert('You have entered an invalid response. Please reload the page and try again.');
    }
};