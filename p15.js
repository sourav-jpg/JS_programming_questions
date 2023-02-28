// program to sort words in alphabetical order

const input = "edcba";

const words = input.split("");
words.sort();

for (let ele of words) {
  console.log(ele);
}
// console.log(words);
