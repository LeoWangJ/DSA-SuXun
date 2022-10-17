/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * 合併兩個鏈表(並由小到大排序)
 * consider boundary: when l1/l2 is null that means l1/l2 is already in tail linked or blank linked list
 * so if l1 === null return l2 , l2 and so on
 * use recursion to solve this problem
 * when l1.val > l2.val , It mean l2 linked value is smaller than l1 linked , so need to order l2 first, then use l2.next,l1 parameter in recursion to repeat
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }

    if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    } else {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
};
