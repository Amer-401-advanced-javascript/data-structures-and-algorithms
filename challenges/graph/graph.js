'use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this._adjancyList = new Map();
  }

  addVertex(vertex){
    return  this._adjancyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight){
    if( !this._adjancyList.has(startVertex) || ! this._adjancyList.has(endVertex)){
      console.log('No Vertex found');
    }else {
      const adjacencies = this._adjancyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  GetNodes(){
    for( const [vertex, edge] of this._adjancyList.entries()){
      console.log('Vertex ====>', vertex);
      console.log('Edge =====>', edge);          
    }
  }
  GetNeighbors(vertex){
    if(this._adjancyList.has(vertex)){
      return this._adjancyList.get(vertex);
    } else{
      console.log('vertex does not exist!!');
    }
  }

  size(){
    return this._adjancyList.size;
  }

}


// const graph = new Graph();

// const two = new Vertex(2);
// const three = new Vertex(3);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const eight = new Vertex(8);
// const ten = new Vertex(10);

// graph.addVertex(two);
// graph.addVertex(three);
// graph.addVertex(six);
// graph.addVertex(seven);
// graph.addVertex(eight);
// graph.addVertex(ten);

// graph.addDirectedEdge(two, seven);
// graph.addDirectedEdge(three, eight);
// graph.addDirectedEdge(six, seven);
// graph.addDirectedEdge(six, eight);
// graph.addDirectedEdge(ten, two);
// graph.addDirectedEdge(ten, three);
// graph.addDirectedEdge(ten, six);
// graph.addDirectedEdge(eight, seven);


// console.log(graph.GetNeighbors(ten));
