'use strict';

const Node = require('./node');

class BinaryTree {
  constructor(root){
    this.root = root;
  }
 
  // Root - Left - Right
  preOrder(){
    let results = [];
    let _walk = (node)=> {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  // Left - Root - Right
  inOrder(){
    let results = [];
    let _walk = (node) =>{
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  // left - Right - Root
  postOrder(){
    let results = [];
    let _walk = (node)=> {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };  
    _walk(this.root);
    return results;
  }

  breadthFirst(){
    let results = [];
    let queue = [];
    
    queue.push(this.root);    
    while(queue.length){
      let node = queue.shift();      
      results.push(node.value);
      if (node.right !== null) queue.push(node.right);
      if(node.left !==null) queue.push(node.left);
    }
    return results;
  }

  find_maximum_value(){
    let currentNode = this.root;
    if(!currentNode) return;
    let maxValue = currentNode.value;
    let _walk = (currentNode)=>{
      if(currentNode.left) _walk(currentNode.left);
      if(currentNode.value > maxValue) maxValue = currentNode.value;
      if(currentNode.right) _walk(currentNode.right);
      if(currentNode.value > maxValue) maxValue = currentNode.value;

    };
    _walk(currentNode);
    return maxValue;
  }
}

class BinarySearchTree{
  constructor(root){
    this.root = root;
  }
    
  add(value){
    let currentNode= this.root;
    if(!currentNode) this.root = new Node(value);
    while(currentNode){
      if(currentNode.value > value){
        if(!currentNode.left){
          currentNode.left = new Node(value); 
          break;  
        } else {
          currentNode = currentNode.left;
        }
      }
      if(currentNode.value < value){
        if(!currentNode.right){
          currentNode.right = new Node(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  contains(value){
    
  }
}

// let bin = new BinarySearchTree();

// bin.add(1);
// bin.add(2);
// bin.add(3);
// bin.add(4);
// bin.add(5);
// bin.add(6);
// bin.add(7);
// console.log(bin.root);


// console.log(bin2.breadthFirst());
// let node = new Node(1);let node2 =new Node(87);
// let node3 =new Node(5);
// let node4 =new Node(47);
// let node5 =new Node(900);



// node.right = node2;
// node.left = node3;
// node3.right = node4;
// node3.left = node5;

// let bin2 = new BinaryTree(node);

// console.log(bin2.find_maximum_value());







module.exports = {BinarySearchTree,BinaryTree};