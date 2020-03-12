class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let selectedElement = this.keyMap[this._hash(key)];
    if (selectedElement) {
      selectedElement.push([key, value]);
    } else {
      // if selectedElement is undefined, we must create the array that will take this spot
      this.keyMap[this._hash(key)] = [[key, value]];
    }
  }

  get(key) {
    let selectedElement = this.keyMap[this._hash(key)];
    if (!selectedElement) return undefined;
    if (selectedElement.length > 1) {
      for (let e of selectedElement) {
        if (e[0] === key) return [key, value];
      }
    } else if (selectedElement.length === 1) {
      return selectedElement[0];
    } else return undefined;
  }
}

let ht = new HashTable();

console.log(ht.set('pink', 123));
console.log(ht.set('pred', 123));
console.log(ht.set('nep', 123));
console.log(ht.set('donker', 123));
console.log(ht.get('pink'));
