/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let min = nums[0] * nums[0];
  let minIndex = 0;
  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    if (element * element < min) {
      min = element * element;
      minIndex = index;
    }
  }
  const result = [min];
  let left = minIndex - 1;
  let right = minIndex + 1;
  while (left >= 0 && right < nums.length) {
    const l = nums[left] * nums[left];
    const r = nums[right] * nums[right];
    if (l < r) {
      result.push(l);
      left--;
    } else {
      result.push(r);
      right++;
    }
  }
  while (left >= 0) {
    result.push(nums[left] * nums[left--]);
  }
  while (right < nums.length) {
    result.push(nums[right] * nums[right++]);
  }
  return result;
};

const nums = [-7, 0];
console.log(sortedSquares(nums));
