function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(5, 2, 1, 7, 4, 10, 503, 90));
