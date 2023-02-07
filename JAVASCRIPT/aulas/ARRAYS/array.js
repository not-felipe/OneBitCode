const arr = ["Jupiter", "Saturn", "Mars", "Earth", "Neptune", "Uranus"];
console.log(arr);
//ADICIONAR ELEMENTOS
//push

//INSERE UM ELEMENTO NA ULTIMA POSIÇÃO DA ARRAY, RETORNA O TAMANHO DA ARRAY
// arr.push("Mercury");
// console.log(arr);


//REMOVE O PRIMEIRO ELEMENTO DA ARRAY, RETORNA
// arr.shift();
// console.log(arr);


//INSERE UM ELEMENTO NA PRIMEIRA POSIÇÃO DA ARRAY, RETORNA O TAMANHO DA ARRAY
// arr.unshift("Jupiter");
// console.log(arr);

//REMOVE O ULTIMO ELEMENTO E RETORNA
// const ultimoElemento = arr.pop();
// console.log(arr);
// console.log(ultimoElemento);

//PESQUISAR POR UM ELEMENTO
//includes

// const inclui = arr.includes("Earth");
// console.log(inclui);

// indexOf
// const indice = arr.indexOf("Mars");
// console.log(indice);

//Cortar e Concatenar
//slice

// const planets = arr.slice(0, 4);
// console.log(planets);

//concat
const moons = ["Moon", "Fobos", "Deimos", "Europe", "Elara"];
const universe = arr.concat(moons, "Boros");
console.log(universe);

//SUBSTITUIÇÃO DOS ELEMENTOS
//splice

const elementoRemovido = universe.splice(4, 1, 'Neptune, the blue planet');
console.log(elementoRemovido);
