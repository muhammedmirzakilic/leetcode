/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  //   //bruteforce
  //TODO: this is not the ideal solution. find a better way
  for (let i = 0; i < numbers.length; i++) {
    const left = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const right = numbers[j];
      if (left + right === target) return [i + 1, j + 1];
    }
  }
};

const numbers = [-1, 0];
const target = -1;

console.log(twoSum(numbers, target));
