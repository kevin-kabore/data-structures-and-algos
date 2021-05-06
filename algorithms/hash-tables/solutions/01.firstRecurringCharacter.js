//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// naive: O(n^2) time, O(1) space
// iterate over each number, comparing to every other

// Improvement: O(n) time, O(n) space
// using a cache
function firstRecurringCharacter(input) {
    // error check
    if (!input || !(input instanceof Array)) {
      throw new Error(`Error, firstRecurringCharacter expected an array, received: ${typeof input}.`) 
    };
    //cache
    const cache = {};
    // iterate over input
    for (let i=0; i < input.length; i++) {
      // if in cache return number
      const num = input[i]
      if (cache[num]) return num;
      // add to cache
      cache[num] = true;
    }
    // return undefined
    return undefined
  }
  let test = [2,5,1,2,3,5,1,2,4]
  console.log(firstRecurringCharacter(test))
  test = [2,1,1,2,3,5,1,2,4]
  console.log(firstRecurringCharacter(test))
  test = [2,3,4,5]
  console.log(firstRecurringCharacter(test))
  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2
  test = [2,5,5,2,3,5,1,2,4]
  console.log(firstRecurringCharacter(test))
  console.log(firstRecurringCharacter())