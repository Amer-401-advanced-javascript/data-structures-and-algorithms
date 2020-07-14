'use strict';

const Graph =require('../graph').Graph;
const Vertex = require ('../graph').Vertex;
const graph = new Graph();



function breadthFirstTraverse ( startNode ) {
  const queue = []; // Behaviour of the queue: first in first out 
  const vistedNodes = new Set(); // track the nodes that we visited

  queue.push(startNode);
  vistedNodes.add(startNode);

  while (queue.length) {
    let currentNode = queue.shift();
    let neighborsNodes = graph.GetNeighbors(currentNode);
    for(let neighbor of neighborsNodes){
      let neighborNode = neighbor.vertex;
      vistedNodes.add(neighborNode);
      queue.push(neighborNode);
    }
  }
  return vistedNodes;
}


const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addVertex(ten);

graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(eight, seven);

console.log(breadthFirstTraverse(eight));

