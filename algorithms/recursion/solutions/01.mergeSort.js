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

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const mid = Math.floor(array.length/2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let merged = [];
  let leftIdx = 0; 
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }
  
  return merged.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = mergeSort(numbers);
console.log(answer);