/**
 * 
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1
 * 
 * need to find left deepest node & right deepest node
 * and how to find?
 *  
 *        5 
 *    2       8
 *  1   3   6   7  
 * 
 * it's difficult for me 
 */
var isBalanced = function (root) {
    if (root === null) return true
    return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
    function depth(root) {
        if (root === null) return 0
        return Math.max(depth(root.left), depth(root.right)) + 1
    }
};

/**
 * bottom to up
 * https://leetcode.cn/problems/balanced-binary-tree/solution/shu-ju-jie-gou-he-suan-fa-ping-heng-er-c-ckkm/
 * 
 * 1. 2022/10/25
 * 2. 2022/11/22 (看題解才有思路)
 */
var isBalanced = function (root) {
    const UNBALANCE = -1
    return recursion(root) != UNBALANCE

    function recursion(root) {
        if (root === null) return 0
        // 如果左子節點不是平衡二叉樹，直接返回UNBALANCED
        let left = recursion(root.left)
        if (left === UNBALANCE) return UNBALANCE
        // 如果右子節點不是平衡二叉樹，直接返回UNBALANCED
        let right = recursion(root.right)
        if (right === UNBALANCE) return UNBALANCE
        // 如果左右子節點都是平衡二叉樹，但他們的高度相差大於1，直接返回UNBALANCED，否則就返回二叉樹中節點的最大高度
        return Math.abs(left - right) > 1 ? UNBALANCE : Math.max(left, right) + 1
    }
};