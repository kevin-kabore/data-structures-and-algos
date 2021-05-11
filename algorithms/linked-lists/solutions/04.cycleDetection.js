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
// Input: head
// output: ListNode that starts the cycle

// 1. Verify constraints

// 2. Test cases

// 3. Brute force
// keep a set of seen nodes
// visit every node
// return the node that is already in the set

// time: O(N), space: O(N)
// visiting every node: O(n) time
// add and has in a set are in O(1)
// space would be O(n)
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
// time: O(N), space: O(N)

// 8. Optimal approach
// Fast and Slow pointer (Floyd's Tortoise and Hare algorithm)
// we start a fast and a slow pointer at the head
// - move slow and fast +1
// - check if fast is or will be tail
//     return null if tail
// - else move fast +1 more
// - break if they are equal, cycle detected
// - start new pointer at head, slow at slow
// - iterate by one until they meet
// return new meeting point as cycle node

// 9. Code the optimal solution
let detectedCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let slow = head, fast = head;
    while (true) {
        // move slow and fast +1
        slow = slow.next;
        fast = fast.next; 
        // check if fast is or will be tail
        if (fast === null || fast.next === null) {
            return null;
        } else { // move fast +1 more
            fast = fast.next;
        }
        // break if they are equal, cycle detected
        if (fast === slow) break;
    }
    // start pointer at head
    let p1 = head;
    // iterate by one until they meet
    while (p1 !== slow) {
        p1 = p1.next;
        slow = slow.next
    }
    return p1;
}

// 10. Test, space and time
// time: O(N), slow pointer will never loop
// space: O(1)

// 11. Discuss with interviewer