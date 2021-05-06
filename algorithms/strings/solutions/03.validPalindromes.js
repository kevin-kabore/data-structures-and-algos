/**
 * Notes on 3 approaches to Palindrome questions
 * - Palindrome: a string that reads the same forwards and backwards
 *      ex: 'aba', 'race car', 'A man, a plan, a canal: Panama'
 * 
 * - Approach #1: two pointers starting at the beginning and end
 *      1. Do some transformation on the strings to remove special chars & spaces
 *      2. left pointer at beginning, right pointer at end
 *      3. Each position must match
 *      4. If len of string is even => pointers end on same char
 *              else if odd => end on two most center chars
 * 
 * - Approach #2: two pointers, both initialized at the center
 *      1. Do some transformation on the strings to remove special chars & spaces
 *      2. If length odd => start on same char
 *          else if even => start on two center chars
 *      3. Move them out comparing each 
 *  
 * - Approach #3:
 *      1. Do some transformation on the strings to remove special chars & spaces
 *      2. Create a copy of the string and reverse it
 *      3. Iterate checking index by index
 */

/**
 * Interview Question: 
 * 
 * Given a string, determine if it is a palindrome, considering
 * only alphanumeric characters and ignoring case sensitivity.
 * 
 * https://leetcode.com/problems/valid-palindrome/
 */

/**
 * Approach
 * Before you start: understand the question, write key points
*/
// palindrome, only alpha numeric

/**
 * STEP 1: Verify the constraints 
 * Ask your interviewer questions to understand what are
 * the edge cases, inputs, variables, etc.
 */
// we know only alpha numeric, ignore case sensitivity

/**
 * STEP 2: Test cases. Write out some test cases
 * Ask your interviewer if it's okay to write out some test cases
 * to capture the constraints of the answers to the questions asked in step 1.
 */
// Best case
// 'aabaa' => true

// Edge cases & null cases
// '' => true
// 'a' => true
// 'abc' => false

// Less obvious
// 'A man, a plan, a canal: Panama' => true

/**
 * STEP 3: Brute Force. 
 * Figure out a solution without code.
 * Think about a working logical solution without the context of code
 * and say it out loud. No need to optimize, just a working solution.
 * Cover the test cases
 */
// - Approach #1: two pointer beginning and end
// 1. transform the input string to remove spaces, special chars, & lowercase it
// 2. two pointers, starting at opposite ends
// 3. Iterate
    // if odd len, until pointers equal
    // else, until reach center two


/**
 * STEP 4: Code the brute force
 */
// Approach #1: 2 pointers from outside
let isValidPalindrome = function(s) {
    // mention you would use regex to pattern match and replace
    // replace anything that isn't alphanumeric with nothing
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // lowercase

    let left = 0, right = s.length - 1;
    while (left < right) { // until they overlap
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
} // O(n) time, O(1) space (replace is in place)

// Approach #2: two pointers starting at mid
isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); 
    // floor because indeces are zero based
    let left = Math.floor(s.length / 2), right = left;
    // if even, move the left p back 1 to point 
    // at other middle value
    if (s.length % 2 === 0) {
        left--;
    }

    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) {
            return false;
        }
        left--;
        right++;
    }
    return true;
} // O(n) time, O(1) space (replace is in place)

// Approach #3: copy and reverse
isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); 
    // can use an array or reverse in place
    let reversedS = '';
    for (let i = s.length -1; i >= 0; i--) {
        reversedS += s[i];
    }

    return reversedS = s;
} // O(n) time and space for the reversed s

/**
 * STEP 5: Errors. 
 * Double check for errors
 * syntax, edge cases, closing loops etc...
 */

/**
 * STEP 6: Test. 
 * Test the code against the test cases
 */


/**
 * STEP 7: Time and Space. 
 * Analyze space and time complexity.
 */

/**
 * STEP 8: Optimize: can we optimize our solution? 
 */

/**
 * STEP 9: Code the optimal solution
 */

/**
 * STEP 10: Repeat step 6 and step 7. 
 * - Test again 
 * - Time and space complexities
 */

/**
 * STEP 11: Ask your interviewer if this is sufficient 
 */