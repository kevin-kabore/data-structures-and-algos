/**
 * Given an array of integers representing an elevation map 
 * where the width of each bar is 1, return how much rainwater 
 * can be trapped.
*/

/**
 * Approach
 * Before you start: understand the question, write key points
 * - width/bar = 1
 * - input: Number[] heights
 * - output: Number 
 * 
 * STEP 1: Verify the constraints 
 * Ask your interviewer questions to understand what are 
 * the edge cases, inputs, variables, etc.
 * - Q: Can the edges be used to trap water/ 
 * Do the left and right sides of the graph count as wallk?
 * - A: No. 
 * 
 * - Q: Will there be negative integers?
 * - A: Assume all integers are positive
 * 
 * - Q: Will there always be > 3? 
 * - A: Not guaranteed. // => 0
 * 
 * STEP 2: Test cases. Write out some test cases
 * Ask your interviewer if it's okay to write out some test cases
 * to capture the constraints of the answers to the questions asked in step 1.
 * 1. Best case
 * - input: [4, 0, 4, 0, 4]
 * - output: 8 
 * - explanation: 4 units of water can be trapped at indexes 1 and 3
 * 
 * 2. Null cases
 * -input: []
 * - output: 0
 * 
 * - input: [1,1,1]
 * - output: 0
 * 
 * 3. Less obvious
 *                 2  3     3
 * - input: [0, 4, 2, 1, 5, 2, 5]
 * - output: 8
 * 
 * STEP 3: Brute Force. Figure out a solution without code
 * Think about a working logical solution without the context of code
 * and say it out loud. No need to optimize, just a working solution. 
 * Cover the test cases
 * 
 * We can calculate how much water at each index.
 * water = 0
 * iterate
 *  find max left, max right 
 *  current water = min(maxL, maxR) - currentHeight
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
 * - DS brainstorm
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
 * Brute force
 * computes how much water is trapped in the given
 * elevation map
 * @param {Number[]} heights
 */
let computeTrappedWater = function(heights) {
    if (heights.length < 3) {
        return 0;
    }

    let totalWater = 0;
    for (let p = 0; p < heights.length; p++) {

        let maxR = 0;
        let maxL = 0;
        for (let right = p+1; right < heights.length; right++) {
            maxR = Math.max(maxR, heights[right]);
        }
        for (let left = p-1; left >= 0; left--) {
            maxL = Math.max(maxL, heights[left]);
        }

        const currentWater = Math.min(maxL, maxR) - heights[p];
        if (currentWater >= 0) {
            totalWater += currentWater;   
            
        }
    }
    return totalWater;
} // O(n) time O(1) space

// Best case test
let heights = [4, 0, 4, 0, 4];
console.log(computeTrappedWater(heights)) // => 8

// STEP 8: Optimize brute force
/**
 * Keeping an additional data structure doesn't
 * help us here since have to calculate maxL and maxR
 * for each index. Could we use a two pointer approach?
 * 
 * Can't use two pointer to find walls, but we can use
 * two pointers to keep track of max left and max right
 * - move the smallest inward
 * - also use the smallest value to calculate the currentHeight
 * 
 * total = 0, maxL = 0, maxR = 0;
 * p1 = 0, p2 = h.length - 1
 * iterate while p1 < p2
 * 1. Identify lesser pointer
 * 2. Is this pointer less than or equal to max
 *      yes -> update max on that side
 *      no -> get water for pointer value and add to total
 * 3. Move that pointer inward
 * 4. Repeat for other pointer
 */

// STEP 9: Code the optimal solution
let computeTrappedWater = function(heights) {
    let totalWater = 0, maxLeft = 0, maxRight = 0;
    let left = 0, right = heights.length - 1;
    while (left < right) {
        // 1. Identify lesser pointer
        if (heights[left] <= heights[right]) { // operate on Left
            // 2. Is this pointer less than or equal to max
            if (heights[left] >= maxLeft) {
                // yes -> update max on that side
                maxLeft = heights[left];
            } else {
                // no -> get water for pointer value and add to total
                totalWater += maxLeft - heights[left];
            }
            // 3. Move that pointer inward
            left++;
        // 4. Repeat for other pointer
        } else { 
            if (heights[right] >= maxRight) {
                maxRight = heights[right]
            } else {
                totalWater += maxRight - heights[right];
            }
            right--;
        }
    }

    return totalWater;
}