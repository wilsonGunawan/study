const canConstruct = (word, wordBank) => {
  const table = Array(word.length + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= word.length; i++) {
    if (table[i] === true) {
      for (let w of wordBank) {
        if (word.slice(i, i + w.length) === w) {
          table[i + w.length] = true
        }
      }
    }
  }

  return table[word.length]
}

console.log(canConstruct('eeeeeee', ['eee', 'e', 'eeee', 'eeeeee']))