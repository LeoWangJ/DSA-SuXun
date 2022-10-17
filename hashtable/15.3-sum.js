/**
 * 該提難點在於如何去除重複值
 * 
 * 1. 暴力法 O(n^3) 遍歷所有情況，三個索引分別為 i = 0, i =1, i=2 開始遍歷，遍歷結束條件為 i = length -2, i = length -1 , i = length
 * 對數組排序，方便之後生成hashKey時判斷是否重複
 * 不過對於暴力法， 時間複雜度過高，會 time limit
 */
var threeSum = function (nums) {
    let result = new Map()
    if (nums.length < 3) {
        return []
    }

    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {

        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let hashKey = [nums[i], nums[j], nums[k]].join('')
                if (nums[i] + nums[j] + nums[k] === 0 && !result.has(hashKey)) {
                    result.set(hashKey, [nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return [...result.values()]
};


/**
 * 雙指針法 O(n^2)
 * 參考其他人解法
 * 
 * 1. j > i > k, k 一定不為正整數，因為最小值還大於 0 時，總和不可能為 0
 * 2. 若 k > 0 時，nums[k] 與 k-1 的值相同，則直接略過，否則可能會有重複值  
 * 3. i 為 k +1 , 為頭指針, j = nums.length - 1 當尾指針
 * 4. 當 i < j 時， 總和大於 0 代表 j 的值太大，所以往前一步，若總和小於零則是 i 值太小，往後一步
 * 5. i 往後與 j 往前也必須要處理重複值的問題，有重複值的話必須略過
 */
var threeSum = function (nums) {
    let result = []
    if (nums.length < 3) {
        return []
    }
    nums.sort((a, b) => a - b)

    for (let k = 0; k < nums.length - 2; k++) {
        if (nums[k] > 0) break;
        // 重複值略過
        if (k > 0 && nums[k] === nums[k - 1]) continue
        let i = k + 1, j = nums.length - 1
        while (i < j) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum > 0) {
                while (i < j && nums[j] === nums[--j]) { }
            } else if (sum < 0) {
                while (i < j && nums[i] === nums[++i]) { }

            } else {
                result.push([nums[k], nums[i], nums[j]])
                while (i < j && nums[j] === nums[--j]) { }
                while (i < j && nums[i] === nums[++i]) { }
            }
        }
    }
    return result
};