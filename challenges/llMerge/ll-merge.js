'use strict';

let LinkedList = require('../linkedList/linked-list');

let firstLinkedList = new LinkedList();
let secondLinkedList = new LinkedList();

firstLinkedList.insert('first1');
firstLinkedList.insert('first2');
firstLinkedList.insert('first3');
firstLinkedList.insert('first3');
secondLinkedList.insert('second1');
secondLinkedList.insert('second2');
secondLinkedList.insert('second3');
secondLinkedList.insert('second4');



function mergeLists(firstLinkedList, secondLinkedList){
  let combinationLinkedList = new LinkedList();
  let currentNodeForTheFirst = firstLinkedList.head;
  let currentNodeForTheSecond = secondLinkedList.head;
  while(currentNodeForTheFirst || currentNodeForTheSecond){
      
    if(currentNodeForTheFirst){ 
      combinationLinkedList.insert(currentNodeForTheFirst.value);
      currentNodeForTheFirst = currentNodeForTheFirst.next;
    }
    if(currentNodeForTheSecond){
      combinationLinkedList.insert(currentNodeForTheSecond.value);
      currentNodeForTheSecond = currentNodeForTheSecond.next;
    }

  }
  return combinationLinkedList.toString();
}
// console.log(mergeLists(firstLinkedList,secondLinkedList));
