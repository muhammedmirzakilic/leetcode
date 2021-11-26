var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// var array = [2, 7, 11, 15];
// console.log(twoSum(array, 9));

const findNumbers = (number) => {
  var divider = 1;
  var res = [];
  while (number * 10 > divider) {
    var lastVal = Math.floor(number / divider) % 10;
    res.push(lastVal);
    divider *= 10;
  }
  return res;
};

//console.log(findNumbers(807));

var isPalindromeNumber = function (x) {
  var rev = (x + "").split("").reverse().join("");
  return x == rev;
};

console.log(isPalindromeNumber(-121));

var longestPalindrome = function (s) {
  var pal = "";
  for (let i = 0; i < s.length; i++) {
    var even = isPalindrom(s, i, i + 1);
    var odd = isPalindrom(s, i, i);
    if (odd.length > pal.length) pal = odd;
    if (even.length > pal.length) pal = even;
  }
  return pal;
};

function isPalindrom(str, left, right) {
  var res = "";
  while (left >= 0 && right < str.length && str[left] == str[right]) {
    if (left == right) res += str[left];
    else res = `${str[left]}${res}${str[left]}`;
    left--;
    right++;
  }
  return res;
}
