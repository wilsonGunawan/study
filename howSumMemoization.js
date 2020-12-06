const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum < 0) return null
  if (targetSum === 0) return []
  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo)
    memo[remainder] = remainderResult
    if (!!remainderResult) {
      return [...remainderResult, num]
    }
  }
  memo[targetSum] = null
  return null
}

let memo = {}
console.log(howSum(10, [2, 3], memo))
console.log(memo)