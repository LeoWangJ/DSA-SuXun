/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)
 * 
 * reference:
 * https://leetcode.cn/problems/sort-list/solution/jsshua-ti-mian-shi-ti-jie-by-distracted-ld29u/
 * 
 * 
 * It's difficult for me.
 * 
 * that use merge sort O(nlogn), so need to understand merge sort implement function and core mind
 * 
 */
var sortList = function (head) {
    if (head === null || head.next === null) return head
    let fast = head.next
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let mid = slow.next
    slow.next = null
    let left = sortList(head)
    let right = sortList(mid)

    let h = new ListNode(0)
    let res = h

    while (left && right) {
        if (left.val < right.val) {
            h.next = left
            left = left.next
        } else {
            h.next = right
            right = right.next
        }
        h = h.next
    }
    h.next = left ? left : right
    return res.next
};