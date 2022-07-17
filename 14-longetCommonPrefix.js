/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";
    let flag = true;
    do {
        const character = strs[0][prefix.length];
        for (let index = 0; index < strs.length; index++) {
            const element = strs[index];
            if (element[prefix.length] !== character) {
                flag = false;
                break;
            }
        }
        if (flag)
            prefix = strs[0].substring(0, prefix.length + 1)
    } while (flag && prefix.length !== strs[0].length)
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");
console.log(longestCommonPrefix([""]), "");
