const countConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let totalWays = 0
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const tempWord = target.replace(word, '')
      const countConstructRest = countConstruct(tempWord, wordBank, memo)
      memo[tempWord] = countConstructRest
      totalWays += countConstructRest
    }
  }

  return totalWays
}

console.log(countConstruct('abcdeffff', ['abc', 'def', 'ab', 'cd', 'eff', 'abcdef', 'fff']))