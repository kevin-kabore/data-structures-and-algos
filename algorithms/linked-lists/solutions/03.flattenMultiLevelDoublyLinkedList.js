/**
 * Given a doubly linked list, list nodes also have 
 * a child property that can point to a separate doubly 
 * linked list in addition to their next and previous properties.
 * These child lists can also have doubly linked lists of their own, and so on.
 * 
 * Return the list as a single flattened doubly linked list. You are 
 * given the head of the first level of the list.
 * 
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */

// Key points
// nodes have props: val, prev, next, and child
// - head doesn't have prev, tail doesn't have next
// - may or may not have a child != null
// - child can point to the head of another doubly linked list
function ListNode(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
}
// flattened list = no child properties != null

// 1. Verify constraints
// Q: Can a linked list have multiple child list nodes?
// A: Yes, every list node can have multiple levels of children
// So any number of nodes can have any level of children

// Q: What do we do with the child properties after flattening?
// A: Set that child property to null 

// 2. Test cases
// Best case: needs to account for all our cases
// ie: multiple levels, two on same level
// Input: 1-2-7-8-9-12
//          |     |
//          3-4-6 10-11
//            |
//            5
// Output: 1-2-3-4-5-6-7-8-9-10-11-12
// null case
// Input: 1
// Output: 1

// Input: null
// Output: null



// 3. Brute force approach
// if no child, move currentNode pointer
// else 
// - find the tail
// - link tail with currentNode.next 
// - if currentNode.next is a node, link it with tail
// - link current and child
//     - link the current node with the child
//     - link child.prev with current 
//     - set child to null


// 4. Code the brute fore
/**
 * flattens a multi-level doubly linked list 
 * and returns the head
 * @param {ListNode} head
 * @returns {ListNode} head
 */
let flatten = function(head) {
    if (!head) return head;
    // get current, keep next
    let current = head;
    // iterate starting at head
    while (current) {
        if (!current.child) {
            current = current.next;
        } else {
            // find the child list's tail
            let tail = current.child;
            while (tail.next) {
                tail = tail.next;
            }
            // merge the tail and next value
            tail.next = current.next;
            // edge case: current is already a tail
            if (current.next !== null) {
                current.next.prev = tail;
            }
            // 2. link current with head of sublist 
            // which will be the current's child property
            current.next = current.child;
            current.child.prev = current;
            current.child = null;
            // current will now have no child, so the loop will keep going
        }
    }
    return head;
}


// 5. Check for erros

// 6. Test using test cases
// Input: 1-2-7-8-9-12
//          |     |
//          3-4-6 10-11
//            |
//            5
// Output: 1-2-3-4-5-6-7-8-9-10-11-12

// 7. Space and time
// iterate through every node,
// iterate again over every node in each subList
// time = O(2N) = O(N):
// - every node will get touched at most twice by currentNode
// space: O(1)

// 8. Optimize, get an optimal solution
// This is the most optimal solution

// 9. Code the optimal solution

// 10. Test, new space and time 

// 11. Validate this is okay with interviewer