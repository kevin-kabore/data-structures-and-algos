/**
 * Implement the quick sort algorithm recursively. It works as follows:
 *  - sorts in place
 *  - picks a pivot idx (can be always right most idx)
 *  - partitions: figures out its correct position
 *      - start i and j on left, while j < right idx
 *      - if val at j < pivotVal
 *          - swap i and j
 *          - increment i
 *             p
 *      - increment j
 *  
 *      [5,2,4,3]  5 < 3? no, increment j
 *       i
 *       j-> 
 *             p                                                 p
 *      [5,2,4,3] 2 < 3 yes, swap 5 and 2, increment i => [2,5,4,3]
 *       i                                                   i   
 *         j                                                   j
 * - swap i and partition index
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
    let pivot, partitionIndex;
    if (left < right) {
        // picks right as pivot
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
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
    const pivotValue = array[pivotIdx];
    // will be the idx we know is at the correct position
    let partitionIdx = leftIdx; 
    for (let i = leftIdx; i < rightIdx; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIdx);
            partitionIdx++;
        }
    }
    // finally, swap partitionidx with pivot value
    swap(array, pivot, partitionIdx);
    
    // we know this is the correct index for our pivot
    return partitionIdx;
 }
 
 const swap = function(array, index1, index2) {
     const temp = array[index1];
     array[index1] = array[index2];
     array[index2] = temp;
 }