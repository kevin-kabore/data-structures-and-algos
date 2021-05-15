/**
 * Given the root of a binary tree, return its maximum depth.
 * 
 * A binary tree's maximum depth is the number of nodes along the 
 * longest path from the root node down to the farthest leaf node.
 * 
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

// Key points
// - binary tree
// - max depth, depth first search
// - what type of breadth first search? in order, post order, preorder? 
    // since we don't care about the values, type doesn't matter
// - return the count of nodes

// 1. Verify constraints
// what do we return if the root is null?
// return 0

// 2. Test cases

// 3. Brute force
// implement a depth first traversal
// - increment count at every level
// - return the max of traversing left and right

// 4. Code the brute force

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let maxDepth = function(root, depth = 0) {
    if (!root) {
        return depth;
    }
    // increment count at every level
    depth++;
    
    return Math.max(
        maxDepth(root.left, depth),
        maxDepth(root.right, depth)
    );
}
// 5. Errors

// 6. Test 

// 7. Space and time
// - time complexity: O(N)
// in the worst case, the last node is on the right and visited last
// so time is O(N) where N is the number of nodes.
// - space complexity: O(N) worst case, O(logN) best case (perfect BT)
// In the best case: O(logN) in a perfect, balanced and full binary tree
// In the worst case: O(N) in a tree where every node is on the right/left.
// This would be like a linked list, O(N)


// 8. Optimize 

// 9. Code the optimization

// 10. Test, space and time

// 11. Ask the interviewer if okay