// JavaScript Program to Remove Specific Item From an Array

function removeSpecific(a,n){
    let newArr = []
    for(let i= 0;i<a.length;i++){
        if(a[i] !== 3){
            newArr.push(a[i])
        }
    }
    return newArr;

}

const result = removeSpecific([1,2,3,4,5,6],3)
console.log(result);