'use strict';

const BinaryTree = require('../tree/tree').BinaryTree;
const newHash = require('../hashtable/hashtable');


function tree_intersection  (firstTree, secondTree) {
  let firstTreeArray = firstTree.postOrder();
  let secondTreeArray = secondTree.postOrder();
  let duplicateValues = [];
  firstTreeArray.forEach(value => {
    newHash.add(value,value);
  });
  secondTreeArray.forEach(value => {
    if(newHash.contains(value)){
      duplicateValues.push(value);
    }
  });
  return duplicateValues;
}



let firstTree = new BinaryTree();
let secondTree = new BinaryTree();
console.log(tree_intersection(firstTree, secondTree));
