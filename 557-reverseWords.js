/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const spaceIndexes = [];
  let res = "";
  for (let index = 0; index < s.length; index++) {
    if (s[index] === " ") spaceIndexes.push(index);
  }
  spaceIndexes.push(s.length);
  let start = 0;
  for (let index = 0; index < spaceIndexes.length; index++) {
    let end = spaceIndexes[index];
    while (end > start) {
      res += s[end - 1];
      end--;
    }
    res += " ";
    start = spaceIndexes[index] + 1;
  }
  res = res.substring(0, res.length - 1);
  return res;
};

// const s = "L";
// const s = "Le";
const s = "L e t ' s";
console.log(reverseWords(s));
