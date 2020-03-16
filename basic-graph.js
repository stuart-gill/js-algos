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

  depthFirstRecursiveTraversal(initialVertex) {
    let vertexList = [];
    let adjacencyList = this.adjacencyList;
    let visited = {};

    function dfs(v) {
      if (!v) return null;
      vertexList.push(v);
      visited[v] = true;
      console.log('vertex ' + v);
      console.log(adjacencyList[v]);
      // Why does a for-of loop fail here? Call stack is weird
      // for (const neighbor of adjacencyList[v]) {
      //   console.log(neighbor);
      //   if (!visited[neighbor]) return dfs(neighbor);
      // }
      adjacencyList[v].forEach(neighborElement => {
        console.log(neighborElement);
        if (!visited[neighborElement]) return dfs(neighborElement);
      });
    }
    dfs(initialVertex);

    return vertexList;
  }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
console.log(graph.adjacencyList);
console.log(graph.depthFirstRecursiveTraversal('A'));
