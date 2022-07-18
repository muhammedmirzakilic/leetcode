/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const symbols = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    if (!digits.length)
        return [];

    function concatCharacters(digits, prefixes) {
        const res = [];
        prefixes.forEach(prefix => {
            Object.values(symbols[digits[0]]).forEach(character => {
                res.push(prefix.concat(character));
            });
        });
        if (digits.length === 1)
            return res;
        return concatCharacters(digits.substring(1), res);
    }

    return concatCharacters(digits, [""]);
};

console.log(letterCombinations("23"));
