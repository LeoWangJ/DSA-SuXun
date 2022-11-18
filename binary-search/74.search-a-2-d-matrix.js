/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 *  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 *  使用二分查詢法，雖然變成二維陣列，但還是能夠根據索引去查詢是否存在值
 *  m 代表 總列數、 n 代表 總行數
 *  最後值 right 索引為 m * n -1
 * 
 *  求到 mid 時，需要找出 mid 的列與行 
 *  列 : mid / n
 *  行 : mid % n
 * 
 * 1. 2022/11/04
 * 2. 2022/11/18
 * 
 * 
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length, n = matrix[0].length
    let left = 0, right = m * n - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let row = Math.floor(mid / n)
        let column = mid % n
        if (matrix[row][column] === target) return true
        if (matrix[row][column] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
};