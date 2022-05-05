//STEP 1
let absNum = Number(prompt('Please enter any number:'));
console.log(Math.abs(absNum));

//STEP 2
let decNum = parseFloat(prompt('Please enter a floating point (decimal) number:'));
console.log(Math.ceil(decNum));
//since the instructions said to round it "up", not just round it.

//STEP 3
let decNum = parseFloat(prompt('Please enter a floating point (decimal) number:'));
console.log(Math.floor(decNum));

//STEP 4
let nums = prompt('Please enter five comma-separated numbers (no spaces, ex: 1,2,3,4,5):');
nums = nums.split(',');
let arrNums = nums.map(Number);
console.log(`The minimum number is ${Math.min(...arrNums)} and the max is ${Math.max(...arrNums)}.`)

//STEP 5
let num = parseInt(prompt('Please enter a number:'));
console.log(Math.sqrt(num));