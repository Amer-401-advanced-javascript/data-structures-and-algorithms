'use strict';

let BinarySearchTree = require('../tree/tree');

// eslint-disable-next-line no-unused-vars
function FizzBuzzTree (tree){
  let currentNode = tree.root;  
  traverse(currentNode);
  return tree;
  
}

function traverse(node){
  node.value = fizzbuzz(node.value);  
  if(node.left) traverse(node.left);  
  if(node.right) traverse(node.right);
}


function fizzbuzz (value) {
  if (typeof(value) === 'number'){      
    if(!(value%3) && (value%5)) {return 'fizz';}
    else if(!(value%5) && (value%3)) {return 'buzz';}
    else if(!(value%3) && !(value%5)) {return 'fizzbuzz';}
    else {return value.toString();}
  }
}


let BST = new BinarySearchTree();
BST.add(100);
BST.add(500);
BST.add(95);
BST.add(33);
BST.add(15);
// console.log(BST.root);


console.log(FizzBuzzTree(BST));





