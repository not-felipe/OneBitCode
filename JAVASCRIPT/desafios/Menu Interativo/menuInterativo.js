let alternativa = "";

do {
  alternativa = prompt(
    "1 - Alternativa" +
      "\n2 - Alternativa" +
      "\n3 - Alternativa" +
      "\n4 - Alternativa" +
      "\n5 - Encerrar"
  );
  switch (alternativa) {
    case "1":
      alert("Você escolheu a opção 1");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      break;
    case "3":
      alert("Você escolheu a opção 3");
      break;
    case "4":
      alert("Você escolheu a opção 4");
      break;
    case "5":
      alert("Você escolheu encerrar o programa.");
      break;
    default:
      alert("Opção inválida");
  }
} while (alternativa != "5");

alert("O programa foi encerrado!\nVolte sempre!");
