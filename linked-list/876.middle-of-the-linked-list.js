/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * find middle node in singly linked list
 * 
 * restrict: if middle nodes have two node(it means linked list is even), return second node 
 * 
 * difficult: how to find middle ?
 * 
 * use fast/slow pointer to find middle nodes?
 * 
 * 1 -> 2 -> 3 -> 4 -> 5 
 * above this example  ,in order linked list, when fast.next is null, it represent slow pointer is middle node
 * 
 * 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
 * f   ->    f   ->    f   ->     f
 * s -> s -> s -> s
 * above this example, it is can work too
 *
 * so if fast is null or fast.next is null, return slow pointer
 * 
 * time complexity: O(n)
 */
var middleNode = function (head) {
    let fast = head, slow = head
    while (fast && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};