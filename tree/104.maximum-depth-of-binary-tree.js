/**
 * 
 * 深度搜索樹
 * 1. 判斷左右子結點高度，若為 null 代表為0
 * 2. 子樹的左、右節點接算出來後，判斷左、右節點哪個高度較大，代表高度較深，最後在 + 1，代表自身節點的高度
 */
var maxDepth = function (root) {
    if (root === null) return 0
    function dfs(root) {
        if (root === null) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)
        return Math.max(left, right) + 1
    }

    return dfs(root)
};