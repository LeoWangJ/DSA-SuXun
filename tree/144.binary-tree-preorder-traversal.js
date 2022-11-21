/**
 * recursion 
 * 
 * 1. 2022/10/24
 * 2. 2022/11/21 (忘記迭代法)
 */
var preorderTraversal = function (root) {
    let result = []

    function preorder(root) {
        if (root === null) return null
        result.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    preorder(root)
    return result
};

/**
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 *      5
 *   3    6
 *  2 4    8
 * 1      7 9
 * 
 * The main idea is handle left node first , and push node into stack. follow-up to handle right node
 * if left node all null, interrupt while loop , and handle bottom right node 
 */
var preorderTraversal = function (root) {
    let result = []
    let stack = []
    while (root || stack.length) {
        while (root) {
            result.push(root.val)
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }
    return result
};