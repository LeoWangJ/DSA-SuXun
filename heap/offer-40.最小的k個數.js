/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 先塞入 k 筆資料，若比 top 還小的話，則將 top 移除，並且塞入當前值
 * 由於是最大堆， top值將會是整個陣列最大的值，最後結果將會是最小 k 個數
 */
var getLeastNumbers = function (arr, k) {
    let len = arr.length
    if (k >= len) return arr
    const heap = new MaxHeap(arr.slice(0, k))
    for (let i = k; i < len; i++) {
        if (heap.top() > arr[i]) {
            heap.extract()
            heap.insert(arr[i])
        }
    }
    return heap.container
};

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * 最大堆
 * https://shubo.io/binary-heap/
 */
class MaxHeap {
    constructor(arr = []) {
        this.container = []
        if (Array.isArray(arr)) {
            arr.forEach(this.insert.bind(this))
        }
    }
    /**
     * 插入至陣列最後一個索引，在與父節點互相比對，若比父節點大，則交換
     */
    insert(data) {
        const { container } = this
        container.push(data)
        let index = container.length - 1
        while (index) {
            let parent = Math.floor((index - 1) / 2)
            if (container[index] <= container[parent]) {
                break
            }
            swap(container, index, parent)
            index = parent
        }
    }

    /**
     * 首先第一項與最後一項做交換，接著移除被放置到最後一項的元素
     * 接著從頭開始判斷是否比子結點小，若較大則不做交換，若較小必須先判斷兩個子結點哪個較大，因為是最大堆，所以必須將較大的元素與該節點做交換
     */
    extract() {
        const { container } = this
        if (!container.length) return null
        swap(container, 0, container.length - 1)
        let result = container.pop()
        let len = container.length
        let index = 0, exchange = index * 2 + 1
        while (exchange < len) {
            let right = index * 2 + 2
            if (right < len && container[right] > container[exchange]) {
                exchange = right
            }
            if (container[exchange] <= container[index]) {
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