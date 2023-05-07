const towns = [
  "Rio de Janeiro",
  "São Paulo",
  "Belo Horizonte",
  "Vitória",
  "Salvador",
  "Campo Grande",
  "Curitiba",
];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Brasília");

console.log({ towns, townsCopy });

const townsClone = [...towns];
townsClone.push("Maceió");
console.log({ towns, townsCopy, townsClone });

const townsObject = { ...towns };
const townsObjectClone = { ...townsObject };
townsObjectClone.test = "Test";

console.log({ townsObject, townsObjectClone });
