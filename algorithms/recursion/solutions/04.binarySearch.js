/**
 * Given a sorted array nums, and a target value target, 
 * implement binary search to find target in the array.
 * 
 * Return the index of target, and null if it doesn't exist
 * inside the array.
 */

function binarySearch(nums, left, right, target) {
    if (right >= left) {
        const mid = Math.floor((left + right)/2);
        
        if (nums[mid] === target) {
            return mid;
        }

        // repeat on right if mid < t
        if (nums[mid] < target) {
            return binarySearch(nums, mid+1, right, target);
        } 
        
        if (nums[mid] > target) {
            return binarySearch(nums, left, mid - 1, target);
        }
    }

    return null;
    
    // mid and target are equal
}
 let nums = [3,5,7,8];
 let target = 7;
 // binarySearch(nums, 0, nums.length - 1, target)  // => 2
 // binarySearch(nums, target = 1, 0, nums.length -1)  // => null
 
 