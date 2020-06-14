'use strict';

const node = require('./node');

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
}