/**
 * @param {TreeNode} root
 * @return {boolean}
 * 
 * Follow up: Could you solve it both recursively and iteratively?
 * 
 * 1. 深度遍歷，題目為鏡像，左子樹與右子樹的節點需要交換判斷是否相同
 */

var isSymmetric = function (root) {
    let recursion = (root1, root2) => {
        if (root1 === null && root2 === null) return true
        if (root1 === null || root2 === null) return false
        return root1.val === root2.val && recursion(root1.left, root2.right) && recursion(root1.right, root2.left)
    }
    return recursion(root, root)
};
/**
 * 
 * @param {*} root 
 * @returns
 * 
 * 廣度遍歷，一次處理左、右節點 
 */
var isSymmetric = function (root) {
    if (root === null) return true
    let queue = [[root.left, root.right]]
    while (queue.length) {

        let [left, right] = queue.shift()
        if (left === null && right === null) continue
        if (left === null || right === null) return false
        if (left.val !== right.val) return false
        queue.push([left.left, right.right])
        queue.push([left.right, right.left])
    }
    return true
};