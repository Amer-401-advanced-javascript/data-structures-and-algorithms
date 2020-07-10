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

