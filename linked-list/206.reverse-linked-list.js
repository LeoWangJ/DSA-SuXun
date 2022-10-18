/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * reverse linked list 
 * 1 -> 2 -> 3 -> 4 -> 5
 * 5 -> 4 -> 3 -> 2 -> 1
 * 
 * I can change their next linked to pointer previous linked list, and repeat this way until next is null
 * 
 * 1. set prev variable to be null , and it will return reverse linked list
 * 2. use recursion to handle our repeat part
 * 3. in recursion function, we need to find out interrupt condition. ( when head is null )
 * 4. store head next linked list , because it will be change
 * 5. we need to set head next to be prev and set prev to be head , that are important way, because this part is reverse logic
 * 6. last we need to change head to be next linked list , in order to recursion function can repeat it in right parameter
 * 
 * other explains in this topic (chinese video)
 * https://leetcode.cn/problems/reverse-linked-list/solution/shi-pin-jiang-jie-die-dai-he-di-gui-hen-hswxy/
 * 
 * time complexity: O(n)
 */
var reverseList = function (head) {
    let prev = null

    function recursion(head) {
        if (head === null) return null
        let next = head.next
        head.next = prev
        prev = head
        head = next
        recursion(head)
    }
    recursion(head)
    return prev
};