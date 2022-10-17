/*
 * [1] Two Sum (easy)
 */


/**
 * 暴力法 O(n^2)
 * 由於題目已明確描述 只有一個答案，所以無須判斷重複的情況
 * 1. 外層迴圈從 0 開始遍歷
 * 2. 內層迴圈為 i + 1，避免與外層重複值
 * 3. nums[i] + nums[j] = target 時，由於 i 索引必定小於 j，所以存放在第一位 [i,j] 即為解答
 */
var twoSum = function (nums, target) {
    let res = []
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                res = [i, j]
            }
        }
    }
    return res
};

/**
 * hash table O(n)
 * follow-up 提及是否能使用 時間複雜度小於 O(n^2) 的方法，因此想到使用 雜湊表 可一次遍歷解決該問題
 * 1. 使用 hash table 紀錄已經遍歷過的數值與索引，當 target - 當前遍歷值 在 hash table 裡已經有存在了，說明已經找到兩數之和  = target 
 */
var twoSum = function (nums, target) {
    let hashTable = new Map()
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let goalNum = target - nums[i]
        if (hashTable.has(goalNum)) {
            res = [hashTable.get(goalNum), i]
        } else {
            hashTable.set(nums[i], i)
        }
    }
    return res
};