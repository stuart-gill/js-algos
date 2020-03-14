class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        element => element != v2
      );
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        element => element != v1
      );
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    for (let e of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, e);
    }
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();

graph.addVertex('los angeles');
console.log(graph.adjacencyList);

graph.addVertex('honolulu');
console.log(graph.adjacencyList);

graph.addVertex('san francisco');
console.log(graph.adjacencyList);

graph.addEdge('honolulu', 'los angeles');
console.log(graph.adjacencyList);

graph.addEdge('los angeles', 'san francisco');
console.log(graph.adjacencyList);

graph.removeEdge('los angeles', 'honolulu');
console.log(graph.adjacencyList);

graph.removeVertex('san francisco');
console.log(graph.adjacencyList);
