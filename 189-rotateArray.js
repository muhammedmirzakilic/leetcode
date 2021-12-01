/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  if (k === 0) return;
  reversNumbers(nums, 0, nums.length - 1);
  reversNumbers(nums, 0, k - 1);
  reversNumbers(nums, k, nums.length - 1);
  function reversNumbers(nums, left, right) {
    while (left < right) {
      let temp = nums[left];
      nums[left++] = nums[right];
      nums[right--] = temp;
    }
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 0;
rotate(nums, k);
