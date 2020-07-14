'use strict';
const Graph = require('../graph').Graph;
const Vertex = require('../graph').Vertex;

let graph = new Graph();

function depthFirst(startNode, visited = new Set()){
  visited.add(startNode);
  let neighborNodes = graph.GetNeighbors(startNode);
  if(neighborNodes !== undefined){
    for(const neighborNode of neighborNodes){
      if(!(visited.has(neighborNode))){
        depthFirst(neighborNode.vertex, visited);
      }
    } 
  }
  return visited;
}


const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);
const five = new Vertex(5);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addVertex(ten);
graph.addVertex(five);


graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(eight, seven);
graph.addDirectedEdge(three, seven);
graph.addDirectedEdge(three, five);

console.log(depthFirst(ten));
