/**
 * @param {TreeNode} root
 * @return {number}
 * 
 *       5 
 *    8     2
 *  7  6  3   1
 * 
 * 左 + 右子樹高度 + 1 為直徑長度
 * 
 * 
 * https://leetcode.cn/problems/diameter-of-binary-tree/solution/shi-pin-jie-shi-di-gui-dai-ma-de-yun-xing-guo-chen/
 */
var diameterOfBinaryTree = function (root) {
    let res = 0
    if (root === null || (root.left === null && root.right === null)) return res
    function dfs(root) {
        // 考慮最下層的空結點
        if (root === null) return 0

        // 考慮中間層的左、右邊深度
        let left = dfs(root.left)
        let right = dfs(root.right)

        // 上層深度更新
        res = Math.max(res, left + right + 1)
        // 返回給更上一層的深度
        return Math.max(left, right) + 1
    }

    dfs(root)
    return res - 1
};