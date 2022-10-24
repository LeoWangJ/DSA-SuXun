/**
 * left -> root -> right
 * 
 * 1. use recursion
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