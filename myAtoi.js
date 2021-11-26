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

console.log(myAtoi("2147483648"));
