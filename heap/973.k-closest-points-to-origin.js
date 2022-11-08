/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 * 
 * 實作一個最大堆，其中值使用平方相加的距離即可，與 offer 40. 思路相同
 * 
 */
var kClosest = function (points, k) {
    let len = points.length
    if (k > len) return points
    const heap = new MaxHeap(points.slice(0, k))
    for (let i = k; i < len; i++) {
        if (square(heap.top()) > square(points[i])) {
            heap.extract()
            heap.insert(points[i])
        }
    }
    return heap.container
};


class MaxHeap {
    constructor(arr = []) {
        this.container = []
        if (Array.isArray(arr)) {
            arr.forEach(this.insert.bind(this))
        }
    }

    insert(data) {
        const { container } = this
        container.push(data)
        let index = container.length - 1
        while (index) {
            let parent = Math.floor((index - 1) / 2)
            if (square(container[index]) <= square(container[parent])) {
                break
            }
            swap(container, index, parent)
            index = parent
        }
    }

    extract() {
        const { container } = this
        if (!container.length) return null
        swap(container, 0, container.length - 1)
        let result = container.pop()
        let len = container.length
        let index = 0, exchange = index * 2 + 1
        while (exchange < len) {
            let right = index * 2 + 2
            if (right < len & square(container[right]) > square(container[exchange])) {
                exchange = right
            }
            if (square(container[exchange]) <= square(container[index])) {
                break
            }
            swap(container, exchange, index)
            index = exchange
            exchange = index * 2 + 1
        }
        return result
    }

    top() {
        if (this.container.length) return this.container[0]
        return null
    }
}

function square(data) {
    if (!data) return
    return Math.sqrt(Math.abs(data[0] * data[0]) + Math.abs(data[1] * data[1]))
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}