// program to print prime numbers between the two numbers

const lowerNum = 4;
const higherNum = 20;

console.log(`the prime numbers between ${lowerNum} to ${higherNum} are :`);

for (let i = lowerNum; i <= higherNum; i++) {
  let flag = 0;

  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  if (i > 0 && flag == 0) {
    console.log(i);
  }
}
