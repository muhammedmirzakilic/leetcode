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
console.log("palindrom ==> " + longestPalindrome("babcd"));
