
/**
 * 參考別人解法, 使用 stack 方法做，自己是沒想到可以用這種方式解決
 * 
 * 1.將元素存進棧中，當遇到比自己高度還矮的元素時，則將原本棧頂元素出棧，代表該高度的最大面積已經不可能再擴大了
 * 2. 頭尾添加 0高度的索引: 
 *    - 頭添加 0高度的索引因為不添加的話，第一個索引無法順利的入棧
 *    - 尾添加 0高度的索引是因為不添加的話，計算不到原先陣列尾的面積，所以給一個高度0的值，確保每個元素都會出棧
 * ex:
 *  3 4 2
 *    |
 *  | |
 *  | | |
 *  | | |
 * 
 * 1. 當高度4遇到高度2時， 代表高度4這個面積已經是最大的了，將 高度4 彈出棧頂並且計算該出棧 bar 面積
 * 2. 至於寬度如何判斷呢? (依照當前索引位子 - 棧頂索引位子 - 1) 即為寬度
 *  
 * 
 * [2,1,5,6,2,3] -> [0,2,1,5,6,2,3,0], output = 10
 * 
 * i = 0, height = 0, stack = [0]
 * i = 1, height = 2, stack = [0,2]
 * i = 2, height = 1, stack = [0,2] -> [0] -> [0,1], 高度 2 -> 2 * (2 - 0 - 1),  maxArea = 2
 * i = 3, height = 5, stack = [0,1,5],  maxArea = 2
 * i = 4, height = 6, stack = [0,1,5,6],  maxArea = 2
 * i = 5, height = 2, stack = [0,1,5,6] ->  [0,1,5]( 高度 6  -> 6 * (5 - 3 - 1) = 6) -> [0,1] (高度 5  -> 5 * (5 - 2 - 1) = 10) -> [0,1,2], maxArea = 10
 * i = 6, height = 3, stack = [0,1,2,3],  maxArea = 10
 * i = 7, height = 0, stack = [0,1,2,3] -> [0,1,2]( 高度 3  -> 3 * (7 - 5 - 1) = 1) -> [0,1]( 高度 2 -> 2 * (7 - 2 - 1) = 8) -> [0]( 高度 1 -> 1 * (7 - 0 - 1) = 6) -> [0,0], maxArea = 10
 * 
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0
    const stack = []
    heights = [0, ...heights, 0]
    for (let i = 0; i < heights.length; i++) {
        // 當前 bar 比棧頂 bar 矮
        while (heights[i] < heights[stack[stack.length - 1]]) {
            // 栈顶元素出栈，并保存栈顶bar的索引
            const stackTopIndex = stack.pop()
            // 计算出栈的bar形成的长方形面积
            maxArea = Math.max(maxArea, heights[stackTopIndex] * (i - stack[stack.length - 1] - 1))
        }
        stack.push(i)
    }
    return maxArea
};