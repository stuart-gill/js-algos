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
        (element) => element != v2
      );
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        (element) => element != v1
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
      for (const neighbor of adjacencyList[v]) {
        if (!visited[neighbor]) dfs(neighbor);
      }
    }
    dfs(initialVertex);

    return vertexList;
  }

  //use a stack for depth first-- last in, first out
  // stack is implimented with an array using pop() and push
  // you could also move the if statement down to the neighbor loop to avoid adding already visited vertices to the stack, but it works either way
  // could also just check vertexList.includes(vertex) rather than using visited object, but this might take more time?
  depthFirstIterativeTraversal(initialVertex) {
    let vertexList = [];
    let visited = {};
    let stack = [initialVertex];
    let vertex;

    while (stack.length > 0) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        vertexList.push(vertex);
        visited[vertex] = true;
        for (const neighbor of this.adjacencyList[vertex]) {
          stack.push(neighbor);
        }
      }
    }
    return vertexList;
  }

  // use a queue for breadth first-- first in, first out
  // queue is implimented with an array using shift() and push()
  breadthFirstTraversal(initialVertex) {
    let vertexList = [];
    let visited = {};
    let queue = [initialVertex];
    let vertex;

    while (queue.length > 0) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        vertexList.push(vertex);
        visited[vertex] = true;
        for (const neighbor of this.adjacencyList[vertex]) {
          queue.push(neighbor);
        }
      }
    }

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

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(graph.adjacencyList);
console.log(graph.depthFirstRecursiveTraversal('A'));
console.log(graph.depthFirstIterativeTraversal('A'));
console.log(graph.breadthFirstTraversal('A'));
