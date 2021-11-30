/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let index = Math.floor(left + (right - left) / 2);
    if (nums[index] === target) return index;
    if (nums[index] < target) left = index + 1;
    else right = index - 1;
  }
  return left;
};
const nums = [1];
const target = -1;
console.log(searchInsert(nums, target));
