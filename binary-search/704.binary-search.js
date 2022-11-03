/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 二分查找
 * 1. 找出中間值
 * 2. 若目標值小於中間值，則可以刪除中間值之後的元素 mid -1
 * 3. 若目標值大於中間值，則可以刪除中間值之前的元素 mid +1
 * 
 * time complexity O(logn)
 */
var search = function (nums, target) {
    let size = nums.length
    let low = 0, high = size - 1
    while (low <= high) {
        let mid = parseInt((high + low) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
};

/**
 * 遞迴
 */
var search = function (nums, target) {

    function binarySearch(nums, low, high, target) {
        if (low > high) return -1
        let mid = parseInt((low + high) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) {
            return binarySearch(nums, low, mid - 1, target)
        } else {
            return binarySearch(nums, mid + 1, high, target)
        }
    }

    return binarySearch(nums, 0, nums.length - 1, target)
};