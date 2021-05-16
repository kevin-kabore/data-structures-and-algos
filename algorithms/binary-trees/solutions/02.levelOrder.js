/**
 * Given the root of a binary tree, 
 * return the level order traversal of its nodes' values. 
 * (i.e., from left to right, level by level).
 * 
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

// Key points
// levl order: value at each level, left to right
// - [root], [left child, right child], [left.left, left.right, right.left, right.right]

// 1. Verify constraints
// Q: what do we return if the root is empty?
// A: return an empty array

// 2. Test cases

// 3. Brute force
// nodes in order per level = breadth first search iterative
// difference: Breadth first only returns nodes in correct order
// - We need to: 
// 1. Identify level of tree
    // need: queue, resultArr, levelList
    // keep: levelCount = q.len, currentCount = 0
    // on each iteration, currentCount++
    // push val to level list
    // push left and right to queue if exist
    // if (currentCount === levelCount)
        // push levelList to result, reset:
            // levelList = [], levelCount = q.len, currentCount = 0;

// 2. Initialize our sub array when at start of level
    // when count is 0
// 3. Push our subArray to our result

// how can we know when we're at the next level?
// can keep track of the parent? If not same parent, create new array

// 4. Code the brute force
const levelOrdered = function(root) {
    if (!root) {
        return [];
    }
    const result = [];
    const queue = [root];
    
    // 1. Identify level of tree
    let levelCount = queue.length;
    let currentCount = 0;
    let levelValues = [];
    while(queue.length) {
        const currentNode = queue.shift();
        currentCount++; // increment
        
        levelValues.push(currentNode.val);

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        
        // done with the level
        if (currentCount === levelCount) {
            result.push(level); // push level
            levelValues = []; // reinitialize
            levelCount = queue.length; // # of nodes in next level
            currentCount = 0; // reset
        }
    }

    return result;
}

const levelOrderedClean = function(root) {
    if (!root) {
        return [];
    }
    const result = [];
    const queue = [root];
    while (queue.length) {
        // 1. Identify level of tree
        // This while loop will keep track of our levels
        let nodesOnLevel = queue.length, nodesCounted = 0;
        
        // 2. Initialize our sub array when at start of level
        const valuesOnLevel = [];
        // loop until processed whole level
        while (nodesCounted < nodesOnLevel) {
            // this will take care of our Breadth first search
            const currentNode = queue.shift();
            valuesOnLevel.push(currentNode.val);

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            nodesCounted++;
        }
        // 3. Push our subArray to our result
        result.push(valuesOnLevel);
    }
}

// 5. Errors

// 6. Test 

// 7. Space and time
// time: O(N) where n is the number of nodes
// space: O(N)
// - result array: O(N) 
// - queue: at most # of nodes at each level
    // max is at last level = O(N/2)

// 8. Optimize 
// this is the most optimal solution

// 9. Code the optimization

// 10. Test, space and time

// 11. Ask the interviewer if okay