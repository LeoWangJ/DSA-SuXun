
/**
 * @param {number} capacity
 * 
 * The functions get and put must each run in O(1) average time complexity
 * 
 * array: add, delete O(n) X
 * singly linked list delete linked need previous linked need lookup (O(n)) X
 * double linked list delete & add O(1) ,but lookup O(n) X
 * use hash table can solve double linked list lookup O(n) problem
 * 
 * so we can combine double linked list & hash table 
 * 
 * 
 * construct
 * 
 * maintain 
 * 1. double linked list (use dummy head, tail convenience get head, tail)
 * 2. hash table 
 * 3. capacity
 * 4. current amount (count)
 * get:
 * 1. find node in hash table if null return -1
 * 2. if exist , return node
 * 3. update node to head linked (LRU) 
 * 
 * how to update node to head linked ?
 * 1. change node.prev's next to node.next
 * 2. change node.next's prev to node.prev
 * 3. set node.prev to dummyHead
 * 4. set node.next to dummyHead.next
 * 5. change dummyHead.next.prev to node
 * 6. change dummyHead.next to node
 * 
 * put:
 * 1. if node not exist in hash table, judge count is smaller than capacity
 *  if count is equal capacity, we need to remove tail node and delete hash table key
 * then add new nodeList to head, then count add 1, don't forget set key in hash table
 * 
 * 2. if exist just update node value and move node to head
 */

class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hash = {}
        this.count = 0
        this.dummyHead = new ListNode()
        this.dummyTail = new ListNode()
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }

    get(key) {
        let node = this.hash[key]
        if (!node) return -1
        this.moveToHead(node)
        return node.value
    }

    put(key, value) {
        let node = this.hash[key]
        if (!node) {
            if (this.count === this.capacity) {
                this.removeLRUItem()
            }
            let newNode = new ListNode(key, value)
            this.hash[key] = newNode
            this.addToHead(newNode)
            this.count++
        } else {
            node.value = value
            this.moveToHead(node)
        }
    }

    moveToHead(node) {
        this.removeFromList(node)
        this.addToHead(node)
    }

    removeFromList(node) {
        let prev = node.prev
        let next = node.next
        prev.next = next
        next.prev = prev
    }

    addToHead(node) {
        node.prev = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
    }

    removeLRUItem() {
        let tail = this.dummyTail.prev
        this.removeFromList(tail)
        delete this.hash[tail.key]
        this.count--
    }
}