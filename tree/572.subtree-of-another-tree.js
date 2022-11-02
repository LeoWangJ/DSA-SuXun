/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 * 
 * 
 * https://leetcode.cn/problems/subtree-of-another-tree/solution/dui-cheng-mei-pan-duan-zi-shu-vs-pan-duan-xiang-de/
 * 
 */
var isSubtree = function (root, subRoot) {
    const recursion = (root, subRoot) => {
        if (root === null && subRoot === null) return true
        if (root === null || subRoot === null) return false
        return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    }

    const isSame = (p, q) => {
        if (p === null && q === null) return true
        if (p?.val !== q?.val) return false
        return isSame(p.left, q.left) && isSame(p.right, q.right)
    }
    return recursion(root, subRoot)
};