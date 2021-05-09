/**
 * Given the head of a singly linked list and two integers 
 * left and right where left <= right, reverse the nodes of the list 
 * from position left to position right, and return the reversed list.
 * 
 * Example
 * - Input: head = [1,2,3,4,5], left = 2, right = 4
 * - Output: [1,4,3,2,5]
 * 
 * https://leetcode.com/problems/reverse-linked-list-ii/
 */

// Understand the question, write key points
// get: head, left & right
// left & right = position of the list
// output: reversed list between left and right

// STEP 1: Verify the constraints 
// Q: Do the positions start at 0 or 1? 
// A: 1

// Q: Would we ever have to reverse the entire list? 
// A: Yes

// STEP 2: Test cases. Write out some test cases
// Best case
// - Input: head = [1,2,3,4,5], left = 2, right = 4
// - Output: [1,4,3,2,5]

// Null and single case
// - Input: h = [] left = 1, right = 2
// - Output: []

// - Input: h = [1] left = 1, right = 1
// - Output: [1]

// Low hanging
// - Input: h = [1,2,3], left = 1, 3
// - Output: [3,2,1]

// STEP 3: Brute Force. 
// have to update the pointers of values BEFORE and after left and right
// 1. need nodes: 
// - currentNode = head, positionCounter, and before
// 2. need to find:
// - before = left - 1, will need to point reversedList to right + 1
// - loop while < left to get node before
    // before = currentNode
    // currentNode = currentNode.next
    // currentPos++
// 3. Get tail = currentNode
// 4. loop while currentPos between left and right (inclusive)
    // reverse list:
    // A. get current node
    // B. store next value 
    // C. update next value to list so far
    // D. store current node as list so far
    // E. update current node to be next value of 2.
// 5. set before.next = list so far, tail.next = currentNode (right + 1)
// 6. return head, reversedList if left === 1

// STEP 4: Code the brute force
/**
 * 
 * @param {ListNode} head 
 * @param {Number} left 
 * @param {Number} right 
 */
let reverseBetween = function(head, left, right) {
    if (!head || !head.next) {
        return head;
    }                             
    let currentNode = head, currentPosition = 1;
    let before = head; // make before point to left - 1
    // get and set node at left - 1 as before
    while (currentPosition < left) {
        before = currentNode;
        currentNode = currentNode.next; 
        currentPosition++;
    }
    // set currentNode as tail (will be the new tail of reversed list)
    let reversedList = null, tail = currentNode;
    while (currentPosition >= left && currentPosition <= right) {
        const next = currentNode.next;
        currentNode.next = reversedList; 
        reversedList = currentNode;
        currentNode = next; 
        currentPosition++;
    } 
    
    before.next = reversedList; 
    tail.next = currentNode; // currentNode = right + 1
    
    if (left > 1) {
        return head;
    } else { // edge case: reversed the whole list
        return reversedList; // reversedList always head of reversed list
    }
}

// STEP 5: Errors, check code for errors 

// STEP 6: Test against cases. 

// STEP 7: Time and Space. Analyze time and space complexities
// O(N) time, O(1) space

// STEP 8: Optimize: can we optimize our solution? 

// STEP 9: Code the optimal solution

// STEP 10: Test, time & space. 

// STEP 11: Ask your interviewer if this is sufficient 
