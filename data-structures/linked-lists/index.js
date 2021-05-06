class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) { 
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  } // O(1)

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  } // O(1)

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  traverseToIndex(index) {
    // check params
    let currentPos = 0;
    let currentNode = this.head;
    while (currentPos !== index) {
      currentNode = currentNode.next;
      currentPos++
    }
    return currentNode;
  }

  insert(index, value) {
    // check params
    if (index === 0) {
      return this.prepend(value)
    }
    if (index >= this.length) {
      return this.append(value)
    }

    const newNode = new Node(value)
    const trailingNode = this.traverseToIndex(index-1);
    newNode.next = trailingNode.next;
    trailingNode.next = newNode;
    this.length++
    return this.printList()
  }

  remove(index) {
    // check params
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList()
    } else if (index > this.length - 1) {
      return false;
    }

    const trailingNode = this.traverseToIndex(index-1)
    trailingNode.next = trailingNode.next.next;
    this.length--;
    return this.printList()
  }
  /**
   * reverses the singly linked list 
   * ex: 10 -> 5 -> 16 -> 1 
   * => 1-> 5 -> 16 -> 10
   * * => 1-> 5 -> 16 -> 10
   * @return 1 -> 16 -> 5 -> 0
   */
  reverse() { 
    // ALWAYS error check
    if (!this.head.next) {
      return this.head;
    }
    // brute force:
    // while node, push to arr O(n), O(1)
    // iterate backwards, popping, and overriding this.data
    // O(n) time and space

    // better
    // We can optimize space to O(1) and reverse in place
    // with three pointer approach - O(n) time, O(1) space

    // create pointers to head and next node, then set tail to head 
    let first = this.head;
    let second = this.head.next
    this.tail = this.head
    while(second) { // loop while second
      // create pointer to second.next 
      const next = second.next
      // move first to second.next (second.next = first)
      second.next = first
      // move first pointer to second 
      first = second
      // move next to second's value (second = next)
      second = next
    }
    // set head.next to null (it is now the t)
    this.head.next = null 
    // set head to first (which is now the original tail)
    this.head = first    
    return this.printList()
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5); // [10] => [`0, 5`]
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2,99);
myLinkedList.insert(20,88);
myLinkedList.printList();
myLinkedList.remove(4);
myLinkedList.reverse(); // [ 1, 10, 99, 5, 88 ] =>  [ 88, 5, 99, 10, 1 ]

class DoublyLinkedList {
    constructor(value) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) { 
      const newNode = new Node(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this.printList();
    } // O(1)
  
    prepend(value) {
      const newNode = new Node(value)
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this.printList();
    } // O(1)
  
    printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode) {
        array.push(currentNode.value)
        currentNode = currentNode.next
      }
      return array
    }
  
    traverseToIndex(index) { 
      // can improve slightly to O(n/2) by finding out if index is closer
      // to this.head || this.tail, but still O(n)
      // check params
      let currentPos = 0;
      let currentNode = this.head;
      while (currentPos !== index) {
        currentNode = currentNode.next;
        currentPos++
      }
      return currentNode;
    }
  
    insert(index, value) {
      // check params
      if (index === 0) {
        return this.prepend(value)
      }
      if (index >= this.length) {
        return this.append(value)
      }
  
      const newNode = new Node(value)
      const trailingNode = this.traverseToIndex(index-1);
      trailingNode.next = newNode;
      newNode.prev = trailingNode;
      newNode.next = trailingNode.next;
      trailingNode.next.prev = newNode;
      this.length++
      return this.printList()
    }
  
    remove(index) {
      // check params
      if (index === 0) {
        this.head = this.head.next;
        this.length--;
        return this.printList()
      } else if (index > this.length - 1) {
        return false;
      }
  
      const trailingNode = this.traverseToIndex(index-1)
      trailingNode.next = trailingNode.next.next;
      trailingNode.next.prev = null; // remove pointer
      this.length--;
      return this.printList()
    }cctuuuu999999999999999999888888888888987
}
  
let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2,99);
myLinkedList.insert(20,88);
myLinkedList.printList();
myLinkedList.remove(4);

export {
  Node,
  LinkedList,
  DoublyLinkedList
}
  