class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
    peek() {
      return this.first;
    }
  
    enqueue(value) {
      if (!value) return;
      const newNode = new Node(value);
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }
  
    dequeue() {
      // error check
      if (!this.length) return null;
      const first = this.first;
      if (this.length === 1) {
        this.last = null
      }
  
      this.first = this.first.next;
      this.length--;
      first.next = null
      return first;
    }
  
    isEmpty() {
      return !this.length
    }
}

const orders = new Queue();
orders.peek()
orders.enqueue('1. Salad')
orders.enqueue('2. Burger')
orders.enqueue('3. Pasta')
orders.enqueue('4. Sandwhich')
orders.dequeue() // => 1. Salad
orders.dequeue() // => 2. Burger
orders.peek() // => 3. Pasta
orders.isEmpty() // => false
orders.dequeue() // => 3. Pasta
orders.dequeue() // => 4. Sandwhich
orders.isEmpty() // => true

export { Queue };