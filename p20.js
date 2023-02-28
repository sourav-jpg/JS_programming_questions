// JavaScript Program to Loop Through an Object

// Example 1: Loop Through Object Using for...in

// program to loop through an object using for...in loop

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// for(let key in student){
//     let value;
//     //get the value
//     value = student[key];
//     console.log(`${key} - ${value}`);
// }

//Note: The for...in loop will also count inherited properties.

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// const person = {
//     gender:"male"
// }
// // inheriting property

// student.__proto__ = person;
// for (let key in student) {
//     let value;

//     // get the value
//     value = student[key];

//     console.log(key + " - " +  value);
// }
