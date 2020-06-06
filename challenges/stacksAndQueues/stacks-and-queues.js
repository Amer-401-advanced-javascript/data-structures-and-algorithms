'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// eslint-disable-next-line no-unused-vars
class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;       
    return temp.value;
  }
  peek(){
    return this.top.value;
  }

  isEmpty(){
    let check = this.top === null ? true : false;
    return check;
  }

}


// eslint-disable-next-line no-unused-vars
class Queue {
  constructor(){
    this.front = null;
    // this.rear = null;
  }

  enqueue(value){
    let node = new Node(value);
    console.log('this is the node ====>', node);
    
    if(!this.front){
      
      this.front = node;
      this.rear = node;
      // console.log('oh this.front ====>',rear);
      return this;
    }
    console.log(this.rear);
    
    this.rear.next = node;
    // console.log('this.front====>',this.front);
    this.rear = node;
    // console.log('this.rear ====>',node);

  }

  dequeue(){
    let temp = this.front.value;
    this.front = this.front.next;
    return temp;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    let check = this.front === null ? true : false;
    return check;
  }
}



// let stacken = new Stack();
// stacken.push(1);
// stacken.push(2);
// stacken.push(3);
// stacken.push(4);
// console.log(stacken);

let queuen = new Queue();
queuen.enqueue(1);
queuen.enqueue(2);
queuen.enqueue(3);queuen.enqueue(4);
// queuen.dequeue();
console.log(queuen);

