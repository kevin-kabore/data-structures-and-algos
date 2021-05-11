/**
 * Given a string s containing just the characters 
 * '(', ')', '{', '}', '[' and ']', determine if 
 * the input string is valid. 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 
 */

// Key Points:
// What makes the parentheses valid? What cases are valid vs invalid?
// - order is important (stack or queue)
//      - brackets must close before new ones are opened
//      - includes parentheses, brackets, square brackets
// - encountered right brackets should match the latest entered left bracket
//      - pop them out and compare
//      - since it's the latest, a stack makes logical sense LIFO

// 1. Verify constraints
// Q: Do empty strings count as valid strings?
// A: Yes, return true if the string is empty

// 2. Test cases
// - Best case
// Input: '{[()]}'
// Outpur: true

// - Incorrect cases
// not enough closing
// Input: '{[(]}'
// Output: false
// non matching
// Input: '{[(])}'
// Output: false

// - null case
// Input: '' 
// Output: true

// - less obvious
// Input: '()[]{}'
// Output: true

// 3. Brute force
// Use a stack
// iterate
// if find opening, push to the stack
// if find closing, pop
// if it's not the compelement it's not valid (same order)

// if stack is empty, return true

// 4. Code the Brute force
/**
 * Accepts a string of parens and determines if it is a valid string
 * @param {String} s
 * @returns {Boolean}
 */
const parens = { '{': '}', '(': ')', '[':']'};
let isValidString = function(s) {
    if (!s.length) return true;

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i]; 
        // is a left bracket
        if (parens[char]) { 
            stack.push(char)
        } else { // must be a right bracket
            const leftParen = stack.pop(); // '['
            const correctParen = parens[leftParen];
            if (char !== correctParen) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// 5. Check for errors

// 6. Test 

// 7. Space and time complexity
// time: O(N)
// space: O(N) where N is the length of the string

// 8. Optimize 
// This is the most optimal solution since we noticed we could use a stack

// 9. Code the optimal soultion

// 10. Test again

// 11. Ask the interviewer if this is sufficient

