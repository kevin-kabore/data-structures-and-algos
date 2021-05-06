/**
 * Given a string s, return true if the s can be palindrome 
 * after deleting at most one character from it
 * 
 * https://leetcode.com/problems/valid-palindrome-ii/
 */
/**
 * Approach
 * Before you start: understand the question, write key points
*/

// can delete at MOST 1, generating two different strings
// - have to decide which char to delete, or check both
// - could be non matching after correct removal 

/**
 * STEP 1: Verify the constraints 
 * Ask your interviewer questions to understand what are
 * the edge cases, inputs, variables, etc.
 */
// Q: Is a palindrome an almost palindrome?
// A: Yes return true if a string is almost a palindrome

/**
 * STEP 2: Test cases. Write out some test cases
 * Ask your interviewer if it's okay to write out some test cases
 * to capture the constraints of the answers to the questions asked in step 1.
 */
// Best case
// remove c or d
// 'abcdba' => true

// remove one correct character 
// 'abccdba' => true, if we remove the leftmost d

// Fail case
// 'abcdecdba' => false
// c !== d, remove right most d => abcdecba 
// d !== e and cannot remove more than one.

// Edge cases

// '' => true
// 'a' => true 

// low hanging fruit
// 'ab' => true, already a palindrome


// Less obvious


/**
 * STEP 3: Brute Force. 
 * Figure out a solution without code.
 * Think about a working logical solution without the context of code
 * and say it out loud. No need to optimize, just a working solution.
 * Cover the test cases
 */
// we can check if the string is a palindrome
// iteratively with a left and right character
// when we encounter non-matching chars,
    // generate both substrings & return true
    // if either substring is a palindrome 
    // (use a helper that accepts both pointers)
    // or false if neither is a palindrome

/**
 * STEP 4: Code the brute force
 */

let isAlmostPalindrome = function(s) {
    // format the string
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    if (s.length <= 1) {
        return true;
    }

    let left = 0, right = s.length -1;
    while(left < right) {
        if (s[left] !== s[right]) {
            return (
                isPalindrome(s, left, right - 1)  // skip rightmost
                || isPalindrome(s, left +1, right) // skip leftmost
            )
        }
        
        left++;
        right--;
    }

    return true;
} 

const isPalindrome = function(s, left, right) {
    while(left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

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
// O(n) time, O(1) space

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