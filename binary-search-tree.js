class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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

  // must use First In First Out on queue... this is why we're using shift() and push() for the queue
  // would also work with an n-ary tree
  // basicaly, you're visiting nodes, then sending their children onto a queue to be visited, so that you visit all of tier one first, then tier two, then tier three etc
  breadthFirstSearch() {
    let queue = [this.root];
    let visited = [];
    let currentNode;

    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return visited;
  }

  // pretty simple... recursively looks all the way down left branch, then back up to right...
  // you push node values as you explore them, so first value in visited will be the root, then one down to the left, etc.
  depthFirstSearchPreOrder() {
    let visited = [];

    function recursiveTraverse(node) {
      visited.push(node.value);
      if (node.left) recursiveTraverse(node.left);
      if (node.right) recursiveTraverse(node.right);
    }

    recursiveTraverse(this.root);
    return visited;
  }

  // same as above but don't push value to visited until you've reached the bottom of the tree
  // explore ALL children before adding node to visited. So root node will be the last item in returned array
  depthFirstSearchPostOrder() {
    let visited = [];

    function recursiveTraverse(node) {
      if (node.left) recursiveTraverse(node.left);
      if (node.right) recursiveTraverse(node.right);
      // recursion doesn't stop until there's no left and right-- until you've reached a leaf
      visited.push(node.value);
    }

    recursiveTraverse(this.root);
    return visited;
  }

  // a function to test to see if the tree is "superbalanced", made up term for interview cake.
  // https://www.interviewcake.com/question/javascript/balanced-binary-tree?course=fc1&section=trees-graphs
  // test to see if any two leaf nodes are more than one level separated
  // basing it on depthFirstSearchPostOrder because depth first, especially post order, gets you to leaf nodes quickest
  // trying with LIFO stack iterative solution

  isSuperBalanced() {
    let visited = [];
    let leafDepths = [];

    // push root and its depth to initialize visited
    visited.push([this.root, 0]);

    while (visited.length) {
      const [currentNode, currentDepth] = visited.pop();

      // if leaf node:
      if (!currentNode.left && !currentNode.right) {
        // only add leaf depth if it isn't currently stored
        if (!leafDepths.includes(currentDepth)) {
          leafDepths.push(currentDepth);
          // if there are more than two depths, leaf nodes are more than 1 level separated
          if (leafDepths.length > 2) return false;
          // if there are only two leaf depths but they're more than 1 level separated:
          if (
            (leafDepths.length === 2 && leafDepths[1] - leafDepths[0] > 1) ||
            leafDepths[0] - leafDepths[1] > 1
          )
            return false;
        }
      }
      // if not leaf node, push children onto stack, along with their depths
      if (currentNode.left) visited.push([currentNode.left, currentDepth + 1]);
      if (currentNode.right)
        visited.push([currentNode.right, currentDepth + 1]);
    }

    // if never false, return true:
    return true;
  }

  // perform check to make sure tree is valid
  // have to check not only that left node is less than node and right node is greater than node, but that bounds travel appropriately
  // use DFS with call stack
  isValidBST() {
    // each node will be represented as an object
    let visitedStack = [];

    visitedStack.push({
      node: this.root,
      lowerBound: Number.NEGATIVE_INFINITY,
      uppperBound: Number.INFINITY,
    });

    while (visitedStack.length) {
      const { node, lowerBound, upperBound } = visitedStack.pop();

      if (node.value < lowerBound) return false;
      if (node.value > upperBound) return false;
      if (node.left) {
        visitedStack.push({
          node: node.left,
          lowerBound: lowerBound,
          uppperBound: node.value,
        });
      }
      if (node.right) {
        visitedStack.push({
          node: node.right,
          lowerBound: node.value,
          uppperBound: upperBound,
        });
      }
    }

    // if we loop through everything with no false, then tree is properly sorted
    return true;
  }

  // find second largest node
  // thinking: travel down right side of tree. Last element is largest
  // keep track of previous node at all times
  // if last element has no children, it is the largest and its parent is 2nd largest
  // if last element has only a left child, it the largest and the 2nd largest will be the largest in its left tree.
  // rather than keeping track of parent node, just look ahead via right.right to see if child node has children
  findSecondLargest() {
    // recursive find largest helper function, looks cleaner...
    function recursiveLargest(node) {
      if (!node.right) return node.value;
      recursiveLargest(node.right);
    }

    // ...but iterative version uses less space
    function iterativeLargest(node) {
      let current = node;
      while (current) {
        if (!current.right) {
          // console.log('second largest is ' + current.value);
          return current.value;
        } else current = current.right;
      }
    }

    // if right child has no children, we are at the 2nd largest node
    let current = this.root;
    while (current) {
      if (current.right && !current.right.right && !current.right.left) {
        return current.value;
      } else if (current.right) {
        current = current.right;
      } else return iterativeLargest(current.left);
    }
  }

  // this one is harder to visualize... go all the way down left side, then add left most leaf, then add one up from that leaf, then add right side of that node, then go back up...
  // in this case, the root node will be about in the middle of the returned array, because you add nodes as you backtrack
  depthFirstSearchInOrder() {
    let visited = [];

    function recursiveTraverse(node) {
      if (node.left) recursiveTraverse(node.left);
      visited.push(node.value);
      if (node.right) recursiveTraverse(node.right);
    }

    recursiveTraverse(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(12);
console.log(tree);
tree.insert(7);
tree.insert(17);
tree.insert(19);
tree.insert(21);
tree.insert(23);
console.log(tree);
console.log(tree.recursiveFind(15));
console.log(tree.recursiveFind(1));
console.log('breadth first search: ' + tree.breadthFirstSearch());
console.log('depth first pre order: ' + tree.depthFirstSearchPreOrder());
console.log('depth first post order: ' + tree.depthFirstSearchPostOrder());
console.log('depth first in order: ' + tree.depthFirstSearchInOrder());
console.log('is super balanced: ' + tree.isSuperBalanced());
console.log('is valid BST: ' + tree.isValidBST());
console.log('second largest element is ' + tree.findSecondLargest());
