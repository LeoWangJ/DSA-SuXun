/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 
 * 在二分查找的基礎上做變形
 * [2,3,4,5,6,0,1]
 * 
 * 1. 2022/11/04
 * 2. 2022/11/18 - 確保target 不存在某個區間部分忘記怎麼做
 * 
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) return mid
        if (nums[mid] < target) {
            /**
             * 確保 target 並未在 mid ~ right 中間 
             * 1. nums[right] >= nums[mid] 代表中間並未有被 翻轉，所以 nums[right] 為右半邊最大值
             * 2.  nums[right] < target ， 目標值比右邊最大值還大，兩個條件皆符合則確定 target 不會在 mid ~ right 中間
             */

            if (nums[right] >= nums[mid] && nums[right] < target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            /**
            * 確保 target 並未在 left ~ mid 中間
            * 1. nums[mid] >= nums[left] 代表中間並未有被 翻轉，所以 nums[mid] 為左半邊最大值
            * 2. nums[left] > target ， 目標值比左邊最小值還小，兩個條件皆符合則確定 target 不會在 left ~ mid 中間
            */
            if (nums[mid] >= nums[left] && nums[left] > target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};