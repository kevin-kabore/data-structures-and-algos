/**
 * Count Complete Tree Nodes
 * 
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 * 
 * According to Wikipedia, every level, except possibly the last, is completely filled 
 * in a complete binary tree, and all nodes in the last level are as far left as possible. 
 * It can have between 1 and 2h nodes inclusive at the last level h.
 * 
 * Design an algorithm that runs in less than O(n) time complexity.
 * 
 * https://leetcode.com/problems/count-complete-tree-nodes/
 */

// Key points
// - complete tree 
    // Filled at every level except for the last
    // Filled left to right
// - bottom could be full or 1, but left to right
// - 1 - 2h nodes on last lvl


// 1. Verify Constraints

// 2. Test cases

// 3. Brute force
// - we can do a bfs or dfs but will be O(N) time and space
// - properties of complete binary trees:
    // 1. O(height) = O(logN)
    // 2. # of nodes at any lvl for complete tree = 2^(height)
        // height is 0 based. 2^0 = 1
    // 3. # nodes on bottom level = half of all nodes
        // or All OTHER nodes = 2^height-1 


// Approach: 
// 1. find height of the tree = O(h) = O(logN)
// 2. count nodes above last level using height
    // equal to: # nodes at last level - 1 (2^height-1)
        // lvl1 = (2^1)-1 = 1
        // lvl2 = 2^2 -1 = 3
        // lvl3 = 2^3 -1 = 7
    // - # of nodes at lvl for complete tree = 2^(height-1) 
        // 2^0=1, 2^1=2, 2^2=4, 2^3=8
// 3. figure out how many nodes are on last level
    // - min = 1
    // - max = 2^(h-1) so root lvl = 2^(1-1) = 2^0 = 1 node on root lvl
    // A. Figure out an effective/efficient way to find the rightmost node
        // - Binary search is the only O(logN) search
            // 1. use the indeces at last lvl as values to compare
            // 2. Take mid = Math.ceil(left=0, right=2^(h-1)-1)
                // we ceil because we're checking inclusively on the right
                // with floor, we are checking inclusively on the left
            // 3. traverse: does node exist at that index?
                // A. yes => move left p to mid (all vals left including mid exist)
                // B. no => move right p to mid -1 (all vals right including mid do not exist)
                // C. When left and right equal, that is the right most val
    // B. Which path to take to get to the right most node
        // - mid of the binary search can tell us where to move at every step
            // nodes accessible = left to right at each step
        // - if val >= mid and because rounding up, going right
            // - if val >= mid and because rounding up, going right
            // nodes accessible

// binary search 
// 1. Divide/conquer while left
// 2. 

// 4. Code the brute force
/**
 * returns the height of a complete binary tree, starting at 0
 * @param {TreeNode} root 
 * @returns {Number}
 */
 const getHeight = function(root) {
    let height = 0;
    while(root.left) { // root.left !== null
        height++;
        root = root.left;
    }
    return height;
}

const countCompleteTreeNodes = function(root) {
    if (!root) return 0;

    // 1. find height of the tree
    const height = getHeight(root); // start from 0 at lvl 1 
    
    // 2^0 = 1 node at level 1
    if (height === 0) return 1;

    // 2. count nodes above last level 
    const topNodeCount = Math.pow(2, height) - 1; // all other nodes = 2^(h) - 1

    // 3. figure out how many nodes are on last level
    let left = 0;
    let right = topNodeCount; // 2^height - 1

    // binaray search to find the last node that exists
    while (left < right) {
        // idx of node, to see if it exists
        const idxToFind = Math.ceil((left + right) / 2); // ceil b/c inclusive

        // does node exist at idxToFind index
        const nodeExists = doesNodeExist(idxToFind, height, root);
        if (nodeExists) {
            left = idxToFind; // inclusive: all to left also exist
        } else {
            right = idxToFind-1; // all to the right including idx do not exist 
        }
    }
    // left = right: final right most node idx that exists
    return topNodeCount + left + 1; // +1 b/c indeces are 0 bases
}

const doesNodeExist = function(idxToFind, height, node) {
    let left = 0, right = Math.pow(2, height) -1; // 0 based indeces
    let stepsDown = 0; // steps down we make through tree 
    
    // end when steps = height
    while (stepsDown < height) {
        const midOfNodes = Math.ceil((left + right)/2);
        if (idxToFind >= midOfNodes) {
            node = node.right; // traverse right
            left = midOfNodes; // shift pointer
        } else {
            node = node.left; // traverse left
            right = midOfNodes - 1; // shift pointer
        }
        // increment steps
        stepsDown++;
    }

    return node !== null;
}
// 5. Check for errors

// 6. Test

// 7. Space and time
// time: O(h) + (O(logN)/O(h) * O(h)) = O(h + h^2) = O(logN + log^2(N)) = O(log^2N)
// - getHeight: O(depth) = O(height) = O(logN) 
    // where N is potential nodes in the tree
// - while (left < right): O(logN/2) = O(logN)
    // N/2 potential nodes on the last lvl
    // log(N/2): binary search
    // - nodeExists: O(h)
        // goes from root all the way down, 1 step each lvl
// space: O(1)
// O(log^2(N)) is better than O(N)

// 8. Optimize
// This is the optimal solution. Brute force was DFS or BFS which were O(N) time and space

// 9. Code the optimal solution

// 10. Test, space and time

// 11. Ask the interviewer if ok
