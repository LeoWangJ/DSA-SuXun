/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/js-by-bertil-ip1z/
 * 
 * 
 * 1. 找出中序與前序的根節點; 前序為陣列第一個，中序則使用indexOf(前序根節點)去找出中序根節點索引值
 * 2. 前序左子樹數量為中序根節點索引  + 1, 前序則為中序根節點索引前
 * 3. 右子樹則皆為中序根節點索引 +1
 * 
 */
var buildTree = function (preorder, inorder) {
    if (!inorder.length) return null
    let rootNode = preorder[0]
    let mid = inorder.indexOf(rootNode)
    let root = new TreeNode(rootNode)
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    return root

};