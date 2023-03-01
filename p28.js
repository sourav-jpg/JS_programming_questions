// JavaScript Program to Compare Elements of Two Arrays

function checkArr(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let result = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        result = true;
      }
      return result;
    }
  }

  // const result = JSON.stringify(arr1) == JSON.stringify(arr2)

  // // if result is true
  // if(result) {
  //     console.log('The arrays have the same elements.');
  // }
  // else {
  //     console.log('The arrays have different elements.');
  // }
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

const result = checkArr(arr1, arr2);

if (result) {
  console.log("they both are same ");
} else {
  console.log("they both are not same ");
}
