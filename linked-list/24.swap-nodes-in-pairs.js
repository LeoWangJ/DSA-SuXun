/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 *  1 -> 2 -> 3 -> 4
 * 
 * 1. set dummy head linked help us convenience operate head and  set p pointer to point current position 
 * dummy -> 1 -> 2 -> 3 -> 4
 *  p
 * 2. get dummy next & dummy.next.next linked node
 * next = p.next
 * secondNext = next.next
 *   
 * 3. change two linked node position & set p point to secondNext
 * next.next = secondNext.next 
 * secondNext.next = next
 * p.next = secondNext
 * p = next 
 * 
 * dummy -> 2 -> 1 -> 3 -> 4
 *               p
 * 
 * time complexity O(n)
 * extra complexity O(1)
 */
var swapPairs = function (head) {
    let dummy = new ListNode()
    dummy.next = head
    let pointer = dummy

    while (pointer.next !== null && pointer.next.next !== null) {
        let next = pointer.next
        let secondNext = next.next

        next.next = secondNext.next
        secondNext.next = next
        pointer.next = secondNext
        pointer = next
    }
    return dummy.next
};


/**
 * I saw someone's solution use stack to solve this problem , It's cool
 * so I try this solution
 * 
 * It's idea is push node twice and pop it, so their order is change.
 * dummy -> 1 -> 2 -> 3 -> 4
 *  p
 * 
 * push dummy.next & dummy.next.next
 * then pop dummy.next.next node and set dummy.next to this node 
 * then pop dummy.next node and set next again
 * 
 * but this way maybe time out
 * 
 * time complexity O(nm)
 * extra complexity O(n)
 */

var swapPairsStack = function (head) {
    let dummy = new ListNode()
    dummy.next = head
    let pointer = dummy
    let stack = []

    while (pointer.next !== null & pointer.next.next !== null) {
        let next = pointer.next
        let secondNext = next.next
        stack.push(next)
        stack.push(secondNext)

        while (stack.length !== 0) {
            let popNode = stack.pop()
            pointer.next = popNode
            pointer = pointer.next
        }
    }
    return dummy.next
};