// JavaScript Program to Convert Objects to Strings
// Example 1: Convert Object to String Using JSON.stringify()

// program to convert an object to a string
// the JSON.stringify() method is used to convert an object to a string.
const person = {
    name: 'Jack',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result);

// Example 2: Convert Object to String Using String()
// program to convert an object to a string

// the String() function converts the value of an object to a string.
// When using the String() function on an Object, the converted result will give [object Object].
// The typeof operator gives the data type of the result variable.

// const person = {
//     name: 'Jack',
//     age: 27
// }

// const result1 = String(person);
// const result2 = String(person['name']);

// console.log(result1);
// console.log(result2);

console.log(typeof result1);

