'use strict';
 
class AnimalShelter{
  constructor () {
    this.catGroup = [];
    this.dogGroup = [];
  }

  enqueue(animal){
    if((animal!=='cat') || (animal!=='dog')){
      return 'Dogs and Cats arthe only animal accepted';
    }
    else if(animal === 'cat'){
      return this.catGroup.push(animal);
    }
    else if(animal === 'dog'){
      return this.AnimalShelter.push(animal);
    }
  }

  dequeue(pref){
    if( (pref !== 'cat' || (pref !== 'dog')) ){
      return null;
    }else if (pref === 'cat'){
      return this.catGroup.shift();
    }else if(pref === 'dog'){
      return this.dogGroup.shift();
    }
  }
}

// let sh = new AnimalShelter();

// sh.enqueue('cat')
// sh.enqueue('cat')
// sh.enqueue('cat')
// sh.enqueue('cat')