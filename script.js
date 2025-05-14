function mincost(arr) {
    arr.sort((a, b) => a - b);
    let cost = 0;

    while (arr.length > 1) {
        let first = arr.shift();
        let second = arr.shift();
        let sum = first + second;
        cost += sum;
        
        // Insert back in sorted position (binary insertion for better perf could be added)
        let i = 0;
        while (i < arr.length && arr[i] < sum) i++;
        arr.splice(i, 0, sum);
    }

    return cost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6]));     // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));  // Output: 33
