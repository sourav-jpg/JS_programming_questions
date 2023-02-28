// JavaScript Program to Merge Property of Two Objects

// Example 1: Merge Property of Two Objects Using Object.assign()

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// The Object.assign() method returns an object by copying the values of all enumerable properties from one or more source objects.
// const newObj = Object.assign(person,student);
// console.log(newObj);

// Example 2: Merge Property of Two Objects Using Spread Operator

// const newObj = {...person,...student}
// console.log(newObj);