'use strict';

const LinkedList = require('./linked-list');

describe('construct', () => {
  it('construct()', ()=> {
    let firstNode = new LinkedList();
    expect(firstNode.head).toBeNull();
  });
  it('insert() new node', ()=>{
    let newNode = new LinkedList();
    let initialValue = 'headNodeCreated';
    let secondValue = 'secondValue';

    newNode.insert(initialValue);
    newNode.insert(secondValue);
    expect(newNode.head.value).toEqual(initialValue);
    expect(newNode.head.next.value).toEqual(secondValue);
    expect(newNode.includes(secondValue)).toBeTruthy();
    expect(newNode.includes('notHere')).toBeFalsy();
    expect(newNode.toString()).toEqual(`{ ${initialValue} } => { ${secondValue} } => Null`);
  });
});