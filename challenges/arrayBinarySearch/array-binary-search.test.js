'use strict';

const BinarySearch = require('./array-binary-search');

describe('BinarySearch', () => {
  test('return the index', () =>{
    expect(BinarySearch([0,1,2,3,4,5],0)).toEqual(0);
  });
  test('if the element doesn,t exist return -1', () =>{
    expect(BinarySearch([10,40,89,110,200],300)).toEqual(-1);
  });
  test('return the index', () =>{
    expect(BinarySearch([10,40,89,110,200],200)).toEqual(4);
  });
});
