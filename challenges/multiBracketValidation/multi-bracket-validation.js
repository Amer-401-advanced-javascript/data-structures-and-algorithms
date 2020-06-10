'use strict';

function multiBracketValidation(input){
  if(typeof(input) === 'string'){
    // let count = 0;
    let split = input.split('');
    console.log(split.length);
    
    let parnth=0;
    let squreBrackets = 0; 
    let curly = 0;
    split.forEach(value => {
      //paranth
      switch(value){
      case '(':
        parnth++;
        break;
      case ')':
        parnth--;
        break;
      case'[': 
        squreBrackets++;
        break;
      case']': 
        squreBrackets--;
        break;
      case'{':
        curly++;
        break;
      case'}': 
        curly--;
        break;
      }
    });
    if( (parnth === 0) && (squreBrackets === 0) && (curly === 0) ){
      return true;
    }else{
      return false;
    }
    
  }else {
    return 'enter a String';
  }
    
}

console.log(multiBracketValidation('({()(hello)jh))_}'));


/**
 * check your options
 * we can use regex ====> 
 * we can use stack DS
 * we can count the number of opning and closing brackets and see if they match
 * we can look for a closing bracket for each opning
*/