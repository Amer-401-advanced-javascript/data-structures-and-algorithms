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
}

// let node = new LinkedList();
// node.insert('hello');
// node.insert('hello2');
// // console.log(node);
// node.toString();
module.exports = LinkedList;