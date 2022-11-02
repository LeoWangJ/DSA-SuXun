/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 
 * 廣度遍歷，再使用height 代表目前所在階層，單數為從左至右，偶數則從右至左 塞入值
 * 可以使用push 與 unshift 分別代表從右至左 與 從左至右
 */
var zigzagLevelOrder = function (root) {
    let result = []
    if (root === null) return result
    let queue = [root]
    height = 1
    while (queue.length) {
        let size = queue.length
        let level = []
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (height % 2 === 0) {
                level.unshift(node.val)
            } else {
                level.push(node.val)
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(level)
        height += 1
    }
    return result
};