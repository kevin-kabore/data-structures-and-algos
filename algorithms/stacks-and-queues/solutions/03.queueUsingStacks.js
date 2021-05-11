/**
 * Implement a first in first out (FIFO) queue using only two stacks.
 * The implemented queue should support all the functions of a normal queue 
 * (push, peek, pop, and empty).
 * 
 * Implement the MyQueue class:
 * - void push(int x) Pushes element x to the back of the queue.
 * - int pop() Removes the element from the front of the queue and returns it.
 * - int peek() Returns the element at the front of the queue.
 * - boolean empty() Returns true if the queue is empty, false otherwise.
 * 
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

// Key points
// - queue: FIFO, stack: LIFO, can use two
// - only way to get order is to pop from a stack that has the reverse order
// - need to implement a class w/ methods: push, pop, peek, empty

// 1. Verify constraints
// Q: What do we return from an empty pop or peek? 
// A: Return null

// Q: Do the queue methods we implement need to perform at the same
// time and space complexities of a real queue?
// A: No, but they should be as performant as possible

// 2. Test cases
// - best case
// push(1) => q: [1]
// push(2) => q: [1,2]
// peek()  => 1
// push(3) => q: [1,2,3]
// pop()   => 1, q: [2,3]
// peek()  => 3
// empty() => false
// pop()   => 2, q: [3]
// peek()  => 3 
// pop()   => 3
// empty() => true

// 3. Brute force approach
// need a stack to keep the reverse order for pop. 
// - push: always push to in
// - pop: always pop from second stack out, unless empty
        // if out is empty
        // reverse the order from in into out
    // pop the top value of out 

// push: push to in
// pop
//     - pop from in if nothing in out
//     - else 
//         - repeatedly pop in, push to out
//         - pop from out, this will be the "first" in FIFO 
//             since it is at the bottom of "in"
// peek 
//     - if in.len, get value from in
//     - else it is value at top of the "out" stack
// empty: in and out have length 0

// 4. Code the brute force
class MyQueue {
    constructor() {
        this.in = [];
        this.out = [];
    }
    // enqueue
    push(x) {
        this.in.push(x)
    } // O(1) time

    // dequeue
    pop() {
        if (!this.out.length) {
            // reverse everything inside in stack
            while (this.in.length) {
                this.out.push(this.in.pop())
            }
        }
        // last of out is now first
        return this.out.pop();
    } // O(n) time 

    peek() {
        if (this.out.length) {
            return this.out[this.out.length -1]
        }
        return this.in[0];
    } // O(1) time
 
    empty() {
        return !this.in.length && !this.out.length;
    } // O(1) time
}
// 5. Check for errors

// 6. Test 

// 7. Space and time
// space: O(n) for the whole queue
// time:
    // - push: O(1)
    // - pop: O(n)
    // - peek: O(1)
    // - empty: O(1)

// 8. Optimize
// This is an optimal solution

// 9. Code the optimal solution

// 10. Test, space and time

// 11. Ask the interviewer if this is okay