/* 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

var searchInsert = function (nums, target) {
  if (nums[nums.length - 1] < target) {
    return nums.length;
  } 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || target < nums[i]) {
      return i
    }
  } 
};

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 7], 6));
// console.log(searchInsert([1, 3, 5, 6], 2));

// Examples 
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,7], target = 6
// Output: 3

// Input: nums = [1,3,5,6], target = 7
// Output: 4



