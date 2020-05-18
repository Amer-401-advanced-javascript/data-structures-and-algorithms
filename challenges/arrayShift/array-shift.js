'use strict';

function insertShiftArray(array, shiftedNum) {
  if (( array.length !== 0 ) && (typeof(shiftedNum) === 'number')) {
    let numPosition = 0;
    if (array.length % 2 === 0) {
      numPosition = array.length / 2;
    } else {
      numPosition = array.length / 2 + 0.5;
    }
    let shiftedArray = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (j === numPosition) {
        shiftedArray[j] = shiftedNum;
        i--;
      } else {
        shiftedArray[j] = array[i];
      }
      j++;
    }
    return shiftedArray;
  } else{
    return 'incorrect';
  }
}
module.exports = insertShiftArray;
