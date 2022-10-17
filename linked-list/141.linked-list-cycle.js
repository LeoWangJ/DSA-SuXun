/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * core solution is how to judge pointer already pass by visited linked
 * maybe we can set one pointer to visit linked list and add mark to be true , represent we already visited
 * note: if head or head.next is null, represent this linked list is not linked list cycle
 */
var hasCycle = function (head) {
    while (head && !head.mark && head.next !== null) {
        head.mark = true
        head = head.next
    }
    return head !== null && head.next !== null
};

/**
 * https://leetcode.com/problems/linked-list-cycle/discuss/1666785/JavaScript-Solutions
 * 
 * This solution ideas is same as mine, but it's code is clearest than mine
 */
var hasCycleByDiscuss = function (head) {
    while (head) {
        if (head.mark) return true
        head.mark = true
        head = head.next
    }
    return false
}

/**
 *  https://leetcode.com/problems/linked-list-cycle/discuss/1792510/javascript-solution
 * 
 * other solution is use two pointer , the one is slow pointer,another one is fast pointer
 * 
 * what slow/fast pointer means ?
 * It represent every time slow pointer move one linked and fast pointer move two linked 
 * If it has cycle linked list , slow & fast pointer will meet same linked place
 *  
 */

var hasCycleByDiscuss1 = function (head) {
    if (!head) return false
    let slow = head, fast = head
    while (fast) {
        if (fast.next === null) return false
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) return true
    }
    return false
}