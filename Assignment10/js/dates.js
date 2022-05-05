//STEP 1
let d = new Date();
function numDays(year, month) {
    return new Date(year, month, 0).getDate();
}
let year = d.getFullYear();
let month = d.getMonth() + 1;
let getDays = numDays(year, month);
console.log(getDays);

//STEP 2
let d = new Date();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let month = d.getMonth();
console.log(months[month]);

//STEP 3
let d = new Date();
let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
if (d.getDay() == 0 || d.getDay() == 6) {
    console.log(`The day is ${dayName[d.getDay()]}, so it's a weekend!`)
} else {
    console.log(`Sorry, out of luck, ${dayName[d.getDay()]} is not a weekend.`)
}

//STEP 4
let d = new Date();
let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
if (d.getDay() == 0) {
    console.log(`Yesterday was ${dayName[d.getDay() + 6]}.`)
} else {
    console.log(`Yesterday was ${dayName[d.getDay() - 1]}.`);
}

//STEP 5
let d = new Date();
d.toDateString().charAt(0);