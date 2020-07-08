'use strict';

let Node = require('./node');

class LinkedList{

  constructor(){
    this.head = null;
    this.counter = -1;
  }

  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.counter++;
  }

  includes(value){
    let currentNode = this.head;
    while(currentNode !== null){
      if(currentNode.value === value){
        return true;
      } else{  
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  toString(){
    let currentNode = this.head;
    let linkedListString = '';
    while(currentNode !== null){
      linkedListString = linkedListString + `{ ${currentNode.value} } => `;
      currentNode = currentNode.next;
    }
    linkedListString = `${linkedListString}Null`;
    
    return linkedListString;
    
  }

  append(value){
    // add the value at the end of the linked list
    let currentNode = this.head;

    if(!currentNode){
      this.head = new Node(value);
      return this.head;
    }
    
    while( currentNode.next ){
      currentNode = currentNode.next;
    }
    let node = new Node(value);
    currentNode.next = node;
    this.counter++;   
  }
  

  insertBeforeValue(searchedValue, insertThisValue){
    // add a value before an exisiting value in the linked_list
    let currentNode = this.head;
    while(currentNode.next !== null){
      if( currentNode.next.value !== searchedValue){
        currentNode = currentNode.next;
      } else {
        let insertedNode  = new Node (insertThisValue);
        insertedNode.next = currentNode.next;
        currentNode.next = insertedNode;
        this.counter++; 
        return this;
      }
    }
  }

  insertAfter(searchedValue, insertThisValue){
    // add this value after an already exisiting value in the linked_list

    let currentNode = this.head;
    while(currentNode.next !== null){
      if( currentNode.value !== searchedValue){
        currentNode = currentNode.next;
      } else {
        let insertedNode  = new Node (insertThisValue);
        insertedNode.next = currentNode.next;
        currentNode.next = insertedNode;
        this.counter++; 
        return this;
      }
    }
    
  }

  readFromTheEnd(value){
    if((typeof(value) === 'number') && (this.counter > value ) && (value > 0)){
      let currentNode = this.head;
      let reversedNumber = this.counter - value;
      for(let i = 0; i < reversedNumber; i++){
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }else{  
      let warning = 'Enter a valid positive number less than the linked list node';
      return warning;
    }

  }

}

// let node = new LinkedList();
// node.insert('hello1');
// node.insert('hello2');
// node.insert('hello3');
// node.insert('hello4');
// node.insert('hello6');
// console.log(node.toString());

// console.log(node.readFromTheEnd(1));
// // node.insertAfter('hello4','hey');
// console.log(node.toString());
// console.log(node.counter);

module.exports = LinkedList;