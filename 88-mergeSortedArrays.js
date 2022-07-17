/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = nums1.length - 1;
    let rigtIndex = n - 1;
    let leftIndex = m - 1;
    while (leftIndex >= 0 && rigtIndex >= 0) {
        const replacementItem = nums2[rigtIndex] > nums1[leftIndex] ?
            nums2[rigtIndex--] : nums1[leftIndex--];
        console.log(replacementItem)
        nums1[i--] = replacementItem;
    }
    while (rigtIndex >= 0) {
        nums1[i--] = nums2[rigtIndex--];
    }
    return nums1;
};

const nums1 = [2, 0];
const nums2 = [1];

console.log(merge(nums1, 1, nums2, 1));
