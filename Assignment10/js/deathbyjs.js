//STEP 1
let str;
function alphaOrder(str) {
    return str.split('').sort().join('');
}
str = 'webmaster';
console.log(alphaOrder(str));

//STEP 2
let str;
function capitalize(str) {
    let strSplit = str.split(' ');
    let arrCap = [];
    for (let i = 0; i < strSplit.length; i++) {
        arrCap.push(strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1));
    }
    return arrCap.join(' ');
}
str = 'the quick brown fox jumps over the lazy dog';
console.log(capitalize(str));

//STEP 3
function vowelCount(str) {
    let vowelList = 'aeiouAEIOU'
    let vCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelList.indexOf(str[i]) !== -1) {
            vCount += 1;
        }
        return vCount;
    };
};
console.log(vowelCount('The quick brown fox'));

/*    3. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Sample Data and Output
Example string: 'The quick brown fox' 
Expected Output: 5*/

//STEP 4

/* Write a JavaScript function that generates a string id (specified length) of random characters.

Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA*/

//STEP 5

/*Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

Sample Data and Output
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"*/
