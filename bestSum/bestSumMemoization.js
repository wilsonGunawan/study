const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []

  let shortestCombination = null
  for (let num of numbers) {
    const remainder = targetSum - num
    if (remainder >= 0) {
      const combination = bestSum(remainder, numbers, memo)
      memo[remainder] = combination
      if (combination !== null) {
        if (!shortestCombination || shortestCombination.length > combination.length) {
          shortestCombination = [...combination, num]
        }
      }
    }
  }

  memo[targetSum] = shortestCombination
  return shortestCombination
}

let memo = {}
console.log(bestSum(10, [1, 2, 3], memo))
console.log(memo)