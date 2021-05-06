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
 * Question: 
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

/**
 * STEP 1: Verify the constraints 
 * Ask your interviewer questions to understand what are
 * the edge cases, inputs, variables, etc.
 */



/**
 * STEP 2: Test cases. Write out some test cases
 * Ask your interviewer if it's okay to write out some test cases
 * to capture the constraints of the answers to the questions asked in step 1.
 */
// Best case

// Edge cases

// Less obvious


/**
 * STEP 3: Brute Force. 
 * Figure out a solution without code.
 * Think about a working logical solution without the context of code
 * and say it out loud. No need to optimize, just a working solution.
 * Cover the test cases
 */

/**
 * STEP 4: Code the brute force
 */

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