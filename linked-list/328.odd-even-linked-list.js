/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * solve the problem in O(1) extra space complexity and O(n) time complexity
 * 
 * 1 -> 2 -> 3 -> 4 -> 5
 * 1 -> 3 -> 5 -> 2 -> 4
 * 
 * let order index linked to be together and can't change odd / even linked order
 * like: 
 * 1 -> 2 -> 3
 * 3 -> 1 -> 2
 * 
 * 1 must in front of 3  
 * 
 * we can use two pointer , odd / even, 
 * odd is pointer to head
 * even is pointer to head.next
 * let odd / even change their node's next to be node's next next
 * like 
 * 
 * 1 -> 2 -> 3 -> 4 -> 5
 * o    ->   o    ->   o -> o
 *      e    ->   e   -> e
 * 
 * 1. 
 * odd:
 *  1 -> 2 -> 3 -> 4 -> 5 
 *  1 -> 3 -> 4 -> 5  odd.next = cur.next
 *  3 -> 4 -> 5 odd = odd.next
 * 
 * head: 
 * 1 -> 2 -> 3 -> 4 -> 5 
 * 1 -> 3 -> 4 -> 5  odd.next = cur.next
 * 
 * cur:
 *  2 -> 3 -> 4 -> 5 
 *  2 -> 4 -> 5  cur.next = odd.next
 *  4 -> 5 cur = cur.next
 * 
 * even:
 * 2 -> 3 -> 4 -> 5 cur.next = odd.next
 * 2 -> 4 -> 5
 * 
 * 2. 
 * odd:
 *  3 -> 4 -> 5
 *  3 -> 5 odd.next = cur.next
 *  5 odd = odd.next
 * head: 
 * 1 -> 3 -> 4 -> 5
 * 1 -> 3 -> 5 odd.next = cur.next
 * 
 * cur:
 *  4 -> 5 
 *  4 -> null cur.next = odd.next
 *  null cur = cur.next
 * 
 * even:
 * 2 -> 4 -> 5 cur.next = odd.next
 * 2 -> 4 -> null
 * 
 * 
 * 
 * if odd / even next is null that represent finfish
 * 
 * boundary: 
 *  head is null just return head 
 *  
 * 
 */
var oddEvenList = function (head) {
    if (head === null) return head
    let odd = head, cur = head.next, even = cur

    while (cur && cur.next !== null) {
        odd.next = cur.next
        odd = odd.next
        cur.next = odd.next
        cur = cur.next
    }
    odd.next = even
    return head
};