'use strict';

function quickSort(arr, left, right){
  if(left < right){
    let position = partition(arr, left, right);

    quickSort(arr, left, position-1);
    quickSort(arr, position+1, right);

  }
}

function partition(arr, left, right){
    let pivot = arr[right]

    let low = left - 1;
    
}