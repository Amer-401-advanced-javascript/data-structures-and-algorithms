'use strict';

function reverseArray( reverseThisArray ) {
  let reversedArray=[];
  for( let i = 0; i < reverseThisArray.length; i++){
    reversedArray[i] = reverseThisArray[reverseThisArray.length-i-1];
  }
  return reversedArray;
}

console.log(reverseArray([7,8,73,99,2,4]));
