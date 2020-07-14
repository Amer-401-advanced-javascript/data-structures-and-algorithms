'use strict';

const Graph = require('../graph').Graph;
const Vertex = require('../graph').Vertex;

let newGraph = new Graph();

function getEdges(graph, citiesArray){
  let travelCost = 0;
  citiesArray.forEach((city, idx) => {
    let getNeighbors = graph.GetNeighbors(city);
    // console.log(city,'lllllllll');
    let nextCity = citiesArray[idx+1];
    if(getNeighbors){
      getNeighbors.forEach( neighbor => {
        if( nextCity === neighbor.vertex ) {            
          travelCost = travelCost + neighbor.weight;
        }
      });
    }else {
      return [false, 0];
    }
  });
 
  return [true, travelCost];
}



const Pandora = new Vertex('Pandora');
const Metroville = new Vertex('Metroville');
const Arendelle = new Vertex('Arendelle');
const Monstropolis = new Vertex('Monstropolis');
const Naboo = new Vertex('Naboo');
const Narnia = new Vertex('Narnia');


newGraph.addVertex(Pandora);
newGraph.addVertex(Metroville);
newGraph.addVertex(Arendelle);
newGraph.addVertex(Monstropolis);
newGraph.addVertex(Naboo);
newGraph.addVertex(Narnia);
newGraph.addDirectedEdge(Pandora, Metroville, 82);
newGraph.addDirectedEdge(Pandora, Arendelle, 150);
newGraph.addDirectedEdge(Arendelle, Monstropolis, 42);
newGraph.addDirectedEdge(Arendelle, Metroville, 99);
newGraph.addDirectedEdge(Metroville, Naboo, 26);
newGraph.addDirectedEdge(Metroville, Narnia, 37);
newGraph.addDirectedEdge(Monstropolis, Metroville, 105);
newGraph.addDirectedEdge(Monstropolis, Naboo, 73);

newGraph.addDirectedEdge(Naboo, Narnia, 250);

// console.log(newGraph.GetNeighbors(Pandora));
console.log(getEdges(newGraph, [Arendelle, Monstropolis, Naboo ]));



/** 
 * first get the first distination in the travel if it exist in the graph else print dont exist
 * check if one of the neighbors is the next city if one of them are  
 */