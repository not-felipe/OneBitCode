function dobro(x) {
  alert("O dobro de " + x + " é: " + x * 2);
}

// numero = parseFloat(prompt("Digite o número que você deseja dobrar"));

// dobro(numero);

function ola(nome = "Mundo") {
  alert("Olá, " + nome + "!");
}

// let nome = prompt("Digite o seu nome");
// ola(nome);
// ola();

function sum(a, b) {
  alert("O resultado da soma é: " + (a + b));
}

// let numero1 = parseFloat(prompt("Digite o primeiro número da soma"));
// let numero2 = parseFloat(prompt("Digite o segundo número da soma"));

// sum(numero1, numero2);

function createUser(username, password, email, type = "User") {
  const user = {
    username, //forma abreviada de username: username
    password,
    email,
    type,
  };

  console.log(user);
}

// createUser("Felipe Alves", "09042004", "felipealvesmontes123@gmail.com", "Admin");

function muitosParametros(nome, telefone, endereco, email, senha, aniversario){
  //
}

function objetoComoParametro(usuario){
  usuario.nome
  usuario.telefone
  usuario.endereco
  usuario.email
  usuario.senha
  usuario.aniversario

  console.log(usuario)
}

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: ""
}

objetoComoParametro(dadosDoUsuario);