/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 
 * invert tree
 * 
 * 1. 2022/10/24
 * 2. 2022/11/21
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

/**
 * https://leetcode.cn/problems/invert-binary-tree/solution/dong-hua-yan-shi-liang-chong-shi-xian-226-fan-zhua/
 * 
 * invert tree
 * 
 *       5 
 *    2  -> 8
 *  1  3  6   7
 * 
 * queue = [5]
 * 
 *       5 
 *    8     2
 *  6->7  1   3
 * 
 * queue= [8,2]
 * queue= [2]
 * 
 *       5 
 *    8     2
 *  7  6  1 ->3
 * 
 * queue= []
 * 
 *       5 
 *    8     2
 *  7  6  3   1
 * 
 * time complexity O(n)
 * extra space complexity O(n)
 * 
 * 廣度遍歷
 */
var invertTree = function (root) {
    if (root === null) return null
    let queue = [root]
    while (queue.length !== 0) {
        let temp = queue.shift()
        let left = temp.left
        temp.left = temp.right
        temp.right = left
        if (temp.left !== null) {
            queue.push(temp.left)
        }

        if (temp.right !== null) {
            queue.push(temp.right)
        }
    }
    return root
};

/**
 * iteratively 
 */
var invertTree = function (root) {
    let stack = []
    let cur = root
    while (cur || stack.length !== 0) {
        if (cur) {
            let left = cur.left
            cur.left = cur.right
            cur.right = left
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            cur = cur.right
        }
    }
    return root
};