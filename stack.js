class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // for singly linked list implemented as a Stack, push and pop off the beginning of the list to keep these operations efficient
  // using "first" and "last" because "head" and "tail" are words reserved for linked lists

  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;
    let nodeToPop = this.first;
    if (this.size > 1) {
      this.first = nodeToPop.next;
    } else {
      this.first = null;
      this.last = null;
    }
    this.size--;
    nodeToPop.next = null;
    return nodeToPop;
  }
}

let stack = new Stack();
stack.push('one');
stack.push('two');
stack.push('three');
console.log(stack);

stack.pop();
stack.pop();
stack.pop();
console.log(stack);
