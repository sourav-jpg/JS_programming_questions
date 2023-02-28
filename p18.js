
// JavaScript Program to Clone a JS Object

// Example 1. Clone the Object Using Object.assign()
// The Object.assign() method is part of the ES6 standard. The Object.assign() method performs deep copy and copies all the properties from one or more objects.
// Note: The empty {} as the first argument ensures that you don't change the original object.

// const person = {
//     name:"surya",
//     age:12
// }

// const cloneObject = Object.assign({},person);

// cloneObject.name = "sourav";
// cloneObject.age = "24"

// console.log("person--",person);
// console.log("clonePerson--",cloneObject);

//-------------------------------------------------------------

// Example 2: Clone the Object Using Spread Syntax

// program to clone the object
// declaring object
// const person = {
//     name: 'John',
//     age: 21,
// }

// // cloning the object
// const clonePerson = { ... person}

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name);
// console.log(person.name);


// The spread syntax ... was introduced in the later version(ES6).
// The spread syntax can be used to make a shallow copy of an object. This means it will copy the object. However, the deeper objects are referenced. For example,

// const person = {
//     name: 'John',
//     age: 21,

//     // the inner objects will change in the shallow copy
//     marks: { math: 66, english: 73}
// }

// // cloning the object
// const clonePerson = { ... person}

// console.log(clonePerson); // {name: "John", age: 21, marks: {…}}

// // changing the value of clonePerson
// clonePerson.marks.math = 100;

// console.log(clonePerson.marks.math); // 100
// console.log(person.marks.math); // 100
// Here, when the inner object value math is changed to 100 of clonePerson object, the value of the math key of the person object also changes.

//---------------------------------------------------

// Example 3: Clone the Object Using JSON.parse()
// the JSON.parse() method is used to clone an object.
// Note: JSON.parse() only works with Number and String object literal. It does not work with an object literal with function or symbol properties.

// program to clone the object
// declaring object
// const person = {
//     name: 'John',
//     age: 21,
// }

// // cloning the object
// const clonePerson = JSON.parse(JSON.stringify(person));

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name);
// console.log(person.name);