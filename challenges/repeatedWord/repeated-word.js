'use strict';

let HashTable =require('../hashtable/hashtable');

function repeatedWords (paragraph) {
  let splitted = splitParagraph(paragraph);
  for(let i = 0; i < splitted.length; i++){
    if(HashTable.contains(splitted[i])){   
      return splitted[i];
    } else {      
      HashTable.add(splitted[i],splitted[i]);
    }
  }
}


function splitParagraph(paragraph){
  let arr = [];
  let stringed  = '';
  for(let i = 0 ; i < paragraph.length; i++){
    if(('.' === paragraph[i]) || (' ' === paragraph[i]) || (',' === paragraph[i])){
      arr[arr.length] =  stringed; 
      stringed = '';      
    }else{
      stringed = stringed + paragraph[i].toLowerCase();
    }
  }
  return arr;
}


console.log(repeatedWords('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison '));
