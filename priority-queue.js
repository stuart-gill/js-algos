class Node {
  constructor(value, priority) {
    this.value = value;
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

    // now bubble the element up so that it isnt' larger than any of its parents
    while (i > 0) {
      console.log(i);
      let parentIndex = Math.floor((i - 1) / 2);
      if (this.values[i].priority > this.values[parentIndex].priority) {
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
    // once that's done, swap that value down. Determine largest of two children, then swap with largest child IF child is bigger than parent.
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
      let greaterChildIndex =
        child2 === undefined || child1.priority > child2.priority
          ? childIndex1
          : childIndex2;
      if (
        this.values[greaterChildIndex] &&
        this.values[greaterChildIndex].priority > this.values[i].priority
      ) {
        this.swap(i, greaterChildIndex);
        i = greaterChildIndex;
      } else {
        break;
      }
    }
    return oldRoot;
  }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 1);
ER.enqueue('gunshot', 5);
ER.enqueue('high fever', 2);
ER.enqueue('fever', 4);
ER.enqueue('high', 3);
ER.enqueue('like, really high', 3);
console.log(ER.values);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
