/**
 * Binary Tree Right Side View
 * 
 * Given the root of a binary tree, 
 * imagine yourself standing on the right side of it, 
 * return the values of the nodes you can see ordered from top to bottom.
 * 
 * https://leetcode.com/problems/binary-tree-right-side-view/
 */

// Key points
// binary tree
// need: all vals of nodes that we can SEE from the right side
// - that means we exclude all nodes that are blocked from the right side
// - on every level, only count the rightmost value
// if there's a left leaf, add val as well

// 1. Verify Constraints
// Q: What do we return if there are no values in the tree?
// A: Return empty array

// 2. Test cases

// 3. Brute force
// - what we really want is all the rightmost vals on each level
// - We can do a breadth first traversal, 
    // only adding nodes at the end of the level

// 1. Identify the start of the level
// 2. Breadth first Search 
// 3. Add last val when level ends

// 4. Code the brute force
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Returns all the vals of a binary trees visible from the right side
 * @param {TreeNode} root
 * @return {number[]}
 */
let rightSideView = function(root) {
    if (!root) {
        return [];
    }
    // Initialize bfs q with root
    const queue = [root];
    const visibleFromRight = [];
    while (queue.length) {
        let currentNode;
        // 1. Identify the start of the level
        let valuesOnLevel = queue.length;
        let valuesVisited = 0;
        while (valuesVisited < valuesOnLevel) {
            currentNode = queue.shift();
            valuesVisited++;
            
            // 2. Breadth first Search 
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        // 3. Add last val when level ends (visited = valsOnLevel)
        visibleFromRight.push(currentNode.val);    
    }
    return visibleFromRight;
}
// 5. Check for errors

// 6. Test

// 7. Space and time

// 8. Optimize

// 9. Code the optimal solution

// 10. Test, space and time

// 11. Ask the interviewer if ok