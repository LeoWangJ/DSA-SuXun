/**
 * @param {number[]} nums
 * @return {number}
 * 
 * O(logn)
 * 
 * 找出最小值
 * 原先想得太複雜，其實只要針對中間值跟最右邊的值大小即可
 * ex:
 * 中間值 < 右邊值 , 代表最小值在 左邊值 ~ 中間值，所以將 right = mid
 * 中間值 > 右邊值 , 代表最小值在 中間值 ~ 右邊值，所以將 left = mid + 1 (中間值不可能為最小，所以 + 1)
 */
var findMin = function (nums) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] < nums[right]) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return nums[left]
};