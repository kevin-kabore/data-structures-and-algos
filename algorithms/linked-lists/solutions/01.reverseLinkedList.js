/**
 * Given a linked list, return it in reverse
 */

// Understand the question, write key points
// - we will be given the head property
// - we'll have access to the next and next.next
// - key insight is that we'll have to make sure
//      our solution can do the right thing repeatedly
// - repeatedly switch the pointers in out LL
// Input:  1 -> 2 -> 3 -> 4 -> 5 -> null
// Output: null <- 1 <- 2 <- 3 <- 4 <- 5



// STEP 1: Verify the constraints
// - Q: what do we return if we receive a single node
//      or a null node?
// - A: return the node or null

// STEP 2: Test cases. Write out some test cases
// - Best case
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> null

// - Null cases
// Input: null
// Output: null
// Input: 1
// Output: 1

// STEP 3: Brute Force.
// two pointers first and second
// iterate while there's a next value
    // - get next of second
    // - swap the pointers of first and second 
    // at each iteration (make second point to first)
// make the head = first node 


// STEP 4: Code the brute force
let reverseLinkedList = function(head) {
    // null case, single case
    if (!head.next) {
        return head;
    }
    let first = head;
    let second = head.next;
    head.next = null;
    while (second) {  
        const next = second.next;
        second.next = first; 
        first = second; 
        second = next;
    }
    // first is now the last value visited
    return first;
}
// STEP 5: Errors, check code for errors 

// STEP 6: Test against cases. 
// f = first, s = second, n = next
// f    s    n
// 1 -> 2 -> 3 -> 4 -> 5 
//      f    s    n 
// 1 <- 2    3 -> 4 -> 5 
//           f    s    n
// 1 <- 2 <- 3    4 -> 5
//                f    s   n = null
// 1 <- 2 <- 3 <- 4    5
//                     f   s = null, n = null
// 1 <- 2 <- 3 <- 4 <- 5
// head = first => h = 5

// STEP 7: Time and Space. Analyze time and space complexities
// O(n) time, O(1) space

// STEP 8: Optimize: can we optimize our solution? 
// No, this is the best we can do since we have to
// touch every node to reverse the list
// but we can clean up our approach:
// - have a previous = null that will build up the list
// - start current = head
// while current
// - next = current.next
// - current.next = prev
// - prev = current 
// - current = next;

// STEP 9: Code the optimal solution
reverseLinkedList = function(head) {
    if (!head.next) {
        return head;
    }

    let prev = null, current = head;
    while(current) { // p = 5 -> 4 -> 3 -> 2 -> 1 -> null, c = null
        const next = current.next; // n = null
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev
}

// STEP 10: Test, time & space. 
// input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// p = null, c = 1
// p = 1 -> null, c = 2
// p = 2 -> 1 -> null, c = 3
// p = 3 -> 2 -> 1 -> null, c = 4
// p = 4 -> 3 -> 2 -> 1 -> null, c = 5
// p = 5 -> 4 -> 3 -> 2 -> 1 -> null, c = null
// current is null, done. return p
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> null

// STEP 11: Ask your interviewer if this is sufficient 