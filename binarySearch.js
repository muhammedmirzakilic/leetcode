/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let index = Math.floor(nums.length / 2);
  let right = nums.length;
  let left = 0;
  while (left <= right) {
    if (nums[index] === target) {
      return index;
    } else if (nums[index] < target) {
      left = index + 1;
      index = Math.ceil((right + index) / 2);
    } else {
      right = index - 1;
      index = Math.floor((index + left) / 2);
    }
  }
  return -1;
};

const nums = [1];
const target = 1;
console.log(search(nums, target));
