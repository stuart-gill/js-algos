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
  // You could also do this with an Array using push and shift OR unshift and pop, but both of these require constant reindexing on either adding or removing elements

  // using terms enqueue and dequeue rather than push and shift
  enqueue(value) {
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

  dequeue() {
    if (this.size === 0) return null;
    let nodeToDequeue = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = nodeToDequeue.next;
    }
    this.size--;
    nodeToDequeue.next = null;
    return nodeToDequeue;
  }
}

let queue = new Queue();
queue.enqueue('one');
queue.enqueue('two');
queue.enqueue('three');
queue.enqueue('four');

console.log(queue.dequeue());
console.log(queue);
