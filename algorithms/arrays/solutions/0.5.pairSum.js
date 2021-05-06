// given collection, sum determine if there is a matching pair in collection that sums to sum
// ex: [1, 2, 3, 9], 8 => false
// ex: [1, 2, 4, 4], 8 => true 
// inputs?:
// - collection: array, sorted
// - sum: number
// output?: boolean
// tradeoff goal?: time, space, memory?

/**
 * finds a matching pair that equals a sum in a collection of numbers
 * @param {array} array
 * @param {number} sum
 * @returns {boolean} true | false
*/
function hasPairSum(array, sum) { // time: O(n) space: O(1)
    // two pointers: low, hi
    let lo = 0;
    let hi = array.length - 1;
    let currentSum;
    // while low !== hi
    while(lo !== hi) {
      currentSum = array[hi] + array[lo];
      if (currentSum === sum) {
        return true;
      } else if (currentSum < sum) {
        lo++; 
      } else if (currentSum > sum) {
        hi--;
      }
    }
    return false;
}
console.log(`hasPairSum([1, 2, 3, 9], 8) =>`, hasPairSum([1, 2, 3, 9], 8))
console.log(`hasPairSum([1, 2, 4, 4], 8) =>`, hasPairSum([1, 2, 4, 4], 8))
// don't need the value, just if exists
// can keep track of if a value has been seen that would have summed to current num
function hasPairSum2(array, sum) { // time: O(n), space: O(n)
    // loop over
    const complements = new Set()
    for(let i=0; i<array.length; i++) {
      // if set has current, return true
      if (complements.has(array[i])){
        return true;
      }
      // add sum - current
      complements.add(sum - array[i]);
    }
    return false;
}
  
console.log(`hasPairSum2([1, 2, 3, 9], 8) =>`, hasPairSum2([1, 2, 3, 9], 8))
console.log(`hasPairSum2([1, 2, 4, 4], 8) =>`, hasPairSum2([1, 2, 4, 4], 8))

// given a collection of numbers and a sum, create a function that 
// lets its user know (true/false) if the array contains a 