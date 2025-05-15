function mincost(arr) {
  /**
   * Calculates the minimum cost to connect ropes of given lengths.
   *
   * @param {number[]} arr An array of integers representing the lengths of the ropes.
   * @returns {number} The minimum cost to connect all the ropes.
   */
  if (!Array.isArray(arr) || arr.length < 1 || arr.length > 1000) {
    return 0; // Handle invalid input:  Return 0 for empty or invalid arrays per constraints.
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || arr[i] < 1 || arr[i] > 10000) {
      return 0; // Handle invalid input: Return 0 if any element is not a number or is outside the allowed range.
    }
  }
  // Create a min heap using an array and simulate priority queue.
  const minHeap = [...arr];

  // Function to heapify a subtree rooted at index i
  function heapify(arr, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      heapify(arr, n, smallest);
    }
  }

  // Function to build a min heap from an unsorted array
  function buildHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  }

    // Function to extract the minimum element from the heap
    function extractMin(arr) {
        const n = arr.length;
        if (n === 0) {
            return null; // Return null if the heap is empty
        }
        const min = arr[0];
        arr[0] = arr[n - 1];
        arr.pop();
        heapify(arr, arr.length, 0);
        return min;
    }

  // Build the min heap
  buildHeap(minHeap);

  let cost = 0;
  while (minHeap.length > 1) {
    // Get the two shortest ropes (smallest values from minHeap)
    const first = extractMin(minHeap);
    const second = extractMin(minHeap);
    if (first === null || second === null)
    {
        return cost;
    }
    const currentCost = first + second;
    cost += currentCost;
    minHeap.push(currentCost); // push the combined rope length
    heapify(minHeap, minHeap.length, 0); //maintain heap property
  }

  return cost;
}
