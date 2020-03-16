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
      distances[vertex] = vertex === v1 ? 0 : Infinity; //starting element always has 0 distance from itself, others set at Infinity
      previous[vertex] = null;
      priorityQueue.enqueue(vertex, distances[vertex]);
    }
    let currentVertex;
    // console.log(distances);
    console.log(priorityQueue);

    while (priorityQueue.values.length > 0) {
      currentVertex = priorityQueue.dequeue().val;
      console.log('current vertex ' + currentVertex);
      if (currentVertex === v2) return distances;
      for (const neighbor of adjacencyList[currentVertex]) {
        console.log(neighbor);
        let candidateWeight = distances[currentVertex] + neighbor.weight;
        if (candidateWeight < distances[neighbor.vertex]) {
          distances[neighbor.vertex] = candidateWeight;
          previous[neighbor] = currentVertex;
          priorityQueue.enqueue(neighbor.vertex, candidateWeight);
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

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstra('A', 'E'));
