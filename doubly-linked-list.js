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
    // with doubly linked list, check where index is and go from head or tail, depending on which is closer
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

  set(index, value) {
    let selectedNode = this.get(index);
    if (!selectedNode) return false;
    selectedNode.value = value;
    // again, this should perhaps be a void function that throws an exception for invalid parameters
    return true;
  }

  insert(index, value) {
    if (index === 0) !!this.unshift(value);
    if (index === this.length) !!this.push(value);
    if (index < 0 || index > this.length) return false;

    let newNode = new Node(value);
    let nodeBefore = this.get(index - 1);
    let nodeToBump = nodeBefore.next;

    nodeBefore.next = newNode;
    nodeToBump.previous = newNode;
    newNode.next = nodeToBump;
    newNode.previous = nodeBefore;
    this.length++;

    return true;
  }

  remove(index) {
    if (index === 0) !!this.shift();
    if (index === this.length - 1) !!this.pop();
    if (index < 0 || index >= this.length) return false;

    let nodeToBeRemoved = this.get(index);
    let previous = nodeToBeRemoved.previous;
    let next = nodeToBeRemoved.next;
    previous.next = next;
    next.previous = previous;
    this.length--;
    nodeToBeRemoved.next = null;
    nodeToBeRemoved.previous = null;

    // why return node to be removed?
    return nodeToBeRemoved;
  }
}

let myList = new DoublyLinkedList();
myList.push('item one');
myList.push('item two');
myList.push('item three');
myList.unshift('unshifted this one');
myList.insert(1, 'inserted brah');
console.log(myList.remove(1));
console.log(myList);
