/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 *  1 -> 2 -> 3 -> 4 -> 5 ,n = ２
 *  f   ->    f    ->   f
 *  s -> s -> s
 * 
 *  1 -> 2 n = 1
 *  f -> f 
 *  s -> s
 *  above this example , we can find if fast pointer every time move n until fast is null or fast n next has null
 * then let s pointer next to be s.next.next, represent remove nth node
 * 
 * difficult: 
 */
var removeNthFromEnd = function (head, n) {
    let fast = head, slow = head
    let count = 0
    while (fast !== null) {
        while (count < n && fast !== null) {
            fast = fast.next
            count++
        }
        if (fast !== null) {
            slow = slow.next
        }
        count = 0
    }
    if (slow && slow.next !== null) {
        slow.next = slow.next.next
    } else {

    }
    return head
};