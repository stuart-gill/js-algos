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
    // do this by swapping root with last element of arraya
    // once that's done, swap that value down. Determine largest of two children, then swap with largest child IF child is bigger than parent.
    // Repeat until no child is bigger
    if (this.values.length < 1) return undefined;
    if (this.values.length === 1) return this.values.pop();
    let root = this.values[0];
    this.values[0] = this.values.pop();
    let i = 0;
    while (true) {
      let childIndex1 = i * 2 + 1;
      let childIndex2 = i * 2 + 2;
      let child1 = this.values[childIndex1] || 0;
      let child2 = this.values[childIndex2] || 0;
      let greaterChildIndex = child1 > child2 ? childIndex1 : childIndex2;
      // occasionaly this.values[greaterChildIndex] will be undefined because out of range, in which case this conditional returns false, which works in the intended fashion
      if (this.values[greaterChildIndex] > this.values[i]) {
        this.swap(i, greaterChildIndex);
        i = greaterChildIndex;
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
maxHeap.insert(67);
maxHeap.insert(17);
maxHeap.insert(7);
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
