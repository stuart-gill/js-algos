class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // if you want to add multiples of one digit, you could add a frequency counter to the node class
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) this.root = newNode;
    else {
      let current = this.root;
      while (current) {
        if (newNode.value === current.value) return undefined;
        if (newNode.value < current.value) {
          if (!current.left) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        }
      }
      return this;
    }
  }

  // you could also rewrite this to return the node itself rather than boolean
  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        if (!current.left) return false;
        else {
          current = current.left;
        }
      } else {
        if (!current.right) return false;
        else {
          current = current.right;
        }
      }
    }
  }

  // just trying a recursive version with nested ternaries. Could be done for insert too.
  recursiveFind(value, current = this.root) {
    return value === current.value
      ? true
      : value < current.value
      ? current.left
        ? this.recursiveFind(value, current.left)
        : false
      : current.right
      ? this.recursiveFind(value, current.right)
      : false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(5);
console.log(tree);
tree.insert(7);
console.log(tree);
console.log(tree.recursiveFind(15));
console.log(tree.recursiveFind(1));
