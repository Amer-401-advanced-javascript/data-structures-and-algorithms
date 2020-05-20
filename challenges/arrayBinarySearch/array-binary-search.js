'use strict';

function BinarySearch(sortedArray, searchKey){
  let start = 0; 
  let end = sortedArray.length - 1;
  let mid = 0;

  // if( (end-start) % 2 === 0){
  //   mid = ((start+end)/2);
  // }else {
  //   mid = ((start+end)/2+0.5);   
  // }
  
  while(start <= end){

    if( (end-start) % 2){
      mid = ((start+end)/2+0.5);   
    }else {          
      mid = ((start+end)/2);
    }
    if(sortedArray[mid] === searchKey){
      return mid;
    } else if(sortedArray[mid] < searchKey){
      start = mid + 1;
    } else if(sortedArray[mid] > searchKey){
      end = mid - 1 ;
    } else{
      return -1;
    }
  }
  
  return -1;
}  
module.exports = BinarySearch;
