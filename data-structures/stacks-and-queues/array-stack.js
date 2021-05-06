class Stack {
    constructor() {
      this.data = []
    }
    peek() {
      if (!this.data.length) return null;
      return this.data[this.data.length - 1];
    }
    push(value) {
      if (!value) return null;
      this.data.push(value);
      return this;
    }
    pop() {
      return this.data.pop()
    }
    isEmpty() {
      return this.data.length === 0;
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