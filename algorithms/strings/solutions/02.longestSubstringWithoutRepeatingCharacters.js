/**
 * Given a string, find the length of the longest
 * substring without repeating characters.
 * 
 * Example: 
 * - Input: abccabb 
 * - Output: 3
 * - Explanation: "abc" and "cab" are the longest substrings
 *  with 3 unique characters each
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * Approach
 * Before you start: understand the question, write key points
*/

/**
 * STEP 1: Verify the constraints 
 * Ask your interviewer questions to understand what are
 * the edge cases, inputs, variables, etc.
 * 
 * Very important and common for string questions
 * Q: Is the substring contiguous?
 * A: Yes look for a substring not a subsequence
 *  - Contiguous: characters are sequential with no breaks.
 *      neighboring, beside one another
 *  - Substring: characters do not have any breaks between them
 *      sequential and side by side, therefore contiguous
 *      ex: "abc" in abcbbd
 *  - Subsequence: Can have breaks between them. Not contiguous
 *      ex: abcd in abcbbd is a subsequence but not a substring
 * 
 * Q: Does case sensitivity matter?
 * A: No, assume all the characters in the string are lowercase
 * 
 */


/**
 * STEP 2: Test cases. Write out some test cases
 * Ask your interviewer if it's okay to write out some test cases
 * to capture the constraints of the answers to the questions asked in step 1.
 */
// Best case
// Input: 'abccabb'
// Output: 3, abc and cab 

// Edge cases
// Input: 'abcadebc'
// Output: 5, cadeb

// null case
// Input: ""
// Output: 0

// low hanging fruit
// Input: aaaaaaa
// Output: 1


// Less obvious ex overlap
// Input: 'abcabd'
// Output: 4, cabd, which overlaps the c from the first non-repeating substring



/**
 * STEP 3: Brute Force. 
 * Figure out a solution without code.
 * Think about a working logical solution without the context of code
 * and say it out loud. No need to optimize, just a working solution.
 * Cover the test cases
 */
// brute force
// loop over the string, storing each character 
// in some struct while it doesn't exist
// if it does we update the count of longest substring
// to be max(longest, len of struct)
// reset the struct and keep iterating until we reach the end
/**
 * NOTE: The above doesn't work because we are only checking
 * substring after the one we have seen and missing some overlaps
 * We have to check every possible substring. 
 */


/**
 * STEP 4: Code the brute force
 * (DOES NOT WORK)
 */
let lengthOfLongestSubstring = function(string) {
    let longest = 0; 
    let cache = {};
    
    let p = 0;
    while (p < string.length) { 
        if (string[p] == ' ' || string[p] == " ") {
            p++;
            continue;
        }

        if (!cache[string[p]]) { 
            cache[string[p]] = 1;
            p++;
        } else {
            // already exists
            longest = Math.max(longest, Object.keys(cache).length);
            cache = {};
            cache[string[p]] = 1;
            p++;
        }
    }

    return Math.max(longest, Object.keys(cache).length);
}

let testString = 'abccabb';
lengthOfLongestSubstring(testString); // => 3
testString = 'abcadebc';
lengthOfLongestSubstring(testString); // 5
testString = '';
lengthOfLongestSubstring(testString);
testString = 'aaaaaaa';
lengthOfLongestSubstring(testString);

/**
 * Working brute force:
 * generate every possible substring and keep track of
 * longest
 * iterate pointer left
 *  keep track of unique chars
 *  iterate pointer right = left
 *    keep track of currentLen and char
 *    if not in unique char, add, increment len, update longest
 *    else break out of the loop
 */
let lengthOfLongestSubstring = function(string) {
    if (s.length <= 1) return s.length
    let longest = 0; 
    for (let left = 0; left < string.length; left++) {
        const uniqueChars = {};
        for (let right = left; right < string.length; right++) {
            const currentChar = string[right];
            let currentLength = 0;
            if(!uniqueChars[currentChar]) {
                uniqueChars[currentChar] = true;
                currentLength++;
                longest = Math.max(longest, currentLength);
            } else {
                break;
            }
        }
    }
    return longest;
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
// Best case
// Input: 'abccabb'
// Output: 

// Edge cases
// null case
// Input: ""
// Output: 0

// low hanging fruit
// Input: aaaaaaa
// Output: 1

/**
 * STEP 7: Time and Space. 
 * Analyze space and time complexity.
 */
// time: O(n^2)
// space: O(n)

/**
 * STEP 8: Optimize: can we optimize our solution?
 * 
 * HINT #1: Use a sliding window to represent the current substring.
 * 
 * HINT #2: The size of the window will change based on new characters,
 * and characters we've seen before.
 * 
 * HINT #3: Our seen characters hashmap keeps track of what characters 
 * we've seen, and the index we saw them at
 * 
 * 
 * Sliding Window Pattern:
 * Form a window over some portion of sequential data,
 * then move that window throughout the data to capture 
 * different parts of it.
 * 
 * 
 */
// inefficiencies in that we are not reusing any overlapping elements 
// when we restart the calculation after re-encountering a character
// we can change our solution to utlize a sliding window
// adding new indeces and characters to our hashmap and increasing our window
// reusing the values in our hashmap for seen chars, and resetting our window

let lengthOfLongestSubstring = function(string) {
    if (string.length <= 1) return string.length;
    
    let seen = {};
    let windowStart = 0;
    let longest = 0;

    for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
        const currentChar = string[windowEnd];

        const prevSeenIndex = seen[currentChar];
        // seen index is in current window
        if (prevSeenIndex > windowStart) { 
            // update window start 
            windowStart = prevSeenIndex + 1;
        }

        seen[currentChar] = windowEnd;
        longest = Math.max(longest, windowEnd - windowStart + 1); // inclusive

    }
    return longest;
}

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