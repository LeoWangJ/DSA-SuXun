/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 
 *    2          2            2
 * 1     3  = 1     3  !=  3     1
 * 
 * 用相同的遍歷法，如果同一個遍歷節點值不同則代表不是相同樹
 * boundary:
 * p equal null & q equal null, represent that all null node, so need to return true
 * 
 * time complexity O(n)
 * 1. 2022/10/27
 * 2. 2022/12/21 (思路正確, 但是忘了 p === null && q === null 是要回傳 true, 代表兩個都是空節點)
 */
var isSameTree = function (p, q) {
    function recursion(p, q) {
        if (p === null && q === null) return true
        if (p?.val !== q?.val) return false
        return recursion(p.left, q.left) && recursion(p.right, q.right)
    }

    return recursion(p, q)
};