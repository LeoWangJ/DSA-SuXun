/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 1. 做排序後再比對字符是否相同 O(n * logn)
 */
var isAnagram = function (s, t) {
    const sSorted = s.split('').sort().join('')
    const tSorted = t.split('').sort().join('')

    return sSorted === tSorted
};

/**
 * 2. 看到有其他人使用 hash 去解決 複雜度為 O(n), 因此學習他的作法
 *  - 思路是透過兩個字串，在一個陣列中包含 26個為 0 (a-z)， 一個進行 +1, 一個進行 -1， 最後陣列中如果有不為 0 的值，則代表兩個字串並沒有完全匹配
 *  - 至於要先剪掉 a char code, 是因為陣列第一個索引為 0 
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    const hash = new Array(26).fill(0)
    const aCode = 'a'.charCodeAt()
    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i) - aCode]++
        hash[t.charCodeAt(i) - aCode]--
    }

    for (let item of hash) {
        if (item !== 0) {
            return false
        }
    }
    return true
};