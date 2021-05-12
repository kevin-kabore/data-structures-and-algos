/**
 * Implement the quick sort algorithm recursively. It works as follows:
 *  - sorts in place
 *  - accepts an array, a low and high index
 *  - if low < right:  gets a pivot, partition index 
 *      - pivot is can be right or left
 *      - partitionIdx = result of partitioning the array 
 *          based on the pivot and on two left and right indexes
 *      - partitionining uses a two pointer to compare and swap low with high values
 *      - returns the index last used as the greater index
 *      - this is the index to use as the next high
 *  - recurse on both subarrays using the left, partitioned index and the right index
 * 
 * 
 */
const numbers = [90,2,8,10,12,12,45,32,1,6,23,5];
/**
 * quick sort sorts an array using a pivot value to divide and conquer
 * @param {Array} array 
 * @param {Number} left 
 * @param {Number} right 
 * @returns sorted array
 */
const quickSort = function(array, left, right) {
   

    return array;
}

/**
 * places the pivotValue at its correct index and returns that index
 * @param {Array} array to be sorted
 * @param {*} pivotIdx 
 * @param {*} leftIdx 
 * @param {*} rightIdx 
 * @returns pivotIdx when array is sorted array
 */
const partition = function(array, pivotIdx, leftIdx, rightIdx) {
    
}

const swap = function(array, index1, index2) {

}
