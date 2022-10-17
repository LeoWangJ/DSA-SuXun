/**
 * 用兩個 queue 概念與 232 差不多， 此題直接挑戰 follow-up (要求用一個 queue 實作出來)
 * 
 * 1. 先進先出的話，可以把元素出隊後再入隊， 這樣可以讓原先最後一個入隊的值出隊，以此模擬 stack 出棧的情況
 * 2. 問題則是如何記錄原先最後入隊的元素是否到隊頭
 * 3. 用一個變數記錄當前最後元素索引，出隊一個元素時，則 -1, 就可以記錄
 * 
 */
var MyStack = function () {
    this.queue = []
    this.lastIndex = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x)
    this.lastIndex = this.queue.length - 1
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    this.lastIndex = this.queue.length - 1
    while (this.lastIndex) {
        let shiftData = this.queue.shift()
        this.lastIndex--
        this.queue.push(shiftData)
    }
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue[this.queue.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length === 0
};