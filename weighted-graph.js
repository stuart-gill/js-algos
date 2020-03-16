class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ vertex: v2, weight });
      this.adjacencyList[v2].push({ vertex: v1, weight });
    }
  }
  dijkstra(v1, v2) {
    let distances = {};
    let previous = {};
    let priorityQueue = new PriorityQueue();
    const adjacencyList = this.adjacencyList;
    for (const vertex in this.adjacencyList) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }
    distances[v1] = 0; //starting element always has 0 distance from itself
    for (const vertex in this.adjacencyList) {
      priorityQueue.enqueue(vertex, distances[vertex]); //enqueue all vertices
    }
    let currentVertex;
    console.log(priorityQueue);

    while (priorityQueue.values.length > 0) {
      currentVertex = priorityQueue.dequeue().val;
      if (currentVertex === v2) return distances;
      for (const neighbor of adjacencyList[currentVertex]) {
        if (neighbor.weight < distances[neighbor.vertex]) {
          distances[neighbor.vertex] = neighbor.weight;
          previous[neighbor] = currentVertex;
          priorityQueue.enqueue(neighbor, neighbor.weight);
        }
      }
    }

    return distances;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B', 5);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 3);
graph.addEdge('C', 'D', 9);
console.log(graph.adjacencyList);
console.log(graph.dijkstra('A', 'D'));
