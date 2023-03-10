// JavaScript Program to Create Objects in Different Ways

// You can create an object in three different ways:
// * Using object literal
// * By creating instance of Object directly
// * By using constructor function

// Example 1: Using object literal
// program to create JavaScript object using object literal
// const person = { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// };

// console.log(typeof person); // object

// // accessing the object value
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);

//-------------------------------------------------------------------------

// The syntax for creating an object using instance of an object is:
// const objectName = new Object();
// Example 2: Create an Object using Instance of Object Directly
// program to create JavaScript object using instance of an object
// const person = new Object ( { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// });

// console.log(typeof person); // object

// // accessing the object value
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);

//-------------------------------------------------------------------------

// Example 3: Create an object using Constructor Function
// program to create JavaScript object using instance of an object

// function Person() {
//     this.name = 'John',
//     this.age = 20,
//     this.hobbies = ['reading', 'games', 'coding'],
//     this.greet = function() {
//         console.log('Hello everyone.');
//     },
//     this.score = {
//         maths: 90,
//         science: 80
//     }

// }

// const person = new Person();

// console.log(typeof person); // object

// // accessing the object value
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);