const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []
  for (let i = 0; i <= targetSum; i++) {
    if (!!table[i]) {
      for (let num of numbers) {
        const combination = [...table[i], num]
        if (!table[i + num] || combination.length < table[i + num].length) {
          table[i + num] = combination
        }
      }
    }
  }
  return table[targetSum]
}

console.log(bestSum(10, [1, 2, 8]))