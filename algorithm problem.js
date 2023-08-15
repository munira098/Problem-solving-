//  1. Find largest number from sorted array.

let array=[1,2,3,4,5,6,7,8];
let max= array[0];

for(let i=0;i<array.length;i++)
{

    if (array[i]>=max){

        max=array[i];
    }

}
console.log("largest number is:",max);

// 3.	Find smallest number from array.
let arr=[1,2,3,4,5,6,7,8];
let min= array[0];

for(let i=0;i>arr.length;i++)
{

    if (arr[i]<=min){

        min=arr[i];
    }

}
console.log("smallest number is:",min);

//    4.	Find the sum of array .
let arr1 = [10, 20, 30, 40, 50];
let sum2 = 0;

for (let i = 0; i < arr1.length; i++) {
  sum2 += arr1[i];
}

console.log("sum is : ",sum2);
