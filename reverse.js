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
