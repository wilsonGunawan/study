const bubbleSort = (arr) => {
  const n = arr.length

  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] += arr[j + 1]
        arr[j + 1] = arr[j] - arr[j + 1]
        arr[j] -= arr[j + 1]
      }
    }
  }
  return arr
}

console.log(bubbleSort([1, 7, 2, 9, 10, 20, 20, 9]))