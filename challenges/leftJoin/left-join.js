'use strict';
const Hashmap = require('../hashtable/hashtable');

function leftJoin(leftHash, rightHash) {
//   console.log(leftHash);
let result = [];
let arr = []

  leftHash.map.forEach(hashElement => {
    Object.keys(hashElement.head.value).forEach(value => {

      arr.push(value);
      result.push(arr);
        
    });
      
  });
 
  //   const leftKeys = Object.keys(leftHash);
  //   const res = new Array(leftKeys.length);
  
  //   for (let i = 0; i < leftKeys.length; i++) {
  //     const key = leftKeys[i];
  //     const valLeft = leftHash.get(key);
  //     const valRight = rightHash.get(key);
  //     res[i] = [key, valLeft, valRight];
  //   }
  
  //   return res;
}



let rightHash = new Hashmap(1024);
let leftHash = new Hashmap(1024);
leftHash.add('fond', 'enamored');
leftHash.add('wrath', 'anger');
leftHash.add('diligent', 'employed');
leftHash.add('outfit', 'garb');
leftHash.add('guide', 'usher');

rightHash.add('fond', 'averse');
rightHash.add('wrath', 'delight');
rightHash.add('diligent', 'idle');
rightHash.add('guide', 'follow');
rightHash.add('flow', 'jam');

console.log(leftJoin(leftHash, rightHash));
