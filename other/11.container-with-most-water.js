
/**
 * @param {number[]} height
 * @return {number}
 * 
 * 1. 暴力法 O(n^2) 用雙迴圈，把每種組合都計算過一次，找出最大值，至於高度的話需要用相對低的值 * x 軸
 * 結果： 時間複雜度太高，導致 time limit exceeded ， 因此需要優化做法
 * 
 */
var maxArea = function (height) {
    let result = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const heightArea = height[i] > height[j] ? height[j] : height[i]
            const xAixs = j - i;
            const max = heightArea * xAixs
            if (result < max) {
                result = max
            }
        }
    }
    return result
};


/**
 * 
 * 2. 頭尾各用一個索引開始紀錄最大區域，接著再將 height 較小的值往中間靠近，保留最高的值，
 *  因為影響最大區域的值為高度與 x axis， x axis 用頭尾索引的方式已經能夠確保最長距離了
 * 
 * 其實就是雙指針做法，複雜度為 O(n)
 */
var maxArea = function (height) {
    let result = 0
    let i = 0
    let j = height.length - 1

    while (j > i) {
        let minHeight = height[i] < height[j] ? height[i] : height[j]
        const width = j - i
        const area = minHeight * width
        if (result < area) {
            result = area
        } else if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }

    return result

};