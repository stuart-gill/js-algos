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

  unshift(value) {
    let newest = new Node(value);
    this.length++;
    if (!this.head && !this.tail) {
      this.head = newest;
      this.tail = newest;
    } else {
      this.head.previous = newest;
      newest.next = this.head;
      this.head = newest;
    }
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let current;
    if (index / this.length < 0.5) {
      let counter = 0;
      current = this.head;
      while (counter < index) {
        current = current.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      current = this.tail;
      while (counter > index) {
        current = current.previous;
        counter--;
      }
    }
    return current;
  }
}

let myList = new DoublyLinkedList();
myList.push('item one');
myList.push('item two');
myList.push('item three');
myList.unshift('unshifted this one');
console.log(myList.get(3));
