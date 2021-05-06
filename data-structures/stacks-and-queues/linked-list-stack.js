class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
class Stack { // with linked list
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  
    peek() {
      return this.top ? this.top.value : this.top;
    } // O(1) time
  
    push(value) {
      // error check
      if (!value) return;
  
      const newNode = new Node(value);
      if (!this.top) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
  
      this.length++;
      return this;
    } // O(1) time and space
  
    pop() {
      // error
      if (!this.top) return null;
  
      if (this.top === this.bottom) { //only one item
        this.bottom = null;
      } 
      
      const top = this.top;
      this.top = this.top.next
      this.length--;
      top.next = null; // remove reference
      return top.value;
  
    } // O(1) time and space
  
    isEmpty() {
      return this.length === 0;
    }
  
}

const myBrowserHistory = new Stack();
myBrowserHistory.push('google')
myBrowserHistory.push('zero to m')
myBrowserHistory.push('medium')
myBrowserHistory.push('linkedin')
myBrowserHistory.pop()
myBrowserHistory.pop()
myBrowserHistory.peek()
myBrowserHistory.pop()
myBrowserHistory.pop()
myBrowserHistory.isEmpty()

export { Stack };