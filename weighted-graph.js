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
    let path = [];
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

    while (priorityQueue.values.length > 0) {
      currentVertex = priorityQueue.dequeue().val;
      // once you get to the destination vertex (v2), document the path from v2 back to v1 using the previous object
      // break, since you've found what you're looking for
      if (currentVertex === v2) {
        while (previous[currentVertex]) {
          path.push(currentVertex);
          currentVertex = previous[currentVertex];
        }
        path.push(v1); //have to add this one manually
        console.log(distances);
        break;
      }

      for (const neighbor of adjacencyList[currentVertex]) {
        console.log(neighbor);
        let candidateWeight = distances[currentVertex] + neighbor.weight;
        if (candidateWeight < distances[neighbor.vertex]) {
          distances[neighbor.vertex] = candidateWeight;
          previous[neighbor.vertex] = currentVertex;
          priorityQueue.enqueue(neighbor.vertex, candidateWeight);
        }
      }
    }

    console.log(
      `shortest path from ${v1} to ${v2} is ${path
        .reverse()
        .join('-')}, with a total distance of ${distances[v2]} `
    );
    return path;
  }
}

// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//     this.sort();
//   }
//   dequeue() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // helper function
  swap(index1, index2) {
    [this.values[index2], this.values[index1]] = [
      this.values[index1],
      this.values[index2]
    ];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    // add the new values, then
    this.values.push(newNode);
    // get the index of the element just added
    let i = this.values.length - 1;

    // now bubble the element up so that it isnt' smaller than any of its parents
    while (i > 0) {
      console.log(i);
      let parentIndex = Math.floor((i - 1) / 2);
      if (this.values[i].priority < this.values[parentIndex].priority) {
        this.swap(i, parentIndex);
        i = parentIndex;
      } else {
        break;
      }
    }

    return this.values;
  }

  dequeue() {
    // pop the root node (max element) and restructure heap
    // do this by swapping root with last element of arraya
    // once that's done, swap that value down. Determine largest of two children, then swap with smallest child IF child is smaller than parent.
    // Repeat until no child is bigger
    if (this.values.length < 1) return undefined;
    if (this.values.length === 1) return this.values.pop();
    let oldRoot = this.values[0];
    this.values[0] = this.values.pop();
    let i = 0;
    while (true) {
      let childIndex1 = i * 2 + 1;
      let childIndex2 = i * 2 + 2;
      let child1 = this.values[childIndex1];
      let child2 = this.values[childIndex2];
      let lesserChildIndex =
        child2 === undefined || child1.priority < child2.priority
          ? childIndex1
          : childIndex2;
      if (
        this.values[lesserChildIndex] &&
        this.values[lesserChildIndex].priority < this.values[i].priority
      ) {
        this.swap(i, lesserChildIndex);
        i = lesserChildIndex;
      } else {
        break;
      }
    }
    return oldRoot;
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
console.log(graph.dijkstra('A', 'C'));
