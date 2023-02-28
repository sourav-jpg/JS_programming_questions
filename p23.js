// JavaScript Program to Replace All Occurrences of a String

// Example 1: Replace All Occurrence of String Using RegEx

// program to replace all occurrence of a string
const string = 'Mr Red has a red house and a red car';

//regex expression 
const regex = /red/gi;

const newText = string.replace(regex,'blue');
console.log(newText);

// In the above program, a regex expression is used as the first parameter inside the replace() method.

// /g refers to global (that replacement is done across the whole string) and /i refers to case-insensitive.

// The replace() method takes the string that you want to replace as the first parameter and the string you want to replace with as the second parameter.

//------------------------------------------------------------------------------------

// Example 2: Replace All Occurrence of String Using built-in Method
// program to replace all occurrence of a string

// const string = 'Mr red has a red house and a red car';

// const result = string.split('red').join('blue');

// console.log(result);