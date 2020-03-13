class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      console.log('total ' + total + ' value ' + value);
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let hashedKey = this._hash(key);
    console.log(hashedKey);
    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }
    for (let e of this.keyMap[hashedKey]) {
      console.log('this key already exists in hashtable, no dupes allowed');
      if (e[0] === key) return undefined;
    }
    this.keyMap[hashedKey].push([key, value]);
  }

  get(key) {
    console.log(this.keyMap);
    let hashedKey = this.keyMap[this._hash(key)];
    // if no such key, return undefined
    if (!hashedKey || hashedKey.length < 1) return undefined;
    // if there's one or more k/v pair stored at hashtable index, loop through and return the one with matching key
    // if there is something stored at this index but key doesn't match any of the keys here, function will return undefined
    for (let e of hashedKey) {
      if (e[0] === key) return [key, e[1]];
    }
  }

  keys() {
    // return all keys
    let flattenedKeyMap = this.keyMap.flat(1);
    let keys = [];
    for (let e of flattenedKeyMap) {
      keys.push(e[0]);
    }
    return keys;
  }

  values() {
    // return all unique values
    let flattenedKeyMap = this.keyMap.flat(1);
    let values = [];
    for (let e of flattenedKeyMap) {
      if (!values.includes(e[1])) values.push(e[1]);
    }
    return values;
  }
}

let ht = new HashTable(7);

console.log(ht.set('pink', 123));
console.log(ht.set('pred', 323));
console.log(ht.set('nep', 143));
console.log(ht.set('donker', 123));
console.log(ht.set('what the holy fuck', 123));
console.log(ht.set('whattheholyfuck', 123));
console.log(ht.set('whattheholyfuck', 323));

console.log(ht.set('totally differentthing', 123));
console.log(ht.get('pink'));
console.log(ht.get('donk'));
console.log(ht.keys());
console.log(ht.values());
