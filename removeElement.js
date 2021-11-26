var removeElement = function (nums, val) {
  var k = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] != val) {
      nums[k] = nums[index];
      if (index !== k++) nums[index] = "_";
    }
  }
  return k;
};
console.log(removeElement(nums, 2));
