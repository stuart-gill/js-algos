class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    // accept a value
    // create a new node with this value
    // if no head or tail, set this node to be both
    //
    let newest = new Node(value);
    this.length++;
    if (!this.head && !this.tail) {
      this.head = newest;
      this.tail = newest;
    } else {
      newest.previous = this.tail;
      this.tail.next = newest;
      this.tail = newest;
    }
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let lastNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = lastNode.previous;
      this.tail.next = null;
      lastNode.previous = null;
    }
    this.length--;
    return lastNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let firstNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = firstNode.next;
      this.head.previous = null;
      firstNode.next = null;
    }
    this.length--;
    return firstNode;
  }
}

let myList = new DoublyLinkedList();
myList.push('item one');
myList.push('item two');
myList.push('item three');
console.log(myList.pop());
console.log(myList.shift());
console.log(myList);
