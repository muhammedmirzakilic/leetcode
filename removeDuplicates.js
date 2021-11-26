var removeDuplicates = function (nums) {
  var k = 0;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] != nums[k]) {
      k++;
      nums[k] = nums[index];
    }
  }
  return k + 1;
};
var nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeDuplicates(nums));
