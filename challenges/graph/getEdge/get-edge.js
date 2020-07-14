'use strict';

const Graph = require('../graph').Graph;
const Vertex = require('../graph').Vertex;

let newGraph = new Graph();

function getEdges(graph, citiesArray){
  let travelCost = 0;
  citiesArray.forEach(city => {
    let getNeighbors = graph.GetNeighbors(city);
    if(getNeighbors){
      getNeighbors.forEach( neighbor => {
        if( city !== neighbor.vertex ) {
          console.log('This City is not included in out Trip');
        } else {
          travelCost = travelCost + neighbor.weight;
        }
      });
    }else {
      return 'This City is not included in out Trip';
    }
  });
 
  return [true, travelCost];
}


/** 
 * first get the first distination in the travel if it exist in the graph else print dont exist
 * check if one of the neighbors is the next city if one of them are  
 */