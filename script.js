class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const current = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (current >= parent) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = current;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const current = this.heap[0];

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

function mincost(arr) {
    const heap = new MinHeap();
    for (let num of arr) {
        heap.insert(num);
    }

    let totalCost = 0;
    while (heap.size() > 1) {
        const first = heap.extractMin();
        const second = heap.extractMin();
        const cost = first + second;
        totalCost += cost;
        heap.insert(cost);
    }

    return totalCost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6]));     // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));  // Output: 33
