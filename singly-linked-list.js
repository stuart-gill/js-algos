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
}

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
