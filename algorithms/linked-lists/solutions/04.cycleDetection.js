/**
 * Given a linked list, return the node where the cycle begins.
 * If there is no cycle, return null.
 * 
 * There is a cycle in a linked list if there is some node in the list 
 * that can be reached again by continuously following the next pointer. 
 * Internally, pos is used to denote the index of the node that tail's 
 * next pointer is connected to. Note that pos is not passed as a parameter.
 * 
 * https://leetcode.com/problems/linked-list-cycle-ii/
 */

// Key points
Input: head
output: ListNode that starts the cycle

// 1. Verify constraints

// 2. Test cases

// 3. Brute force
keep a set of seen nodes
visit every node
return the node that is already in the set

time: O(N), space: O(N)
visiting every node: O(n) time
add and has in a set are in O(1)
space would be O(n)
// 4. code the brute force
/**
 * accepts a list and returns a node at which 
 * a cycle is detected if one exists
 * @param {ListNode} head
 * @returns {ListNode | Null}
 */
let detectedCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let seen = new Set();
    let currentNode = head;
    while (currentNode) {
        // cycle detected
        if (seen.has(currentNode)) {
            return currentNode;
        }
        seen.add(currentNode);
        currentNode = currentNode.next;
    }
    return null;
}

// let detectedCycle = function(head) {
//     if (!head || !head.next) {
//         return null;
//     }
//     let seen = new Set();
//     let currentNode = head;
//     while (!seen.has(currentNode)) {
//         // tail
//         if (currentNode.next === null) {
//             return null;
//         }
//         seen.add(currentNode);
//         currentNode = currentNode.next;
//     }
//     return currentNode;
// }

// 5. Errors

// 6. Test

// 7. Space and time

// 8. Optimal approach

// 9. Code the optimal solution

// 10. Test, space and time

// 11. Discuss with interviewer