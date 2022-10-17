/**
 * @param {string} s
 * @return {boolean}
 * 
 * 1. 先用一個物件來定義合格的左括號對應的右括號值
 * ex: 
 * const validParentheses = {
 *     ')':'(',
 *     '}':'{',
 *     ']':'['
 *   }
 * 
 * 2. 接著用 stack 資料結構來判斷是否棧頂的左括號與當前的右括號相對應
 */
 var isValid = function(s) {
  const validParentheses = {
    ')':'(',
    '}':'{',
    ']':'['
  }
  const stack = []
  
  for(let i = 0;i< s.length;i++){

    if(['(','{','['].includes(s[i])){
      stack.push(s[i])
      continue
    }else{

      if(stack[stack.length -1] !== validParentheses[s[i]]){
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
};