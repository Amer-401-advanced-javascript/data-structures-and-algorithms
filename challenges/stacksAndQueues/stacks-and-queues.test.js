'use strict';

let stackAndQueue = require('./stacks-and-queues');

let Stack = stackAndQueue.Stack;

describe('stack operations', () => {
  let stack = new Stack();
  let stackThis = 'stackMe';
  let pushMe= 'alsoStackMe';
  it('can push() to the top', ()=>{
    stack.push(stackThis);
    expect(stack.top.value).toEqual(stackThis);
  });
  it('can push() another item', ()=>{
    stack.push(pushMe);
    expect(stack.top.value).toEqual(pushMe);
  });
  it('can pop item from the top', ()=>{
    stack.pop();
    expect(stack.top.value).not.toEqual(pushMe);
  });
  it('can check if the stack is empty', ()=> {
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('can peek()', ()=> {
    stack.push(stackThis);
    expect(stack.top.value).toEqual(stackThis);
  });
  it('raise exception on empty stack', ()=> {
    stack.pop();
    let pop = stack.pop();
    let peek = stack.peek();
    expect(pop).toEqual('the Stack is empty');
    expect(peek).toEqual('the Stack is empty');
  });
});