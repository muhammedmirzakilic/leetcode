/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    // bruteforce
    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i; j < height.length; j++) {
    //         const area = Math.min(height[i], height[j]) * (j - i);
    //         if (area > maxArea)
    //             maxArea = area;
    //     }
    // }
    // optimized
    let left = 0;
    let right = height.length - 1;
    while (left <= right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        if (area > maxArea)
            maxArea = area;
        if (height[right] > height[left])
            left++;
        else
            right--;
    }
    return maxArea;
};

const height = [1, 100, 1, 2, 5, 4, 10, 3, 7];
console.log(maxArea(height))
