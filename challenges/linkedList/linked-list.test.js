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
  it('bad scenario for .readFromTheEnd()', ()=>{
    let node = new LinkedList();
    node.insert(1);
    node.insert(2);
    node.insert(3);
    node.insert(5);
    expect(node.readFromTheEnd(5)).toEqual('Enter a valid positive number less than the linked list node');
    expect(node.readFromTheEnd(3)).toEqual('Enter a valid positive number less than the linked list node');
    expect(node.readFromTheEnd(-1)).toEqual('Enter a valid positive number less than the linked list node');
  });

  it('test .readFromTheEnd() for one node', () => {
    let node = new LinkedList();
    node.insert(1);
    expect(node.readFromTheEnd(1)).toEqual('Enter a valid positive number less than the linked list node');

  });

  it('working scenario for .readFromTheEnd()', () => {
    let node = new LinkedList();
    node.insert(1);
    node.insert(2);
    node.insert(3);
    node.insert(4);
    expect(node.readFromTheEnd(1)).toEqual(3);
  });

});