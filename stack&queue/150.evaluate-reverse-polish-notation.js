/**
 * 
 * 參考別人解題方法，使用 stack
 * 
 * 1. 遇到數字時存入 stack，遇到運算符時，出棧兩次n2,n1(須確保棧內擁有兩個數字以上)，第一次出棧的放運算式後面 
 * ex: n1 + n2
 * 再把計算的結果推入棧
 * 
 * 2. 使用物件來定義 +,-,*,/ 的運算規則
 * 
 */
var evalRPN = function (tokens) {
    const stack = []
    const operator = {
        '+': function (n1, n2) {
            return +n1 + +n2
        },
        '-': function (n1, n2) {
            return +n1 - +n2
        },
        '*': function (n1, n2) {
            return +n1 * +n2
        },
        '/': function (n1, n2) {
            return parseInt(+n1 / +n2)
        },
    }

    for (let i = 0; i < tokens.length; i++) {
        let data = tokens[i]
        if (['+', '-', '*', '/'].includes(data)) {
            if (stack.length > 1) {
                const n2 = stack.pop()
                const n1 = stack.pop()
                const compute = operator[data](n1, n2)
                stack.push(compute)
            }
        } else {
            stack.push(data)
        }
    }

    return stack[0]
};