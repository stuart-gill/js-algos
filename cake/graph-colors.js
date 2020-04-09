//homebrew implementation of graph coloring question from interview cake...
// based the graph on basic graph from Colt Steele algo class, but added a vertices array to Graph
// and made nodes objects so they could have color property

class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex.name]) this.adjacencyList[vertex.name] = [];
    if (!this.vertices.includes(vertex)) this.vertices.push(vertex);
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1.name] && this.adjacencyList[v2.name]) {
      this.adjacencyList[v1.name].push(v2);
      this.adjacencyList[v2.name].push(v1);
    }
  }

  // number of colors must be one greater than maximum degrees of graph (max neighbors of one vertex)
  colorGraph() {
    const colors = ['red', 'blue', 'green', 'yellow'];
    for (let vertex of this.vertices) {
      let forbiddenColors = [];
      for (let neighbor of this.adjacencyList[vertex.name]) {
        forbiddenColors.push(neighbor.color);
      }
      for (let currentColor of colors) {
        if (!forbiddenColors.includes(currentColor)) {
          vertex.color = currentColor;
          break;
        }
      }
    }
  }
}

class GraphVertex {
  constructor(name) {
    this.name = name;
    this.color = null;
  }
}

const A = new GraphVertex('A');
const B = new GraphVertex('B');
const C = new GraphVertex('C');
const D = new GraphVertex('D');
const E = new GraphVertex('E');
const F = new GraphVertex('F');

const graph = new Graph();
graph.addVertex(A);
graph.addVertex(B);
graph.addVertex(C);
graph.addVertex(D);
graph.addVertex(E);
graph.addVertex(F);

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

graph.addEdge(A, B);
graph.addEdge(A, C);
graph.addEdge(B, D);
graph.addEdge(C, E);
graph.addEdge(D, E);
graph.addEdge(D, F);
graph.addEdge(E, F);

graph.colorGraph();

console.log(graph);
