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
    if(this.top !== null){
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;       
      return temp.value;
    } else {
      return 'the Stack is empty';
    }
  }
  peek(){
    return this.top !==null ? this.top.value : 'the Stack is empty';  
  }

  isEmpty(){
    return this.top === null ? true : false;
  }

}


// eslint-disable-next-line no-unused-vars
class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let node = new Node(value);    
    if(!this.front){
      this.front = node;
      this.rear = node;
      return this;
    }
    this.rear.next = node;
    this.rear = node;
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

// let queuen = new Queue();
// queuen.enqueue(1);
// queuen.enqueue(2);
// queuen.enqueue(3);queuen.enqueue(4);
// // queuen.dequeue();
// console.log(queuen);

module.exports = {
  Stack : Stack,
  Queue : Queue,
};