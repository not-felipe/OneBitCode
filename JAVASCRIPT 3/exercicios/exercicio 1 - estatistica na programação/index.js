const media = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}

const mediaPonderada = (...entries) => {
  const sum = entries.reduce((accum, { n, p }) => accum + n * p, 0)
  const weightSum = entries.reduce((accum, entry) => accum + entry.p, 0)
  return sum / weightSum
}

const mediana = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 == 0) {
    return (orderedNumbers[middle - 1] + orderedNumbers[middle]) / 2
  } else return orderedNumbers[middle]
}

const moda = (...numbers) => {
  const quantidades = numbers.map((num) => [num, numbers.filter((n) => num === n).length])
  quantidades.sort((a, b) => b[1] - a[1])
  return quantidades[0][0]
}
