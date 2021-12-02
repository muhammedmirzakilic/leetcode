/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //   //bruteforce
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let index = 0; index < nums.length - 1; index++) {
  //       const element = nums[index];
  //       if (element === 0) {
  //         [nums[index], nums[index + 1]] = [nums[index + 1], nums[index]];
  //       }
  //     }
  //   }

  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[index++] = nums[i];
  }
  while (index < nums.length) {
    nums[index++] = 0;
  }

  console.log(nums);
};

const nums = [0];
moveZeroes(nums);
