// program to check if the string is palindrome or not

const checkPalindrome = (string) =>{
    let len = string.length;

    for(let i=0; i<=len/2 ; i++){
        if(string[i] !== string[len - 1 - i]){
            return console.log( 'It is not a palindrome');
        }
    };
    return console.log('It is a palindrome');
}

const string ="sourav";
const value = checkPalindrome(string);

//----------------------------------------------------------

// Check Palindrome using built-in Functions
// const string = "asdfgh";
// let res = string.split("").reverse().join("");

// if (string == res) {
//   console.log("it is a palindrome");
// } else {
//   console.log("It is not a palindrome");
// }
