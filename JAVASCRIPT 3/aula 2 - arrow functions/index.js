function sum(a, b) {
  return a + b;
}

console.log(`Soma normal = ${sum(10, 2)}`);

let anonSum = function (a, b) {
  return a + b;
};

console.log(`Soma função anônima = ${anonSum(5, 2)}`);

let arrowSum = (a, b) => a + b;

console.log(`Soma arrow function = ${arrowSum(20, 2)}`);

const arrowSubract = (a, b) => a - b;

console.log(`Subtração arrow function = ${arrowSubract(20, 15)}`);

const double = (a) => `O dobro de ${a} é: ${a * 2}`;

console.log(double(15));

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");

console.log(startingWithP);
