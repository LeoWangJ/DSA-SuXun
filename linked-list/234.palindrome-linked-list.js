/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * we use array to check palindrome list
 * 1. push linked list value in array
 * 2. use head,tail pointer to move middle until same index, if head and tail value not same , it's not palindrome. 
 * 
 * time complexity O(n)
 * extra space complexity O(n)
 */
var isPalindrome = function (head) {
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    let header = 0, tail = arr.length - 1;

    while (header < tail) {
        if (arr[header] !== arr[tail]) return false
        header++
        tail--
    }
    return true
};

/**
 * Follow up: Could you do it in O(n) time and O(1) space?
 * 
 * find middle linked list , then reverse middle.next linked 
 * then it will same as head first half part if it's palindrome
 * 
 * 1. we need to use fast / slow pointer to find middle linked list (like leetcode 876, but 876 even linked list, want return second linked) 
 * 2. implement reverse linked list function (leetcode 206)
 * 3. compare two linked list value
 * 
 *
 */
var isPalindrome2 = function (head) {
    if (head === null) return true
    let middle = middleLinked(head)
    middle = reverse(middle.next)
    let result = true
    while (middle) {
        if (head.val !== middle.val) result = false
        middle = middle.next
        head = head.next
    }
    return result

    function reverse(head) {
        let prev = null
        while (head) {
            const next = head.next
            head.next = prev
            prev = head
            head = next
        }
        return prev
    }

    function middleLinked(head) {
        let slow = head, fast = head
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }
};