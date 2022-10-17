
/**
 * 題目要求全部操作都必須 O(1), 這是該題難點
 * 
 * 1. 用一個棧維護正常棧的行為
 * 2. 用另一個陣列 (minValueStack) 來記錄棧每個元素的最小值,必須與前一項做比較
 * 3. 但是當第一次填值時會找不到前一項, 所以 minValueStack 需要預設一個最大值
 * 
 */
var MinStack = function() {
  this.stack = []
  this.minValueStack = [Infinity]
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  const lastMinValue = this.minValueStack[this.minValueStack.length -1]
  lastMinValue > val ? this.minValueStack.push(val) : this.minValueStack.push(lastMinValue)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minValueStack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length -1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minValueStack[this.minValueStack.length -1]
  
};