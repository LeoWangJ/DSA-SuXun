/**
 * 1. 滑動窗口用 dequeue 來維護，而至於滑動則使用迴圈來實現
 * 2. 當滑動窗口滿時，需要出隊
 *  結果: Time Limit Exceeded
 *  原因: 應該是判斷最大值時耗費太多時間
 * 
 */
var maxSlidingWindow = function (nums, k) {
    const result = []
    const dequeue = []

    for (let i = 0; i < nums.length; i++) {
        if (dequeue.length === k) dequeue.shift()
        dequeue.push(nums[i])
        if (dequeue.length === k) {
            const maxValue = Math.max(...dequeue)
            result.push(maxValue)
        }
    }
    return result
};


/**
 * 1. 一樣用 dequeue 來維護滑動窗口，不過改存入索引值，並且保持 dequeue 第一個索引的 nums 為最大值
 * 2. 當滑動窗口滿時，一樣需要出隊，不過改用 "當前迴圈索引值 - 滑動窗口第一項索引值 >= k " 判斷, 因為已經滿了，第一項必須要離開滑動窗口
 * 3. 要時刻保持滑動窗口最大值必定為索引第一項，這樣就不需要額外判斷滑動窗口哪個值最大。 所以需要判斷要進來的值是否比滑動窗口尾項還大，如果值較大，則將滑動窗口尾項彈出
 * 4. 當 i 大於等於 k - 1 時，為第一次滑動窗口數量滿足 k, 代表滑動窗口已經可以開始存入最大值
 * 
 * ex: nums = [1,3,-1,-3,5,3,6,7],k = 3 為例
 * i = 0, dequeue = [1], dequeue[0] = 0, result = []
 * i = 1, dequeue = [3], dequeue[0] = 1, result = []
 * i = 2, dequeue = [3,-1], dequeue[0] = 1, result = [3]
 * i = 3, dequeue = [3,-1,-3], dequeue[0] = 1, result = [3,3]
 * i = 4, dequeue = [3,-1,-3](i - dequeue[0] >= k) -> [-1,-3](nums[dequeue[dequeue.length - 1]] <= nums[i]) -> [5], dequeue[0] = 4, result = [3,3,5]
 * i = 5, dequeue = [5,3], dequeue[0] = 4, result = [3,3,5,5]
 * i = 6, dequeue = [5,3] -> [6], dequeue[0] = 6, result = [3,3,5,5,6]
 * i = 7, dequeue = [6] -> [7], dequeue[0] = 7, result = [3,3,5,5,6,7]
 * 
 */
var maxSlidingWindow = function (nums, k) {
    const result = []
    const dequeue = []

    for (let i = 0; i < nums.length; i++) {
        console.log(i - dequeue[0])
        if (i - dequeue[0] >= k) dequeue.shift()

        while (nums[dequeue[dequeue.length - 1]] <= nums[i]) {
            dequeue.pop()
        }
        dequeue.push(i)

        if (i >= k - 1) {
            result.push(nums[dequeue[0]])
        }
    }
    return result
};
