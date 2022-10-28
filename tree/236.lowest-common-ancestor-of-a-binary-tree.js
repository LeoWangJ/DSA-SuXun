/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 
 * 需要思考一下：
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/
 * 
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null || root === p || root === q) return root
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    // 左子樹若沒有 p or q, 則直接返回右子樹，代表p,q 都在右子數
    if (!left) return right
    if (!right) return left
    // 都有的話直接返回父節點
    if (left !== null && right !== null) return root
};