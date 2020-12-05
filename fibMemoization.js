const fib = (target, memo = {}) => {
  if (target in memo) return memo[target]
  if (target <= 2) return 1

  memo[target] = fib(target - 1, memo) + fib(target - 2, memo)
  return memo[target]
}

console.log(fib(100))