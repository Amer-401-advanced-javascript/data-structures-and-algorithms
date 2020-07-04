'use strict';

function mergeSort (arr) {
  let num = arr.length;
  if(num > 1){
    let mid =  Math.floor(num/2);
    let left = arr.slice(0, mid);
    // console.log(left);
    
    let right = arr.slice(mid); 
    
    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);
  }
  console.log(arr);
  
}

function merge( left, right, arr){
  let i = 0;
  let j = 0;
  let k = 0;

  while ((i < left.length) && (j < right.length)) {
    if(left[i] <= right[j]){
      arr[k] = left[i];
      ++i;
    } else {
      arr[k] = right[j];
      ++j;
    }
    ++k;
  }
  
  if(i === left.length){
    right = arr;
  } else {
    left = arr;
  }
}

mergeSort([98,43,86,52,66]);