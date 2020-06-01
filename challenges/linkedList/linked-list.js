'use strict';

let Node = require('./node');

class LinkedList{

  constructor(){
    this.head = null;
  }

  insert(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let tailing = this.head;
    while(tailing.next){
      tailing = tailing.next;
    }
    tailing.next = node;
  }

  includes(value){
    let currentNode = this.head;
    while(currentNode !== null){
      if(currentNode.value === value){
        // console.log('true');
        return true;
      } else{  
        currentNode = currentNode.next;
      }
    }

    // console.log('false');
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
        return this;
      }
    }

  }

}

let node = new LinkedList();
node.insert('hello1');
node.insert('hello2');
node.insert('hello3');
node.insert('hello4');
node.insert('hello5');
node.insert('hello6');
node.insertAfter('hello2', 'hey');
console.log(node);
console.log(node.toString());

module.exports = LinkedList;