//STEP 1
function halfNumber(num) {
    let total;
    total = num / 2;
    return `Half of ${num} is ${total}.`;
}
console.log(halfNumber(5));
//STEP 2
function squareNumber(num) {
    let total;
    total = num * num;
    return `The result of squaring the number ${num} is ${total}.`;
}
console.log(squareNumber(3));
//STEP 3
function percentOf(num1, num2) {
    let result;
    result = ((num1 / num2) * 100).toFixed(2);
    return `${num1} is ${result}% of ${num2}.`;
}
console.log(percentOf(2, 4));
//STEP 4
function findModulus(num1, num2) {
    let result;
    result = num1 % num2;
    return `${result} is the modulus of ${num1} divided by ${num2}.`;
}
console.log(findModulus(10, 4));
//STEP 5
let strNumbers = prompt('Please enter a series of numbers, separated by commas (e.g. #, #, #):');
let numbers = strNumbers.split(', ');


function unlimitedSum(numbers) {
    let start = 0;
    for (let i = 0; i < numbers.length; i++) {
        start += Number(numbers[i]);
    }
    return console.log(start);
}
unlimitedSum(numbers);

//I can't figure out why this doesn't work if I use arguments.length and Number(arguments[i]), but *does* work if I use numbers.length and Number(numbers[i]);. Please help?