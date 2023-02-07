// // function calcularMedia(a, b){
// //   const media = (a + b) / 2;
// //   return media;
// // }

// // resultado = calcularMedia(2, 7);
// // console.log(resultado);

// function criarProduto(nome, preco) {
//   const produto = {
//     nome,
//     preco,
//   };

//   return produto;
// }

// const novoProduto = criarProduto("PlayStation 5 2TB", 2500);
// console.log(novoProduto);

// function areaRetangulo(altura, base) {
//   return base * altura;
// }

// // console.log(areaRetangulo(2, 4));

// function areaQuadrado(lado) {
//   return areaRetangulo(lado, lado);
// }

// // console.log(areaQuadrado(8));

// function ola() {
//   let texto = "...";
//   texto = "Olá, mundo!";
//   return texto;
// }

// console.log(ola());

function maioridade(idade){
  if(idade >= 18){
    return "Maior de idade";
  }
  else{
    return "Menor de idade";
  }
}

const idade = prompt("Qual sua idade?");
console.log(maioridade(idade));