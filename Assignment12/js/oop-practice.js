// STEP 1
// function Cat() {};
// const dog = function() {};

// STEP 2
// const cat1 = new Cat();
// const dog1 = new Dog();

// STEP 3
// class Animal {
//     constructor() {
//         console.log('The Animal has been created.')
//     }
// }

// STEP 4
// class Animal {
//     constructor(animal) {
//         this.animal = animal;
//         console.log(`The ${this.animal} has been created.`);
//     }
// }
// const Suki = new Animal('cat');

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const pet = new Animal('cat', 'domestic mediumhair', 'calico', '8 in', '10 in')

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
//     for (property in pet) {
//         console.log(property);
//     }
// }
// const pet = new Animal('cat', 'domestic mediumhair', 'calico', '8 in', '10 in')

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
//     speak = function() {
//         if (this.type === 'dog') {
//             console.log(`The ${this.color} dog is barking!`);
//         } else if (this.type === 'cat') {
//             console.log(`The ${this.color} cat is meowing!`);
//         } else {
//             console.log(`The ${this.type} is making noise.`)
//         }
//     }
// }
// const Suki = new Animal('cat', 'domestic mediumhair', 'calico', '8 in', '10 in');
// Suki.speak();

// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length) {
//         let _type = type;
//         let _breed = breed;
//         let _color = color;
//         let _height = height;
//         let _length = length;

//         let checkType = function() {
//             return _type;
//         }

//         this.speak = function() {
//             checkType();
//             console.log(`The ${checkType()} has made a noise!`)
//         }
//     }
// }
// const Suki = new Animal('cat', 'domestic mediumhair', 'calico', '8 in', '10 in');
// Suki.speak();

// STEP 9
String.prototype.findWords = function(word) {
    let _word = word;
    return (this.split(word).length - 1);
}

const testCher = new String('Do you believe in life after love - after love - after love - after love?');
console.log(testCher.findWords('love'));
