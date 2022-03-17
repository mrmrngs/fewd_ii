// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(numbers) {
    let total = 0;
    for (let i = 1; i < arguments.length; i++) {
    total += Number(arguments[i]);
    }
    return total;
    }
    console.log(calculate(2, 2, 20));


// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
const sum = function (num1, num2) {
    return num1 + num2;
    };

export default {sum};
    //console.log(sum(1, 1)); 

// SUBTRACT FUNCTION

// MULTIPLY FUNCTION

// DIVIDE FUNCTION

// EXPORT THE FOUR PUBLIC FUNCTIONS