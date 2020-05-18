'use strict';

const insertShiftArray = require('./array-shift');

test('insertShiftArray()', () => {
  expect(insertShiftArray([1,4,2,3,4], 42)).toEqual([1,4,2,42,3,4]);
});
test('insertShiftArray()', () => {
  expect(insertShiftArray([], 42)).toEqual('incorrect');
});
test('insertShiftArray()', () => {
  expect(insertShiftArray([1,3], 'HEY')).toEqual('incorrect');
});