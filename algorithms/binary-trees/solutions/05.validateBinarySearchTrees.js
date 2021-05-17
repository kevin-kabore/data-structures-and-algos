/**
 * Given the root of a binary tree, 
 * determine if it is a valid binary search tree (BST).
 * 
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 * 
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

// Key points
// - all subtrees on left & right should also be binary search trees
    // need to remember the root

// 1. Verify Constraints
// - For BSTs: always ask if duplicates are allowed and what are the rules? 
    // ie. should all dupes be left or right of its own value?
// Q: Can there be duplicate values in the tree?
// A: Yes, but if you receive duplicates, the tree is not a valid BST

// 2. Test cases
// - Come up with some valid and invalid cases
    // invalid: left is < root => false
    // invalid: root.left is < root but root.left.right > root
// - null case & single node => true

// 3. Brute force
// - Do we need to traverse the tree?
    // yes, we'll need to validate all subtrees where Left < Parent < Right
// - If yes, which traversal? DFS or BFS?
    // BFS goes level by level doesn't help us much...
    // So must be DFS
// - If DFS, which type? InOrder, Pre, post? Could we modify if it helps?
    // Inorder doesn't help: Left all the way, Parent, Right all the way
    // Postorder either: Right all the way, Parent, Left all the way
    // => Most likely Preorder: Get parent, then compare left and right
    // - On Left side: 
        // if going left: left child < Parent (max)
        // if going right: right child > parent but < max 
    // - On Right side:
        // if going right: right child must be > parent (min)
        // if going left: left child < parent but > min 
// How can we always pass down a min and max value to recursive dfs?
// - If we go left, keep min the same, update the max to be current node's val
// - If we go right, keep max the same, update the min val to be current node val,
// Approach:

// 4. Code the brute force
let isValidBST = function(node, min = -Infinity, max = Infinity) {
    // null nodes are valid bsts 
    if (!node) {
        return true;
    }

    if ((node.val <= min) || (node.val >= max)) {
        return false;
    }
    
    return (
        // left: keep min (null), update max to be node.val
        isValidBST(node.left, min, node.val) && 
        // right: update min to be node.val, keep max (null)
        isValidBST(node.right, node.val, max)
    );
}

let isValidBST2 = function(root) {
    if (!root) {
        return true;
    }
    const min = -Infinity;
    const max = Infinity;
    return dfs(root, min, max);
}
const dfs = function(node, min, max) {
    // breaks the rules of BST
    if (node.val <= min || node.val >= max) {
        return false;
    }
    if (node.left) {
        // update the max to be current node's val
        if (!dfs(node.left, min, node.val)) {
            return false;
        }
    }
    if (node.right) {
        // update min to be current node ie right should be > current node
        if (!dfs(node.right, node.val, max)) {
            return false;
        }
    }
    return true;
}

// 5. Check for errors

// 6. Test

// 7. Space and time
// time: O(N) worst case - visit every node and is all on one side
// space: O(N) worst case - call stack for every node

// 8. Optimize
// this is our optimal solution

// 9. Code the optimal solution

// 10. Test, space and time

// 11. Ask the interviewer if ok