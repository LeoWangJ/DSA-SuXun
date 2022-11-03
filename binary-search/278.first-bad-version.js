/**
 * @param {function} isBadVersion()
 * @return {function}
 * 
 * 使用二分查找方式
 * 1. 若 isBadVersion(mid) 為 true 代表第一個錯誤的值在 (1 ~ mid)
 * 2. 若 isBadVersion(mid) 為 false 代表第一個錯誤的值在 (mid + 1 ~ n)
 * 3. 最終跳出循環後 left = right 即為第一個錯誤的版本
 */
var solution = function (isBadVersion) {
    return function (n) {
        let left = 1, right = n
        while (left < right) {
            let mid = parseInt((left + right) / 2)

            if (isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    };
};