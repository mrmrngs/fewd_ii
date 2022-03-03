let gradeEntry = parseFloat(prompt('Please enter a number between 1 and 100:'));
let grade = Math.round(gradeEntry);
if (grade < 1 || grade > 100) {
    alert('Only whole numbers between 1 and 100 are accepted, please reload the page and try again.');
} else if (grade >= 60 && grade < 70) {
    console.log('You received a D');
} else if (grade >= 70 && grade < 80) {
    console.log('You received a C');
} else if (grade >= 80 && grade < 90) {
    console.log('You received a B');
} else if (grade >= 90 && grade <= 100) {
    console.log('You received an A');
} else {
    console.log('You received an F');
}