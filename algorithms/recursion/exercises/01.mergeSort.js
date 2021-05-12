/**
 * Implement the merge sort algorithm recursively. It works as follows:
 * - base case: length of the array is 1
 * - pick the mid point
 * - get the left and right sides
 * - recursive case: merge the result of mergeSort on each side:
 *      - iterates over each array
 *      - compares and pushes them into a result array in the correct order
 *      - concatenates the remaining values and returns the result
 */

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    // code here

    return merge(
        // mergeSort(left),
        // mergeSort(right)
    );
}

function merge(left, right) {
    // code here
}