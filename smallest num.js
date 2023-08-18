let arr=[-9,-21,2,3,4,5,6,7,8];
let min= arr[0];

for(let i=0;i< arr.length;i++)
{

    if (arr[i]<=min){

        min=arr[i];
    }

}
console.log("smallest number is:",min);