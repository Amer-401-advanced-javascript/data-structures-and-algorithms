'use strict';
const Hashmap = require('../hashtable/hashtable');

function leftJoin(leftHash, rightHash) {
//   console.log(leftHash);
  let result = [];
  let arr = [];
  let rightHashArray = rightHash.map;
  let leftHashArray = leftHash.map;

  leftHashArray.forEach(hashElement => {
    Object.keys(hashElement.head.value).forEach(value => {
      let arrindex =leftHash.hash(value);
      let flag =rightHashArray[arrindex];
      
      if(flag){          
         arr = [];
        arr.push(value,hashElement.head.value[value],Object.values(rightHashArray[arrindex].head.value)[0]);
        result.push(arr);
      }else {
         arr = [];
        arr.push(value,hashElement.head.value[value],null);
        result.push(arr);
      }
    });    
  });
  return result;
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
