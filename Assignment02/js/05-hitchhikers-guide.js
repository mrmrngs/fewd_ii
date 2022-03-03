let playerReady = prompt('Are you ready to play? (Y/N)').toUpperCase();

if (playerReady == 'Y') {
    alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');
    let travelDirection = prompt('Which direction would you like to go? (Please enter "forward", "left", or "right".').toLowerCase();
    switch (travelDirection) {
        case 'left':
            alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
            break;
        case 'forward':
            alert('You walk 100 yards and safely make your way out of the cave.');
            break;
        case 'right':
            alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
            break;
        default:
            alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct (or an invalid) option.');
            break;
    }
    let userRating = parseInt(prompt('Thank you for playing! Please rate the game between 1 and 10:'));
    if (userRating < 1 || userRating > 10) {
        alert('Thank you for playing!');
    } else if (userRating >= 6 && userRating <= 10) {
        alert('Thank you for rating our game! Please reload the page to play again.');
    } else if (userRating >=1 && userRating <= 5) {
        alert('Thank you for rating our game. We are working hard to improve and hope you will give us another try sometime soon.');
    }
} else {
    alert('Thank you for visiting! Come play again sometime.');
}