const imoveis = [];
let opcao = "";
let count = 0;

do {
  opcao = prompt(
    "Cadastro de imóveis.\nQuantidade de imóveis cadastrados: " +
      imoveis.length +
      "\n\n1 - Salvar um imóvel\n2 - Mostrar imóveis salvos\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Qual o nome do proprietario?");
      imovel.quantidadeQuartos = prompt(
        "Qual a quantidade do quartos do imovel?"
      );
      imovel.quantidadeBanheiros = prompt(
        "Qual a quantidade de banheiros do imovel?"
      );
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirmacao = confirm(
        "Você tem certeza que quer salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuantidade de quartos: " +
          imovel.quantidadeQuartos +
          "\nQuantidade de banheiros: " +
          imovel.quantidadeBanheiros +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        count++;
      } else {
        alert("Cadastro cancelado!");
      }
      break;
    case "2":
      if (count == 0) {
        alert("Você não tem imóveis para exibir!");
      } else {
        for (let i = 0; i < imoveis.length; i++) {
          alert(
            "Imóvel " +
              (i + 1) +
              "\nProprietário: " +
              imoveis[i].proprietario +
              "\nQuantidade de quartos: " +
              imoveis[i].quantidadeQuartos +
              "\nQuantidade de banheiros: " +
              imoveis[i].quantidadeBanheiros +
              "\nGaragem: " +
              imoveis[i].garagem
          );
        }
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!\nOpções válidas: 1, 2, 3");
  }
} while (opcao !== "3");

alert("Volte sempre!");