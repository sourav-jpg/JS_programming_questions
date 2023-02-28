// Javascript Program to Check if a Number is Odd or Even

const number = prompt("Enter a number");
// console.log(parseInt(number));

// if(number%2 == 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

const result =  (number%2 ===0) ? "Even" : "Odd";

console.log(result);