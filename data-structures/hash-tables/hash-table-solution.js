// Implement the set and get methods
class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    // returns an address in data based on the key
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    } // O(1), just looping over key
  
    set(key, value) {
      const address = this._hash(key)
      if (!this.data[address]) {
        this.data[address] = []
      }
      this.data[address].push([key, value])
    } // O(1), just push
  
    get(key) {
      const address = this._hash(key)
      const bucket = this.data[address]
      if (!bucket) {
        return undefined
      }
  
      for (let i=0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1]
        }
      }
    } // O(1) avg, O(n) with collisions
  
    /**
     * returns a reduced array 
     * of bucket keys or values
     * @param {'keys' | 'values'} type
     * @return any[]
     */
    _reduceBucketsBy(by = 'keys') {
      const keyOrValue = by === 'keys' ? 0 : 1;
      return this.data.reduce((res, bucket) => {
        if (!bucket) return res; 
        bucket.forEach(address => {
          res.push(address[keyOrValue])
        })
        return res;
      }
      , [])
    }
    keys() {
      if (!this.data.length) return [];
      
      // for (let i=0; i < this.data.length; i++) { // O(l) , l = length of this,data
      //   if (!this.data[i]) {
      //     continue;
      //   }
      //   this.data[i].forEach(address => {
      //     keys.push(address[0])
      //   })
      // }
  
      // modern approach
      return this._reduceBucketsBy('keys');
    }
  
    values() {
      if (!this.data.length) return [];
      return this._reduceBucketsBy('values')
    }
  
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 54)
  myHashTable.get('apples')
  myHashTable.set('bananas', 20)
  myHashTable.keys()
  myHashTable.values()
  // console.log(myHashTable)
  