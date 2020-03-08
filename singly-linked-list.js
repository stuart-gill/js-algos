// singly linked list is a collection of nodes
// each node will have a value and a pointer to next node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    // push should accept a value
    // create a new node object with that value
    // set the previous tail (if exists) to point to the new node
    // change the tail to this new node
    // increment the length of the list
    // if there's no head or tail, set the new node to be both head and tail
    let newest = new Node(value);
    this.length++;
    if (!this.head && !this.tail) {
      this.head = newest;
      this.tail = newest;
    } else {
      this.tail.next = newest;
      this.tail = newest;
    }
    return this;
  }

  pop() {
    // should remove and return tail
    // decrement length
    // assign tail to new tail
    if (this.length === 0) return undefined;
    let oldTail = this.tail;
    let penultimate = this.head;
    let ultimate = penultimate;
    while (ultimate.next) {
      penultimate = ultimate;
      ultimate = ultimate.next;
    }
    this.tail = penultimate;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldTail;
  }

  shift() {
    // should remove and return head
    // decrement length
    // assign new head
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    // delink old head from the list
    oldHead.next = null;
    return oldHead;
  }

  unshift(value) {
    // should add value and return array
    // increment length
    // reassign head
    let newHead = new Node(value);
    if (!this.head && !this.tail) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    // should take in index and return the node at that index (although of course there are no indexes in singly linked lists)
    // so, traverse list until you hit the "index" and return that node
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, newValue) {
    // accept an index and a value
    // find the element with that index, update its value to new value
    let selectedNode = this.get(index);
    if (!selectedNode) return false;
    selectedNode.value = newValue;
    // why return true instead of returning the modified node?
    // return true;
    return selectedNode;
  }

  insert(index, newValue) {
    // accept an index and a value
    // create a new node with this value, and point it at the node currently at this index
    // change the node one before this index so that it now points to this new node
    if (index < 0 || index > this.length) return false;
    if (index === this.length) !!this.push(newValue); //double bang converts return value to boolean
    if (index === 0) !!this.unshift(newValue);

    let nodeBeforeInsertionPoint = this.get(index - 1);
    let nodeAtInsertionPoint = nodeBeforeInsertionPoint.next;
    let newNode = new Node(newValue);
    newNode.next = nodeAtInsertionPoint;
    nodeBeforeInsertionPoint.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift;
    if (index === this.length - 1) return this.pop;
    let nodeBeforeDelete = this.get(index - 1);
    let nodeToDelete = nodeBeforeDelete.next;
    let nodeAfterDelete = nodeToDelete.next;
    nodeBeforeDelete.next = nodeAfterDelete;
    this.length--;
    return nodeToDelete;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }
}

// test the class methods
let myList = new SinglyLinkedList();
myList.push('hi');
myList.push('how');
myList.push('are');
myList.push('you');
console.log(myList.shift());
console.log(myList.shift());
console.log(myList.shift());
console.log(myList);

console.log(myList.shift());
console.log(myList);

console.log(myList.unshift('something new'));
console.log(myList.unshift('another thing'));
console.log(myList.get(1));
console.log(myList.set(1, 'changed value!!!'));
myList.insert(1, 'this was inserted yo');
myList.insert(1, 'also inserted');
console.log(myList);
console.log(myList.reverse());
