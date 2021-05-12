/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * 
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

// Key points
// kth largest val not index can be reached from the right side
// sorted order matters, but not distinct (great for us)

// 1. Verify the constraints
// Q: will k ever be greater than our array?
// A: No

// 2. Test cases 
// [5,4,3,2,1], k = 2 => [1,2,3,4,5] result = 4, it is the second largest
// [4,3,2,2,1], k = 4 => [1,2,2,3,4] result = 2, no need to be distinct
// [1], k = 1 => 1

// 3. Brute force
// sort the array, get val at k largest index
// - sort is Object(nlogn)
// - maybe we can optimize for space with quickSort? 
// we can pick the k largest index as pivot
// get that value by partitioning on that index

// 4. Code the brute force
/**
 * 
 * @param {Array} array of numbers
 * @param {Number} k largest index of value to return
 * @returns value at kth largest index
 */
 [5,4,3,2,1] , k = 2
const findKthLargest = function(nums, k) {
    // quick sort it, return value at target
    const targetIdx = nums.length - k;
    quickSort(nums, 0, nums.length -1);
    return nums[targetIdx]
}

function quickSort(arr, leftIdx, rightIdx) {
    let pivotIdx;
    let partitionIdx;
    if (leftIdx < rightIdx) {
        pivotIdx = rightIdx;
        partitionIdx = partition(arr, pivotIdx, leftIdx, rightIdx);
        quickSort(arr, leftIdx, partitionIdx -1);
        quickSort(arr, partitionIdx + 1, rightIdx);
    }
    
    return arr;
}
function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIdx = left;
    for(let j = left; j < right; j++) {
        if (array[j] < pivotValue) {
            // swap current with partitionIdx pointer
            swap(array, j, partitionIdx);
            partitionIdx++;
        }
    }
    // finally swap the partitionIdx and pivot (which we passed rightIdx as)
    swap(array, partitionIdx, pivot);
    return partitionIdx;
}

function swap(array, idx1, idx2) {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}
// 5. Check for errors

// 6. Test

// 7. Space and time
// time: O(nlogn) best avg. O(n^2) in worst case
// - n iterations for our partition
// - log n because we're dividing our array each step
// - n^2 worst case if we pick the smallest or largest as pivot
// space: O(logn)
// - logn is the space of the recursive calls
// it is logn because we are dividing by teo on each call to partition


// 8. Optimize
// Hoare's QuickSelect algorithm
// - finds the kth SMALLEST element in in an unordered list
// - our kth largest is also our the (length - k) smallest element
// quickSelect:
// - pick a pivot
// - find a partitionIdx using the pivot
// - recurse on correct split until equal to tartgetIdx
//      - if partitionIdx < targetIdx, right
//      - if partitionIdx > targetIdx, right

// 9. Code the optimal solution
const findKthLargest = function(nums, k) {
    const targetIdx = nums.length - k;
    quickSelect(nums, 0, nums.length - 1, targetIdx);
    return nums[targetIdx];
}
function quickSelect(array, left, right, targetIdx) {
    let pivot, partitionIdx;
    if (left < right) {
        pivot = right;
        partitionIdx = partition(array, pivot, left, right);
        if (partitionIdx === targetIdx) {
            return array[partitionIdx]
        } else if (targetIdx < partitionIdx) {
            // left side
           return quickSelect(array, left, partitionIdx - 1, targetIdx);
        } else { 
            // right side
            return quickSelect(array, partitionIdx + 1, right, targetIdx);
        }
    }
}

// 10. Test, space and time
// time: O(N) best case avg case, O(N^2) worst case
// - partition: O(N)
// - recursive on only ONE branch is O(2N) => O(N)
// - we return and don't have to wait for both branches to sort
// space: O(1)
// - returning the recursive function is tail call recursion
// - Since we don't have to wait for the call stack, this is O(1)
// but depends on browser implementation

// 11. Ask the interviewer if done
