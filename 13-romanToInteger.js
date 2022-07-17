/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    const additions = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
    };
    for (const key in additions) {
        s = s.replaceAll(key, " " + additions[key] + " ");
    }
    for (const key in symbols) {
        s = s.replaceAll(key, " " + symbols[key] + " ");
    }
    const numbers = s.split(" ");
    const sum = numbers.reduce((acc, number, index) => {
        return acc + +number;
    }, 0);
    return sum;
};

console.log(romanToInt("III"), 3);
console.log(romanToInt("LVIII"), 58);
console.log(romanToInt("MCMXCIV"), 1994);
console.log(romanToInt("I"), 1);
console.log(romanToInt("IV"), 4);
