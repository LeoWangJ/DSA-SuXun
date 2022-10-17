/**
 * 用 棧 模擬 隊列
 * 使用 先進後出 模擬 先進先出
 * 
 * 1. 用兩個棧來模擬，一個專門存資料， 一個用來將存資料的棧彈出後存進來，這樣棧頂就會是最早進入的值
 * 2. 不過要注意到如果專門出棧的陣列還有值的話，則不該再存值進去，因為代表該棧頂的值是最早進去的，不然棧的順序會亂掉
 */

var MyQueue = function () {
    this.pushStack = []
    this.popStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.pushStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (!this.popStack.length) {
        while (this.pushStack.length) {
            this.popStack.push(this.pushStack.pop())
        }
    }
    return this.popStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (!this.popStack.length) {
        while (this.pushStack.length) {
            this.popStack.push(this.pushStack.pop())
        }
    }
    return this.popStack[this.popStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.pushStack.length === 0 && this.popStack.length === 0
};
