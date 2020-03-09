class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // with a Queue, push to end and shift from front (FIFO)
  // Queues are First In First Out...
  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  shift() {
    if (this.size === 0) return null;
    let nodeToShift = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = nodeToShift.next;
    }
    this.size--;
    nodeToShift.next = null;
    return nodeToShift;
  }
}

let queue = new Queue();
queue.push('one');
queue.push('two');
queue.push('three');
queue.push('four');

console.log(queue.shift());
console.log(queue);
