const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true

  for (let num of numbers) {
    const remainder = targetSum - num
    if (remainder >= 0) {
      const remainderResult = canSum(remainder, numbers, memo)
      if (remainderResult === true) {
        memo[remainderResult] = true
        return true
      }
    }
  }

  memo[targetSum] = false
  return false
}

console.log(canSum(1000, [6, 3]))