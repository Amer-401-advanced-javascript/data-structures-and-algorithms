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
    while(queue){
      let node = queue.shift();
      results.push(node.value);
      if (node.right !== null) queue.push(node.right);
      if(node.left !==null) queue.push(node.left);
    }
    return results;

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

module.exports =BinarySearchTree;