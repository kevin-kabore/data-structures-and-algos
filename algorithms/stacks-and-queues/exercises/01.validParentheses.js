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
- order is important (stack or queue)
    brackets must close before new ones are opened
- includes parentheses, brackets, square brackets

// 1. Verify constraints
Q: Do empty strings count as valid strings?
A: Yes, return true if the string is empty

// 2. Test cases
- Best case
Input: {[()]}
Outpur: true

// - Incorrect cases
// not enough closing
Input: {[(]}
Output: false
// non matching
Input: {[(])}
Output: false

// - null case
Input: '' 
Output: true

// - less obvious
Input: ()[]{}
Output: true

// 3. Brute force
// Use a stack
iterate
if find opening, push to the stack
if find closing, pop
if it's not the compelement it's not valid (same order)

if stack is empty, return true

// 4. Code the Brute force
/**
 * Accepts a string of parens and determines if it is a valid string
 * @param {String} s
 * @returns {Boolean}
 */
let isValid = function(s) {
    const stack = [];
    const opening = new Set('{[(')
    const matching = { '{': '}', '(': ')', '[':']'};
    for (let i = 0; i < s.length; i++) {
        const char = s[i]; // ']'
        if (opening.has(char)) {
            stack.push(char)
        } else { // closing paren
            const latest = stack.pop(); // '['
            if (char !== matching[latest]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// 5. Check for errors

// 6. Test 

// 7. Space and time complexity


// 8. Optimize 

// 9. Code the optimal soultion

// 10. Test again

// 11. Ask the interviewer if this is sufficient

