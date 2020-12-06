const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum < 0) return null
  if (targetSum === 0) return []
  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo)
    if (!!remainderResult) {
      memo[remainder] = [...remainderResult, num]
      return memo[remainder]
    }
  }
  memo[targetSum] = null
  return null
}

console.log(howSum(70, [2, 3]))