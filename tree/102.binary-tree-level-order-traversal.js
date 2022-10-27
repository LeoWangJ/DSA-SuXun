/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 
 * same level node , need to in same section / array
 *     1
 *   2   3
 * 4   5    6  
 * queue = [1]
 * 
 * queue = [2,3]
 * 
 * queue = [3,4,5]
 * 
 *  queue = [4,5,6]
 * 
 * 
 * -> [[1],[2,3],[4,5,6]]
 * 1. 使用廣度優先遍歷
 * 2. 不過無法區分出進隊的節點是同一個層級，只要解決這點，該題就完成
 * 3. 當前隊列中的節點，用一個迴圈先讓同一層節點一次性處理，即可確保階層問題
 * 
 * time complexity O(n)
 * 
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/
 */
var levelOrder = function (root) {
    let result = []
    if (root === null) return result
    let queue = [root]
    while (queue.length !== 0) {
        let size = queue.length
        let level = []
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            level.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        result.push(level)
    }

    return result
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 
 * 
 * 
 * 如果使用深度優先遍歷呢？
 * 
 * 思路是將每個節點新增一個 level 變數判斷當前所在的層級
 *
 */
var levelOrder = function (root) {
    let result = []
    const recursion = (root, level) => {
        if (root === null) return
        if (!result[level]) result[level] = []
        result[level].push(root.val)
        recursion(root.left, level + 1)
        recursion(root.right, level + 1)
    }

    recursion(root, 0)
    return result
};