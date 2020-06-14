'use strict';
 
class AnimalShelter{
  constructor () {
    this.catGroup = [];
    this.dogGroup = [];
  }

  enqueue(animal){
    console.log(animal === 'cat');
    
    if((animal!=='cat') && (animal!=='dog')){
      let notAccepted = 'Dogs and Cats are the only animals accepted';
      return notAccepted;
    }
    else if(animal === 'cat'){
      return this.catGroup.push(animal);
    }
    else if(animal === 'dog'){
      return this.dogGroup.push(animal);
    }
  }

  dequeue(pref){
    if( (pref !== 'cat' && (pref !== 'dog')) ){
      return null;
    }else if (pref === 'cat'){
      return this.catGroup.shift();
    }else if(pref === 'dog'){
      return this.dogGroup.shift();
    }
  }
}

// let animal = new AnimalShelter();

// sh.enqueue('cat')
// sh.enqueue('cat')
// sh.enqueue('cat')
// sh.enqueue('dog')
// sh.dequeue('dog')
// console.log(animal);

