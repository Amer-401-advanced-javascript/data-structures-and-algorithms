'use strict';

const stackAndQueue = require('../stacksAndQueues/stacks-and-queues');


let Stack = stackAndQueue.Stack;

class PseudoQueue{
  contructor(){
    this.firstStack;
    this.secondStack;
  }

  enqueue(value){
    this.firstStack.push(value);
    return this.firstStack;
  }

  dequeue(){
      
    while(this.firstStack.top !== null){           
      let popNodefromTheSecondStack = this.firstStack.pop();
      this.secondStack.push(popNodefromTheSecondStack);
    }
    
    return this.secondStack.pop();
  }
}




let newStack = new Stack();
let newStack2 = new Stack();


let queue = new PseudoQueue();
queue.firstStack = newStack;
queue.secondStack = newStack2;


console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));



console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
// console.log(queue.dequeue());

