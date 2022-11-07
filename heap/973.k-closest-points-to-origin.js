/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let len = points.length
    if (k > len) return points
    const heap = new MaxHeap(points.slice(0, k))
    for (let i = k; i < len; i++) {
        if (square(heap.top()) > square(arr[i])) {
            heap.extract()
            heap.insert(arr[i])
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
            if (square(container[index]) < square(container[parent])) {
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
    return Math.abs(data[0] * 2) + Math.abs(data[1] * 2)
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}