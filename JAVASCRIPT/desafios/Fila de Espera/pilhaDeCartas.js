let baralho = [];
let option = "";

do {
  option = prompt(
    "Cartas:\n" +
      baralho.length +
      "\n\nEscolha uma opção:\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair."
  );

  switch (option) {
    case "1":
      const novaCarta = prompt("Digite o nome da carta.");
      baralho.push(novaCarta);
      break;
    case "2":
      const cartaRemovida = baralho.pop();
      if (cartaRemovida) {
        alert("Você removeu a carta de nome: " + cartaRemovida);
      } else {
        alert("Não existem cartas no baralho.");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida");
  }
} while (option !== "3");
