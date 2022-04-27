//STEP 1
let favMovies = ['The Matrix', 'LotR Trilogy', 'Princess Mononoke', 'Deadpool', 'Sense & Sensibility'];
console.log(favMovies[1]);
//STEP 2
let movies = new Array(5);
movies[0] = 'The Matrix';
movies[1] = 'LotR Trilogy';
movies[2] = 'Princess Mononoke';
movies[3] = 'Deadpool';
movies[4] = 'Sense & Sensibility';
console.log(movies[0]);
//STEP 3
let movies = new Array(5);
movies[0] = 'The Matrix';
movies[1] = 'LotR Trilogy';
movies[2] = 'Princess Mononoke';
movies[3] = 'Deadpool';
movies[4] = 'Sense & Sensibility';
movies.splice(2, 0, 'Emperor\'s New Groove');
console.log(movies.length);
//STEP 4
let movies = [];
movies[0] = 'The Matrix';
movies[1] = 'LotR Trilogy';
movies[2] = 'Princess Mononoke';
movies[3] = 'Deadpool';
movies[4] = 'Sense & Sensibility';
delete movies[0];
console.log(movies);
//STEP 5
let movies = ['The Matrix', 'LotR Trilogy', 'Princess Mononoke', 'Deadpool', 'Sense & Sensibility', 'The Emperor\'s New Groove', 'Babyteeth'];
for (let i in movies) {
    if (movies.hasOwnProperty(i)) {
        console.log(movies[i]);
    }
};
//STEP 6
let movies = ['The Matrix', 'LotR Trilogy', 'Princess Mononoke', 'Deadpool', 'Sense & Sensibility', 'The Emperor\'s New Groove', 'Babyteeth'];
for (let i of movies) {
    console.log(i);
}
//STEP 7
let movies = ['The Matrix', 'LotR Trilogy', 'Princess Mononoke', 'Deadpool', 'Sense & Sensibility', 'The Emperor\'s New Groove', 'Babyteeth'];
movies.sort();
for (let i of movies) {
    console.log(i);
}
//STEP 8
let movies = ['The Matrix', 'LotR Trilogy', 'Princess Mononoke', 'Deadpool', 'Sense & Sensibility', 'The Emperor\'s New Groove', 'Babyteeth'];
let leastFavMovies = ['Cruella', 'Star Wars III', 'Mulan (2020)'];
let movieLists = () => {
    console.log(`Movies I like:\n `);
    movies.forEach((movie) => {
        console.log(movie);
    });
    console.log(` \nMovies I regret watching:\n `);
    leastFavMovies.forEach((flop) => {
        console.log(flop);
    });
}
movieLists();
//STEP 9
let movies = ['The Matrix', 'LotR Trilogy', 'Princess Mononoke', 'Deadpool', 'Sense & Sensibility', 'The Emperor\'s New Groove', 'Babyteeth'];
let leastFavMovies = ['Cruella', 'Star Wars III', 'Mulan (2020)'];
movies = movies.concat(leastFavMovies);
console.log(movies.sort().reverse());
//STEP 10
let movies = ['The Matrix', 'LotR Trilogy', 'Princess Mononoke', 'Deadpool', 'Sense & Sensibility', 'The Emperor\'s New Groove', 'Babyteeth'];
let leastFavMovies = ['Cruella', 'Star Wars III', 'Mulan (2020)'];
movies = movies.concat(leastFavMovies).sort().reverse();
console.log(movies.pop());
//STEP 11
let movies = ['The Matrix', 'LotR Trilogy', 'Princess Mononoke', 'Deadpool', 'Sense & Sensibility', 'The Emperor\'s New Groove', 'Babyteeth'];
let leastFavMovies = ['Cruella', 'Star Wars III', 'Mulan (2020)'];
movies = movies.concat(leastFavMovies).sort().reverse();
console.log(movies.shift());
//STEP 12
let movies = ['The Matrix', 'LotR Trilogy', 'Princess Mononoke', 'Deadpool', 'Sense & Sensibility', 'The Emperor\'s New Groove', 'Babyteeth'];
let leastFavMovies = ['Cruella', 'Star Wars III', 'Mulan (2020)'];
movies = movies.concat(leastFavMovies).sort().reverse();
console.log(movies.indexOf('Mulan (2020)'))
console.log(movies.indexOf('Cruella'))
console.log(movies.indexOf('Star Wars III'))
movies.splice(5, 1, 'Into the Spider-Verse');
movies.splice(8, 1, 'Practical Magic');
movies.splice(2, 1, 'Legally Blonde');
console.log(movies);
//STEP 13
let movies = [['The Matrix', 1], ['LotR Trilogy', 2], ['The Emperor\'s New Groove', 3], ['Deadpool', 4], ['Sense & Sensibility', 5]];
movies.forEach((rankedFave) => {
    let favTitle = rankedFave.filter((title) => {
        return typeof title === 'string';
    });
    console.log(favTitle);
});
//STEP 14
let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];
let showEmployee = (param) => {
    console.log(`Employees:\n `);
    for (let i of param) {
        console.log(i);
    }
}
showEmployee(employees);
//STEP 15
let testData = [58, '', 'abcd', true, null, false, 0];
let filterValues = testData.filter((cleanData) => {
    //return Boolean(cleanData) == true;
    return (cleanData !== false) && (cleanData !== null) && (cleanData !== 0) && (cleanData !== '')
});
console.log(filterValues);
//STEP 16
let randArray = [1.0, 2.1, 3.2, 4.3, 5.4, 6.5, 7.6, 8.7, 9.8, 10.9];
let randomItem = (arr) => {
    let item = arr[Math.floor(Math.random()*arr.length)]
    console.log(item);
}
randomItem(randArray);
//STEP 17
let numArray = [1, 16, 82, 14, 22, 8];
let largestNum = (param) => {
    let max = Math.max(...param)
    console.log(max);
};
largestNum(numArray);