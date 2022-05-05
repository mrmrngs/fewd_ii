//STEP 1
let uName = prompt('Please enter your name:');
alert(uName.length);

//STEP 2
let uName = prompt('Please enter your name:');
let charNum = Number(prompt('Please enter a numeric value:'));
alert(uName.charAt(charNum))

//STEP 3
let fName = prompt('Please enter your first name:');
let lName = prompt('Please enter your last name:')
alert(`Your name is: ${fName.concat(lName)}`);

//STEP 4
let letters = 'The quick brown fox jumps over the lazy dog';
alert(letters.indexOf('fox'));

//STEP 5
let letters = 'The quick brown fox jumps over the lazy dog';
alert(letters.lastIndexOf('fox'));

//STEP 6
let letters = 'The quick brown fox jumps over the lazy dog';
let uName = prompt('Please enter your full name:');
alert(letters.replace('the lazy dog', uName));

//STEP 7
let letters = 'The quick brown fox jumps over the lazy dog';
let word = prompt('Please enter a word:');
if (letters.search(word) === -1) {
    alert(`The word you entered is not in the string.`)
} else if (letters.search(word) >= 0) {
    alert(`The word you entered (${word}) can be found starting at the ${letters.search(word)} position.`)
}

//STEP 8
let old_string = 'The quick brown fox jumps over the lazy dog'
let new_string = old_string.slice(31, 43)
alert(new_string.toUpperCase());

//STEP 9
let exact = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
alert(exact.trim().toLowerCase());

//STEP 10
let lowercase = 'the quick brown fox jumps over the lazy dog';
let capsfix = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
alert(capsfix);