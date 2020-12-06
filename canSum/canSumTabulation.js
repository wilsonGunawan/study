const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)
  table[0] = true

  for (let i = 0; i < table.length; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        if (table.length > (i + num)) {
          table[i + num] = true
        }
      }
    }
  }
  return table[targetSum]
}

console.log(canSum(7, [2, 3]))