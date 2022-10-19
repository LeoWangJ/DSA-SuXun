/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 * someone's solution:
 * set fast & slow pointers and dummy head node, this dummy can help us remove node
 * then set fast at head node and slow at dummy node
 *  
 * let fast pointer move nth node. 
 * when fast is not null that means fast is not in head's last node pointer, so we can move fast & slow node
 * 
 * if fast is null, it's represent slow's next node will remove
 *    
 * why slow move from dummy node?
 * if we move from head first node, we can't remove first node forever.
 * moreover, if we remove nth node , it means slow must at n - 1 node location, otherwise, it can't change next pointer 
 *
 *  dummy -> 1 -> 2 -> 3 -> 4 -> 5 , n = ２
 *           f   --->  f -> f -> f -> f
 *     s -> s -> s -> s -> remove        
 * 
 *  dummy -> 1 -> 2 , n = 1
 *    f      ->   f -> f
 *    s   -> s -> remove
 * 
 * other solutions may next time to do
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let fast = head, slow = dummy
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy.next
};