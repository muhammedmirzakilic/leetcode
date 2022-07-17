/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let substr = "";
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        const index = substr.indexOf(element);
        if (index === -1) {
            substr += element;
            continue;
        }
        if (substr.length > maxLength) {
            maxLength = substr.length;
        }
        substr = substr.substr(index + 1) + element;
    }
    return substr.length > maxLength ? substr.length : maxLength;
};

console.log(lengthOfLongestSubstring("atcaderybb"), 8);
console.log(lengthOfLongestSubstring("bbbbb"), 1);
console.log(lengthOfLongestSubstring(""), 0);
console.log(lengthOfLongestSubstring("Aa"), 2);
