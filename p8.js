// program to find the factorial of a number

const num = 10;

if (num < 0) {
  console.log("factorial of negative numbers does not exist");
} else if (num === 0) {
  console.log(`the factorial of ${num} is 1`);
} else {
  let flag = 1;
  for (let i = 1; i <= num; i++) {
    flag = flag * i;
  }
  console.log(`the factorial of ${num} is ${flag}`);
}
