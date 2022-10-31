/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 * 
 * dfs遍歷，並且傳入從根節點到父節點累加起來的值以及當前路徑
 * 當達到葉節點時，判斷當前是否滿足 targetSum
 * 最後需要將當前路徑 pop 出去(回朔)
 */
var pathSum = function (root, targetSum) {
    const result = []
    if (root === null) return result
    const recursion = (root, sum, path) => {
        if (root === null) return
        sum += root.val
        path.push(root.val)

        if (!root.left && !root.right) {
            if (targetSum === sum) result.push(path.slice())
        } else {
            recursion(root.left, sum, path)
            recursion(root.right, sum, path)
        }
        path.pop()
    }

    recursion(root, 0, [])
    return result
};