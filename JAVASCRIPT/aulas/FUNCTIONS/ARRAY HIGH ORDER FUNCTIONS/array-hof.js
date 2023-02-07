const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// Método tradicional

// const nomes = [];
// for (let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome);
// }

// Map
// Serve para fazer transformações no array (Cria um novo array)

const nomes = personagens.map(function (personagem) {
  return personagem.nome;
});

// FORMA SIMPLIFICADA
// const nomes = personagens.map((personagem) => personagem.nome);

console.log(nomes);

// Filter

//Método tradicional

// const orcs = [];
// for (let i = 0; i < personagens.length; i++) {
//    if(personagens[i].raca === "Orc") {
//     orcs.push(personagens[i]);
//    }
// }

// Utilizando a função filter

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});

console.log(orcs);

// FORMA SIMPLIFICADA

// const orcs = personagens.filter((personagem) => personagem.raca === "Orc");

// console.log(orcs);

// Reduce
// Retorna um valor a medida que o "Reduce" é executado

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0);

console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }

  return valorAcumulado;
}, {});

console.log(racas);

// Sort
// Método de ordenação
// Altera o array original

const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return b.nivel - a.nivel; //comparação entre dois elementos, se o retorno for positivo vai colocar o A para frente;
});

console.log(personagens);
console.log(personagensOrdenados);