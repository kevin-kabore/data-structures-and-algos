/**
 * Given an array of integers, return the indices of the two 
 * numbers that add up to a given targer.
 * Ex:
 * - inputs: [1,3,7,9,2], t = 11
 * - output: [3,4] 
 * explanation: 9 + 2 = 11. 9 and 2 are at index = 3 and and 4, respectively. 
*/

// Before you start: understand the question, write key points
/**
 * inputs: 
 * - array: Number[], an array of numbers
 * - target: Number, a number to find a sum of
 * 
 * need: 
 * - what two values add up to targer
 * - return their indeces
 * 
 * output: 
 * - result: Number[], an array of indeces that sum to target
*/

// STEP 1: Verify the constraints 
// Ask your interviewer questions to understand what are 
// the edge cases, inputs, variables, etc.
/**
 * STEP 1: Verify the constraints
 * 
 * Q: Are all the numbers positive, or can they be negative?
 * A: all numbers will be positive
 * 
 * Q: Are there duplicate numbers?
 * A: No, there are no duplicates
 * 
 * Q: Will there always be a solution available?
 * A: No, there may not always be a solution
 * 
 * Q: What do we return if there is no solution?
 * A: Just return null 
 * 
 * Q: Can there be multiple paris that add up to a target? 
 * A: No, only 1 pair of numbers will add up to the given target
*/

// STEP 2: Write out some test cases
// Ask your interviewer if it's okay to write out some test cases
// to capture the constraints of the answers to the questions asked in step 1.
/**
 * STEP 2: Write out some test cases
 * 1. Best case test
 * [1,3,5,9,2], t = 11 => [3.4]
 * 
 * 2. Edge cases
 * - Will there always be a solution available? No.
 * - What do we return if there is no solution? null
 * [1,3,5,9,2], t = 25 => null
 * [], t = 1 => null
 * [5], t = 5 => null
 * 
 * 3. Low hanging fruit
 * [1,9], t = 10 => [0, 1]
*/


// STEP 3: Figure out a solution without code (brute force)
// Think about a working logical solution without the context of code
// and say it out loud. No need to optimize, just a working solution. 
// Cover the test cases
/**
 * STEP 3: Brute force (logical)
 * [1,3,5,9,2], t = 11 => [3,4]
 * check every single possible pair
 * - start with 1, check 1 + 3 = 11?, 1 + 5 = 11?, 1+9, 1+2 => no match
 * - move on to 3, repeat... 
 * Brute force solution: two pointer technique 
 * - p1=nums[i], p2=nums[i+1], difference=target-nums[p1] 
 * - if found return p1, p2
 * iterate, checking return p1,p2
*/

// STEP 4: Write the brute force solution in code
/**
 * finds and returns two indeces in nums
 * that sum to the target or null if none are found
 * @param {array} nums 
 * @param {number} target 
 * @returns {array} [index1, index2]
 */
let findTwoSum = function(nums, target) {
    for (let p1 = 0; p1 < nums.length; p1++) { 
        const numToFind = target - nums[p1];
        for (let p2 = p1+1; p2 < nums.length; p2++) {
            if (nums[p2] === numToFind) {
                return [p1,p2];
            }
        }
    }
    return null; // no solution
}
// STEP 5: double check errors
// syntax, edge cases, closing loops etc...

// STEP 6: Test the code against the test cases
// - best case example, then the null cases
// this is an extensive work through, line by line
// it will take up a majority of the interview, so practice this
/**
 * STEP 6. Test - best case example 
 * nums = [1,3,5,9,2], target = 11
 * findTwoSum([1,3,5,9,2], 11); // => [3,4]
 *  p1 = 0 -> 1 -> 2 -> 3 
 *  ntf = 10 -> 8 -> 6
 *  p2 = 1 -> 2 -> 3 -> 4 -> 5 
 *     = 2 -> 3 -> 4 -> 5 
 *     = 3 -> 4 -> 5 
 *     = 4 -> 5
 *     = 4 
 * return [3,4]
 * 
 * STEP 6. Test - null cases (empty, no result/1 item, low hanging fruit/easy case)
 * nums=[], target = 5
 * fundTwoSum([], 5)
 * returns null, p1 is not less than nums.length = 0
 * 
 * null case
 * nums=[], target = 5
 * fundTwoSum([], 5) // => null;
 * returns null, p1 is not less than nums.length = 0
 * 
 * no solution, 1 item
 * nums=[5], target = 5
 * findTwoSum([5], 5); // => null
 *   p1 = 0
 *   numToFind = 0 (5-5)
 *   p2 = 1;
 *   break, 1 is not less than nums.length = 1
 * 
 * low hanging fruit
 * [1,9], t = 10 => [0, 1]
 * findTwoSum([1,9], 10); // => [0,1]
 *   p1 = 0, 
 *   ntf = 9
 *   p2 = 1
 *  return [0,1]
 */

// STEP 7: Analyze space and time complexity
// time complexity, then space complexity
// time: the number of iterations in the worst case, and/or avg case
// space: memory, size of variables we'll be taking

/**
 * time:
 * - outer for loop of p1: N = numbs.length
 * - inner for loop of p2: N = nums.length
 * - N x N = N^2 or quadratic
 * space:
 * - O(1) only static variables
 */

// STEP 8: Optimize: can we optimize our solution?
// we could keep some data structure of all the differences first - O(n) time and space
// iterate again over all the nums and see if they equal the difference - O(n) time
// => O(n) time and space
/**
 * STEP 8: use a hashmap of differences
 * - iterate over nums
 * - check if the current number is inside the number to find
 *   - return the value of diff[number], current index
 * - add to diff: diff[target-number]: index => {numberToFind: index }
 */

// STEP 9: Code the optimal solution
findTwoSum = function(nums, target) {
    const map = {}; // O(n)
    // iterate
    for (let p = 0; p <nums.length; p++) {
        const currentMapVal = map[nums[p]]; // best practice, readable, and static variable

        if (currentMapVal >= 0) {
            return [currentMapVal, p];
        } else {
            map[target - nums[p]] = p;
        }
    }
    // return null
    return null;
} 

// STEP 10: Repeat step 6 and step 7. 
// - Test the cases again 
// - Analyze the space and time complexity.

// STEP 11: Ask your interviewer if this is sufficient 