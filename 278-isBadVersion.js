/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let right = n;
    let left = 1;
    while (left < right) {
      let index = Math.floor(left + (right - left) / 2);
      if (isBadVersion(index)) right = index;
      else left = index + 1;
    }
    return left;
  };
};

const isBad = (version) => {
  if (version === 4) {
    return true;
  }
  return false;
};

console.log(solution(isBad)(5));
