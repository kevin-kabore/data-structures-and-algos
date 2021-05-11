/**
 * Given a string s of '(' , ')' and lowercase English characters. 
 * 
 * Your task is to remove the minimum number of parentheses 
 * ( '(' or ')', in any positions ) so that the resulting parentheses 
 * string is valid and return any valid string.
 * 
 * Formally, a parentheses string is valid if and only if:
 * - It is the empty string, contains only lowercase characters, or
 * - It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * - It can be written as (A), where A is a valid string.
 *
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 */

// Key points
// need to
// remove the min correct opening or closing paren
// - order matters

// Empty is valid, so we may remove over and over again until valid

// 1. Verify the constraints:
// - What do we return?
// Return a valid string with the fewest brackets removed

// - Will there be spaces in the string? 
// No, only lowecase chars and '(' and ')'

// - Is a string with no brackets valid?
// Yes, s with no ( or ) is valid

// 2. Test cases
// - best case
// "a)bc(d)" => "abc(d)"

// - edge cases
// remove either or
// "a(b(c)d" => "ab(c)d" | "a(bc)d"

// brackets that will never close 
// "))((" => ""

// - null case
// '' => true

// 3. Brute force
// need to know the positions
// what does encountering a closing paren tell us?
// - there is a potential closing paren ahead
// what about an open paren?
// - if there is a closed paren at the top of the stack, 
// we know it has a match, can remove and move on
// - if no closed paren, means it needs to be deleted

// split into array
// iterate left to right
// if closed, push it into a stack
// if opening, if nothing in stack, delete it from s
// else pop from stack 

// if no length, return array joined
// else replace every index with '' and then join

// 4. Code the brute force
/**
 * Accepts a string, removes min number of parens 
 * to return a valid string
 * @param {String} s 
 * @returns {String}
 */
let minRemoveToMakeValid = function(s) {
    if (!s.length) return s;
    const result = s.split('');
    // keep a stack of opens
    let stack = [];
    // store the opening parens
    for (let i = 0; i < result.length; i++) {
        let char = result[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')' && stack.length)  {
            stack.pop();
        } else if (char === ')'){ // no closing parens in stack
            result[i] = '';
        }
    }
    
    // is not valid string
    while(stack.length) {
        const index = stack.pop();
        result[index] = '';
    }

    return result.join('');
}

// 5. Check for errors

// 6. Test

// 7. Space and time
// - space: O(N) split, stack O(N) worst case = O(2N)
// => O(N) space, drop constants
// - time: O(N) split, O(N) iterations, O(N) while loop in worst case, O(N) join

// 8. Optimize

// 9. Code the optimal solution

// 10. Test again, space and time

// 11. Ask if optimal