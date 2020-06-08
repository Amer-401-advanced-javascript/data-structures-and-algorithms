'use strict';

const stackAndQueue = require('../stacksAndQueues/stacks-and-queues');


let Stack = stackAndQueue.Stack;

class PseudoQueue{
  contructor(){
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(value){
    return this.firstStack.push(value);
  }

  dequeue(){
      
    while(this.secondStack.top !== null){        
      let popNodefromTheSecondStack = this.secondStack.pop();
      this.firstStack.push(popNodefromTheSecondStack);
    }
    
    return this.firstStack.pop();
  }
}




// let newStack = new Stack();
// let newStack2 = new Stack();

// newStack2.push('1');newStack2.push('2');newStack2.push('3');

// let queue = new PseudoQueue();
// queue.firstStack = newStack;
// queue.secondStack = newStack2;

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

