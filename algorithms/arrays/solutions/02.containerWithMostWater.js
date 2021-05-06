/**
 * You are given an array of positive integers where 
 * each integer represents the height of a vertical line
 * on a chart. Find two lines which together with the
 * x-axis forms a container that would hold the greatest 
 * amount of water. Return the area of water it would hold.
*/

/**
 * Approach
 * Before you start: understand the question, write key points
 * - input: Number[], positive integers
 * - need to: find two numbers that max area L x W. 
 * L = max of nums, W = diff in position/index
 * - output: Number area = L x W
 * 
 * STEP 1: Verify the constraints 
 * Ask your interviewer questions to understand what are 
 * the edge cases, inputs, variables, etc.
 * 
 * 
 * STEP 2: Test cases. Write out some test cases
 * Ask your interviewer if it's okay to write out some test cases
 * to capture the constraints of the answers to the questions asked in step 1.
 * 
 * STEP 3: Brute Force. Figure out a solution without code
 * Think about a working logical solution without the context of code
 * and say it out loud. No need to optimize, just a working solution. 
 * Cover at least the best case test case.
 * 
 * STEP 4: Code the brute force
 * 
 * STEP 5: Errors. Double check errors
 * syntax, edge cases, closing loops etc...
 * 
 * STEP 6: Test. Test the code against the test cases
 * - best case example
 * - null cases (empty, no result/1 item, low hanging fruit/easy case)
 * 
 * STEP 7: Time and Space. Analyze space and time complexity.
 * 
 * 
 * STEP 8: Optimize: can we optimize our solution? 
 * - BUD: Bottlenecks, Unecessary work, Duplicated work
 * - DS brainstorm, 
 * 7 Optimization techniques:
 * 1. Unused info | 2. Fresh example | 3.Solve incorrectly 
 * 4. Time vs Space | 5. Pre-compute info | 6. Hash table 
 * 7. Best Conceivable runtime
 * 
 * STEP 9: Code the optimal solution
 * 
 * 
 * STEP 10: Repeat step 6 and step 7. 
 * - 6. Test the cases again 
 * - 7. Analyze the space and time complexity.
 * 
 * 
 * STEP 11: Ask your interviewer if this is sufficient 
 * 
 * 
*/

/**
 * Before you start: understand the question, write key points
 * input: 
 * - Number[], positive integers
 * 
 * need to: 
 * - find two numbers that max area L x W. 
 * - L = max of nums, W = diff in position/index
 * 
 * output: Number area = L x W
 */

/**
 * 1. Verify Constraints
 * 
 * Q: Are there any duplicates?
 * A: Yes, there can be duplicates
 * 
 * Q: What do we return if there are two answers?
 * A: Return one of the answers
 * 
 * Q: Will there ever be less than 2 inputs
 * A: Yes, there can be 1 or no inputs 
 * 
 * Q: Will there always be a solution? What should we return if there is no solution?
 * A: No. We can return 0.
 * 
 * * Q: Does the thickness of the lines affect the area?
 * A: No, assume they take no space only the height
 * 
 * * Q: Do the left and right sides of the graph count as walls?
 * A: No the sides cannot be used to form a container
 * 
 * 
 * * Q: Does a higher line inside the container affect the area?
 * A: No, they do not affect the area
 * 
*/

/* 
 * 2. Test cases
 * - Best test case
 * input: heights = [6,4,5,3,7]
 * output: 24, 6 x 4 = 24 6 and 7 are the greatest and furthest
 * 
 * - Edge cases
 * Input: heights = [] // empty case
 * Output: 0
 * 
 * Input: heights = [1] // no solution
 * Output: 0
 * 
 * - Less obvious
 * Input: heights = [5,9,2,4,5,8] 5 x 5 = 25, 4 x 8 = 32
 * Output: 5, 5 x 1 
 */

/**
 * 3. Brute force
 * since looking for greatest area, we could naively 
 * check every pair, calculate each area and keep track of the highest
 * Can use a two pointer approach where
 * area = l x w => min(h[p1], h[p2]) x (p2 - p1)
 * - two pointer approach:
 * iterate p1 = 0, < len
 *  iterate p2 = p1+ 1, < len
 *      calc maxArea 
 * 
 * return maxArea
 * 
 * input: heights = [6,4,5,3,7]
 * max = 10;
 * // iterate
 *  min = 6
 *  w = 4 - 1 = 3, 
 *  a = 18 
 *  a > max?
 */

// Step 4. Code the brute force 
let heights = [6,4,5,3,7];
const getMaxWaterContainer = function(heights) {
    let maxArea = 0;
    for (let p1 = 0; p1 < heights.length; p1++) {
        for (let p2 = p1 + 1; p2 < heights.length; p2++) {
            const minHeight = Math.min(heights[p1], heights[p2]);
            const width = p2 - p1;
            const area = minHeight * width;

            maxArea = Math.max(maxArea, area)
        }
    }

    return maxArea;
} // O(n^2)

// STEP 5: Errors. Double check errors. Syntax, line by line
console.log(getMaxWaterContainer(heights));

// STEP 6: Test the edge cases
// getMaxWaterContainer([]) => return 0
// getMaxWaterContainer([1]) => return 0
// getMaxWaterContainer([5,9,2,4,5,8]) => return 32
// p1= 6, // 5 !< 6 end
//  
// minH = min(5,8)
// w = 1
// a = minH x w = 5 x 1 = 5
// max = 32
console.log(getMaxWaterContainer([5,9,2,4,5,8])) // => 32

// STEP 7: Time and Space. Analyze space and time complexity.
// time: O(n^2), double for loops
// space: O(1), only static variables

// STEP 8: Optimize the brute force
// - space vs time tradeoff technique? aka caching?
// first loop? No, can't cache the first for loop.
// we're depended on p1 and p2 for the value
// second loop? No. We calculate and immediately update. No need to cache.
// 
// we know that Area = min(a,b) x (p2 - p1)
// Area can only increase if min(a,b) increases, and we try to max width
// we can use a "Two shifting pointers approach"
// p1 at 0, p2 at h.lengths - 1 (max width)
// while (p1 !== p2)
// calc area
// if h[p1] < h[2], p1++ else p2--
// O(n)

// STEP 9: Code the optimal solution
const getMaxWaterContainer = function(heights) {
    let p1 = 0, p2 = heights.length -1, maxArea = 0;
    
    while (p1 < p2) {
        const height = Math.min(heights[p1], heights[p2])
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
        if (heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return maxArea;
} // O(n) time, O(1) space

// STEP 10: test again, analyze time and space 