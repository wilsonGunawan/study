const canConstruct = (word, wordBank, memo = {}) => {
  if (word in memo) return memo[word]
  if (word === '') return true
  for (let w of wordBank) {
      if (word.startsWith(w)) {
        const tempWord = word.replace(w, '')
        const canConstructTemp = canConstruct(tempWord, wordBank, memo)
        memo[tempWord] = canConstructTemp
        if (canConstructTemp) return true
      }
  }
  memo[word] = false
  return false
}

console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
  'eeeeeee'
]))