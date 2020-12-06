const gridTraveler = (x, y) => {
  const table = Array(x + 1).fill().map(arr => Array(y + 1).fill(0))
  table[1][1] = 1
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      if (i + 1 <= x) table[i + 1][j] += table[i][j]
      if (j + 1 <= y) table[i][j + 1] += table[i][j]
    }
  }
  return table[x][y]
}

console.log(gridTraveler(3, 3))