/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 
 * invert tree
 * 
 *       5 
 *    2  -> 8
 *  1  3  6   7
 * 
 * 
 *       5 
 *    8     2
 *  6->7  1   3
 * 
 *       5 
 *    8     2
 *  7  6  1 ->3
 * 
 *       5 
 *    8     2
 *  7  6  3   1
 * 
 * above process, we can swap left & right node then they invert naturally 
 */
var invertTree = function (root) {
    function invert(root) {
        if (root === null) return null
        let tempLeft = root.left
        root.left = root.right
        root.right = tempLeft
        invert(root.left)
        invert(root.right)
    }

    invert(root)
    return root
};

var invertTree = function (root) {
    function invert(root) {
        if (root === null) return null
        let tempLeft = root.left
        root.left = root.right
        root.right = tempLeft
        invert(root.left)
        invert(root.right)
    }

    invert(root)
    return root
};