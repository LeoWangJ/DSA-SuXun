/**
 * left -> right -> result
 * 1. use recursion
 * 
 * 
 * 1. 2022/10/24
 * 2. 2022/11/21 (迭代法已忘)
 */
var postorderTraversal = function (root) {
    let result = []
    function postorder(root) {
        if (root === null) return null
        postorder(root.left)
        postorder(root.right)
        result.push(root.val)
    }
    postorder(root)
    return result
};


/**
 * left -> right -> result
 *  use iteratively
 * 1. use flag to support our judge node is root or right,when root flag = 0, when already handle right node, flag = 1
 * 2. first , we handle left node until root is null
 * 3. then pop node, if flag = 0 , represent current is root , so we need restart push node into stack and handle right node
 * 4. if flag = 1, represent root's left & right node all handled. so we put root val in result array   
 */
var postorderTraversal = function (root) {
    let result = []
    let stack = []
    while (root || stack.length) {
        while (root) {
            stack.push([root, 0])
            root = root.left
        }
        let [node, flag] = stack.pop()
        if (flag === 0) {
            stack.push([node, 1])
            root = node.right
        } else {
            result.push(node.val)
        }
    }
    return result
};