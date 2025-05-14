function mincost(arr) {
    // Use a Min Heap to always get the two smallest ropes
    let minHeap = [...arr];
    minHeap.sort((a, b) => a - b); // Initially sort the array to simulate a heap

    let totalCost = 0;

    while (minHeap.length > 1) {
        // Extract the two smallest ropes
        let first = minHeap.shift();
        let second = minHeap.shift();

        // Combine them
        let cost = first + second;
        totalCost += cost;

        // Insert the new rope back into the heap and sort again
        minHeap.push(cost);
        minHeap.sort((a, b) => a - b);
    }

    return totalCost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
