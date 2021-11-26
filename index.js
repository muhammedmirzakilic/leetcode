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
//console.log("palindrom ==> " + longestPalindrome("babcd"));

var reverse1 = function (c) {
  var x = Math.abs(c);
  var res = "";
  var divider = 1;
  while (x > divider) {
    var a = Math.floor(x / divider) % 10;
    res = a + res;
    divider *= 10;
  }
  console.log(res);
  return res;
};

var reverse = function (c) {
  var x = Math.abs(c);
  var a = (x + "").split("").reverse().join("");

  if (a > Math.pow(2, 23)) return 0;

  var res = c < 0 ? -a : a;
  return res;
};

var myAtoi = function (str) {
  str = str.trim();
  var asd = "";
  let i = 0;
  if (str[0] == "-") asd = str[i++];
  while (i < str.length) {
    if (!+str[i]) break;
    asd += str[i++];
  }
  if (+asd && Math.abs(+asd) >= Math.pow(2, 31)) {
    if (+asd < 0) return -Math.pow(2, 31);
    return Math.pow(2, 31) - 1;
  }
  return asd ? +asd : 0;
};

//console.log(myAtoi("2147483648"));

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
//console.log(removeDuplicates(nums));

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
