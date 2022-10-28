/**
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * 題解意思為，從右邊看向左邊，回傳從下到上的節點，代表是說每一層必須挑選出最右邊的節點即為答案
 * 只要能從最上層開始找到每一層的最右邊節點，就完成了
 * 要從最上方開始按階層遍歷的話，第一個想到就是用廣度遍歷 (102 題)
 * 
 * time complexity O(n)
 * space complexity O(n)
 */
var rightSideView = function (root) {
    let result = []
    if (root === null) return result
    let queue = [root]

    while (queue.length !== 0) {
        let size = queue.length
        result.push(queue[size - 1].val)
        for (let i = 0; i < size; i++) {
            let node = queue.shift()

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return result
};

/**
 * 深度遍歷
 * 此次遍歷方式從 根 -> 右子樹 -> 左子樹
 * 除此之外還需要知道當前節點的深度為何，我們可以使用一個變數，在每次進入遞迴時 +1, 即可判斷當前節點深度
 * 如果深度的值與要返回資料長度相同，說明目前該層最右邊的節點是第一次訪問，因此可以塞入陣列中
 * 
 */
var rightSideView = function (root) {
    const result = []
    function recursion(root, depth) {
        if (root === null) return
        if (depth === result.length) result.push(root.val)
        recursion(root.right, depth + 1)
        recursion(root.left, depth + 1)
    }

    recursion(root, 0)
    return result
};