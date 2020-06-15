'use strict';


// eslint-disable-next-line no-unused-vars
function FizzBuzzTree (tree){
    
}



function fizzbuzz (value) {
  if (typeof(value) === 'number'){
    if((!value%3) && (value%5)) {return 'fizz';}
    else if(!value%5 && (value%3)) {return 'buzz';}
    else if((!value%3) && (!value%5)) {return 'fizzbuzz';}
    else if((value%3) && (value%5)) {return value.toString();}
  }
}