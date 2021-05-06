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
  
    traverse(node){
      const tree = { value: node.value };
      tree.left = node.left === null ? null : this.traverse(node.left);
      tree.right = node.right === null ? null : this.traverse(node.right);
      return tree;
    }
    
    insert(value) {
      const node = new Node(value);
      
      if (!this.root) {
        this.root = node;
      } else {
        let current = this.root;
        while (current) {
          if (value < current.value) {
            // Left
            if (!current.left) {
              current.left = node;
              return this;
            }
            current = current.left;
          } else { // value >= current
            if (!current.right) {
              current.right = node;
              return this;
            }
            current = current.right;
          }
        }
      }
      return this;
    }
    lookup(value) {
      if (!this.root) {
        return false;
      }
  
      let current = this.root;
  
      while (current) {
  
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else if (current.value === value) {
          return current;
        }
      }
      return false;
    }
  
    remove(value) {
      if (!this.root) {
         return false;
      }
  
      let parent = null;
      let current = this.root;
      while (current) {
        if (value < current.value){
          parent = current;
          current = current.left;
        } else if (value > current.value) {
          parent = current;
          current = current.right;
        } else if (current.value === value) { // match!
          // 3 options
  
          // 1. current has no right child
          if (!current.right) {
            if (!parent) {
              this.root = current.left;
            } else {
              // 1A. if parent > current, parent.left = current.left
              if (current.value < parent.value) {
                parent.left = current.left;
              // 1B. if parent < current, parent.right = current.left
              } else if (current.value > parent.value) {
                parent.right = current.left;
              }
            }
          
          // 2. right child with no left child
          } else if (!current.right.left) {
            current.right.left = current.left;
            if (!parent) {
              this.root = current.right;
            } else {
              // 2A. if parent > current, parent.left = current.right
              // (make right child a left child of parent)
              if (current.value < parent.value) {
                parent.left = current.right
              // 2B. if parent < current, parent.right = current.right
              // (make right child a right child of parent)
              } else if (current.value > parent.value) {
                parent.right = current.right
              }
            }
          
          // 3. right child with left child
          } else {
            // find the right child's left most child
            let leftmost = current.right.left;
            let leftmostParent = current.right;
            while (leftmost.left) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
  
            // Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = current.left;
            leftmost.right = current.right;
  
            if (!parent) {
              this.root = leftmost;
            } else {
              if (current.value < parent.value) {
                parent.left = leftmost;
              } else if (current.value > parent.value) {
                parent.right = leftmost;
              }
            }
          }
          return true;
        }
      }
    }
  }
  //       9
  //   4      20
  // 1   8  16  50
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(8)
  tree.insert(20)
  tree.insert(50)
  tree.insert(16)
  tree.insert(1)
  tree.lookup(10)
  tree.remove(50)
  JSON.stringify(tree.traverse(tree.root))
  
  