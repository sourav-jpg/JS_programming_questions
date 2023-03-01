// JavaScript Program To Perform Intersection Between Two Arrays

// Example 1: Perform Intersection Using Set

// function checkIn(arr1,arr2){
//     const setA = new Set(arr1);
//     const setB = new Set(arr2);

//     let intersectionResult = [];

//     for (let i of setA) {
    
//         if (setB.has(i)) {
//             intersectionResult.push(i);
//         }
        
//     }
    
//     return intersectionResult;

// }




// const arr1= [1,2,3,6,7];
// const arr2 = [1,4,5,6,7,2,3];

// const result = checkIn(arr1,arr2)

// console.log(result);


// Example 2: Perform Intersection Using filter() Method

function checkIn(arr1,arr2){
     const res = arr1.filter(x=>arr2.indexOf(x) !== -1);
     return res;
}

const arr1= [1,2,3,6,7];
const arr2 = [1,4,5,6,7,2,3];

const result = checkIn(arr1,arr2)

console.log(result);