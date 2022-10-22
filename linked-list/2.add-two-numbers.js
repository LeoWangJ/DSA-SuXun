/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * use new linked list to store their sum
 * if l1.val add l2.val >= 10 , then we need to remove ten digit.
 * we can store ten digit into carry variable, and add in next linked sum
 * in while loop , we need to handle carry & sum ten digit situation
 * 
 * until l1 and l2 not exist, escape while loop.
 * if carry is not 0, represent has ten digit , need to create new linked node to add tempList.next
 * 
 */
 var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let tempList = new ListNode()
    let result = tempList
    while(l1 || l2){
        let l1Number = l1 ? l1.val : 0
        let l2Number = l2 ? l2.val : 0
        let sum = l1Number + l2Number + carry 
        carry = parseInt(sum / 10)
        sum = sum % 10

        tempList.next  = new ListNode(sum,null)
        tempList = tempList.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }

    if(carry) tempList.next = new ListNode(carry,null)
    return result.next
};

