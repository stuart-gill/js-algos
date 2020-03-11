class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // helper function
  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }

  insert(newValue) {
    if (this.values.includes(newValue)) return undefined;

    // add the new values, then
    this.values.push(newValue);
    // get the index of the element just added
    let i = this.values.length - 1;

    // now bubble the element up so that it isnt' larger than any of its parents
    while (i > 0) {
      console.log(i);
      let parentIndex = Math.floor((i - 1) / 2);
      if (this.values[i] > this.values[parentIndex]) {
        this.swap(i, parentIndex);
        i = parentIndex;
      } else {
        break;
      }
    }

    return this.values;
  }

  extractMax() {
    // pop the root node (max element) and restructure heap
    // do this by swapping root with element last added to heap (which is the last element of the array)
    if (this.values.length < 1) return undefined;
    let root = this.values[0];
    this.values[0] = this.values.pop();
    let i = 0;
    while (true) {
      let child1 = i * 2 + 1;
      let child2 = i * 2 + 2;
      let greaterChild =
        this.values[child1] > this.values[child2] ? child1 : child2;
      if (this.values[greaterChild] > this.values[i]) {
        this.swap(i, greaterChild);
        i = greaterChild;
      } else {
        break;
      }
    }
    return root;
  }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(28);
maxHeap.insert(4);
maxHeap.insert(6);
maxHeap.insert(8);
maxHeap.insert(12);
maxHeap.insert(16);
maxHeap.insert(16);
maxHeap.insert(167);
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
