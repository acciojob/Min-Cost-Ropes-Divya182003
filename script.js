function mincost(arr) {
  if (arr.length <= 1) return 0;

  // Min heap using a priority queue pattern
  const heap = [...arr];
  heap.sort((a, b) => a - b); // initial heapify

  let totalCost = 0;

  while (heap.length > 1) {
    // Pop two smallest elements
    const first = heap.shift();
    const second = heap.shift();

    const cost = first + second;
    totalCost += cost;

    // Insert the combined rope back into the heap
    heap.push(cost);
    heap.sort((a, b) => a - b); // Re-heapify
  }

  return totalCost;
}

module.exports = mincost;