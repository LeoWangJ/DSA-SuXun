/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 
 * 在二分查找的基礎上做變形
 * [2,3,4,5,6,0,1]
 * 
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = parseInt((left + right) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) {
            // 確保 target 並未在 left ~ mid 中間
            if (nums[left] <= nums[mid] && nums[left] > target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else {
            // 確保 target 並未在 mid ~ right 中間 ex: [5,6,0,1,2,3,4] target = 5
            if (nums[right] >= nums[mid] && nums[right] < target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1
};