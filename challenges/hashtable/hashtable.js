'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor(){
    this.head;
  }

  add(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  value(){
    let values = [];
    let currentNode =this.head;
    while(currentNode){
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }
}


class Hashmap{
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }

  hash(key){
    return key.split('').reduce((acc, value) => {        
      return acc + value.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key, value){
    let hashedKey = this.hash(key); //this wu=ill give us an index    
    if(!this.map[hashedKey]){
      this.map[hashedKey] = new LinkedList();
    }
    let entry = {[key] : value};
    this.map[hashedKey].add(entry);
  }

  get(key){
    let hashedKey =this.hash(key);
    let hashedLinkeddList = this.map[hashedKey];
    if(hashedLinkeddList){
      return hashedLinkeddList.value();
    } else{
      return 'No Values Found in this Index';
    }
  }

  contains(key){
    let hashedKey =this.hash(key);
    let hashedLinkeddList = this.map[hashedKey];
    if(hashedLinkeddList){
      return true;
    } else{
      return false;
    }
  }
}
let newHash = new Hashmap(1024);
module.exports = newHash;
// console.log(newHash.hash('Amer'));

// newHash.add('Amer', 'S4');
// newHash.add('Amer', 'Note5');
// console.log(newHash.get('Amer'));
// console.log(newHash.contains('amer'));