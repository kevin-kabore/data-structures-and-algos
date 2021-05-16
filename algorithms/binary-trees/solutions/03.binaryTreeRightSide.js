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

// - 1. Identify the start of the level
// - 2. Breadth first Search 
// - 3. Add last val when level ends

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
// time: O(N) where n is the number of nodes
// - We are still visiting every node to add the right most at every lvl
// space: O(N)
// - worst case: every node is on the right and is returned

// 8. Optimize
// We can potentially optimize for space w/ DFS recursive solution
// - space would be O(H) where H is the height of the tree
// - If we're able to visit all to right, 
    // we know can exclude all left at visited levels
// 1. Prioritize the right side
// 2. Keep track of levels of nodes
    // pass level in each call
    // Q: How do we know if we've seen the level before?
    // A: Since adding rightmost values, level should be >= result.length
        // 1 value per level so:
            // - length after adding root = 1
            // - length after roo.right = 2, etc..
// 3. Add nodes on the bottom levels

// Consider: Which type of Breadth First search?
// - Preorder: Parent, Left, Right
// - Inorder: Left, Parent, Right
// - Postorder: Right, Left, Parent
// None since we are prioritizing right side, but can modify:
// - Preorder: Parent, Right, Left 
// - Inorder: Right, Parent, Left
// - Postorder: Right, Left, Parent
//       <-1->
//    <-2->   3->
//   4->   5     6
//    <-7
//   8
// Pre: [1,3,6,2,5,4,7,8] (P,R,L)
// In: [6,3,1,5,2,7,8,4] (R,P,L)
// Post: [6,3,5,8,7,4,2,1] (R,L,P)
// Solution we want: [1,3,6,7,8]
// - Preorder is closest to our solution if we use PRL
    // and keep track of our level


// 9. Code the optimal solution
let rightSideViewDFS = function(root, result = [], currentLvl = 0) {
    if (!root) {
        return [];
    }
    // push node if on level not visited
    if (currentLvl >= result.length) {
        result.push(root.val);
    }
    // 1. Prioritize the right side
    if (root.right) {
        // 2. Keep track of levels of nodes
        rightSideViewDFS(root.right, result, currentLvl + 1);
    }

    if (root.left) {
        // 2. Keep track of levels of nodes
        rightSideViewDFS(root.left, result, currentLvl + 1);
    }

    return result;
}

// 10. Test, space and time

// 11. Ask the interviewer if ok