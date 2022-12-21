/**
 * left -> root -> right
 * 
 * 1. use recursion
 * 
 * 1. 2022/10/24
 * 2. 2022/11/21 (忘記迭代法)
 * 3. 2022/12/21 (忘記迭代法)
 */
var inorderTraversal = function (root) {
    let result = []
    function inorder(root) {
        if (root === null) return null
        inorder(root.left)
        result.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return result
};

/**
 * 2. use iteratively
 * left -> root -> right
 * 
 * 1. 使用 stack 來當輔助棧, 目標遍歷到最左子樹, 且將遍歷過的節點存進棧, 直到節點為空
 * 2. 接著取出上一個進棧的節點, 將其值放進 結果中, 接著在存進右子樹, 重複直到 stack 輔助棧為空 且 root 不存在
 */

var inorderTraversal = function (root) {
    let result = []
    let stack = []
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        result.push(root.val)
        root = root.right
    }
    return result
};