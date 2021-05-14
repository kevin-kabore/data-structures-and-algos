/**
 * Given an array of integers nums sorted in ascending order, 
 * find the starting and ending position of a given target value.
 * 
 * If target is not found in the array, return [-1, -1].
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 
 * Example 1:
 * -  Input: nums = [5,7,7,8,8,10], target = 8
 * -  Output: [3,4]
 */

// Key points
// - sorted array (hint that probably binary search)
// - should be O(logn) search so Binary search since sorted
// - can be duplicates
// - return [-1,-1] if not found

// 1. Verify constraints
// - can expect duplicates
// - return [-1, -1] if nothing is found

// 2. Test cases
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Input: nums = [], target = 0
// Output: [-1,-1]

// 3. Brute force
// We can binary search for a value.
// But there may be dupes of target on left and right 
// so we have to keep continuing to search until we don't find anything:
// - 1. Binary search the array for our target
// - 2. return [-1, -1] if not found
// - 3. keep searching left and right until not found
// - 4. return the last matching index where left and right were found

// 4. Code the brute force
/**
 * Finds and returns the start and end positions of an element in a 
 * sorted array, or [-1,-1] if that element does not exist
 * @param {Array} nums a sorted array
 * @param {Number} target number to find in nums
 * @returns {Array} array of start and end positions
 */
let findRange = function(nums, target) {
    if (!nums.length) {
        return [-1,-1];
    }

    // 1. Binary search the array for our target
    const foundIdx = binarySearch(nums, 0, nums.length - 1, target);
    if (foundIdx === -1) {
        // 2. return [-1, -1] if not found
        return [-1, -1];
    }
    
    // initialize start and end as the foundIdx;
    let start = foundIdx, end = foundIdx;
    let tempStart, tempEnd;
    
    // 3. keep searching left until not found
    while(start !== -1) {
        tempStart = start;
        start = binarySearch(nums, 0, start -1, target);
    }
    // start is now -1, tempStart was the last matching pos
    start = tempStart;

    // 3. keep searching right until not found
    while (end !== -1) {
        tempEnd = end;
        end = binarySearch(nums, end + 1, nums.length - 1, target);
    }
    // end is now -1, tempEnd was the last matching pos
    end = tempEnd;
    
    // 4. return the last matching index where left and right were found
    return [start, end];
}
/**
 * 
 * @param {Array} arr 
 * @param {Number} left leftmost index
 * @param {Number} right rightmost index 
 * @param {Any} target some value to find in the array
 * @returns {Number || -1} an index of the matching position or nothing if not found 
 */
const binarySearch = function(arr, left, right, target) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const val = arr[mid];
        if (target === val) {
            return mid;
        } else if (target < val) {
            // search left
            right = mid - 1;
        } else {
            // search right
            left = mid + 1;
        }
    }
    // not found
    return -1;
}

// 5. Errors

// 6. Test 

// 7. Space and time
// - time: O(logN)
// first search = O(logn)
// left side: O(logn/2) + O(logn/4).... = O(logn)
// right side: O(logn/2) + O(logn/4).... = O(logn)
// 3 * O(logn)

// - space: O(1), no scaling data structures

// 8. Optimize 

// 9. Code the optimization

// 10. Test, space and time

// 11. Ask the interviewer if okay