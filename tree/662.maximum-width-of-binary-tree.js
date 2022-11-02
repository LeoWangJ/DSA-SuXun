/**
 * @param {TreeNode} root
 * @return {number}
 * https://leetcode.cn/problems/maximum-width-of-binary-tree/solution/jiand-by-wendraw-27fj/
 * https://leetcode.cn/problems/maximum-width-of-binary-tree/solution/by-muse-77-7hwf/
 * 
 * 根節點索引 index, 左子樹索引 index * 2, 右子樹索引 index * 2 + 1
 * 
 * 
 */
var widthOfBinaryTree = function (root) {
    let queue = [[root, 1n]]
    let max = -1
    while (queue.length) {
        let size = queue.length
        max = Math.max(max, Number(queue[size - 1][1] - queue[0][1] + 1n))
        for (let i = 0; i < size; i++) {
            const [node, index] = queue.shift()
            if (node.left) queue.push([node.left, index * 2n])
            if (node.right) queue.push([node.right, index * 2n + 1n])
        }
    }
    return max
};