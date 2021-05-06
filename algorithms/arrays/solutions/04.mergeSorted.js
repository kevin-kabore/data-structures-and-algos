/**
 * merges two sorted arrays into one sorted array
 * @param {Number[]} arr1 the first sorted array
 * @param {Number[]} arr2 the second sorted array
 * ex: mergeSorted([], []) => []
 * ex: mergeSorted([1,3,5,9], [2,3,8]) => [1,2,3,3,5,8,9]
 */
// O(a) time and space where a is the length of the largest array
function mergeSorted(arr1, arr2) {
    // check if array
    if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
      throw new Error('mergeSorted(arr1, arr2) expected two arrays')
    }
  
    if (arr1.length === 0) {
      return arr2;
    }
    if (arr2.length === 0) {
      return arr1;
    }
  
    let merged = []
    let i = 0, j = 0
    while(i< arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        merged.push(arr1[i], arr2[j])
        i++
        j++
      }
  
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i])
        i++
      }
  
      if (arr1[i] > arr2[j]) {
        merged.push(arr2[j])
        j++
      }
    }
    // spread the remaining arr
    const remaining = arr1.slice(i).concat(arr2.slice(j))
    return [...merged, ...remaining]
  
  }
  
let arrA = [1,3,5,9]
let arrB = [2,3,8]
console.log(mergeSorted(arrB, arrA))
// expects => [1,2,3,3,5,8,9]
// empty
console.log(mergeSorted([], []))

// 1 empty
console.log(mergeSorted([], [1, 2, 3, 4]))
// no inputs
console.log(mergeSorted())
  