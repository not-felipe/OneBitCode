function areaCirculo() {
  const raio = parseInt(prompt("Digite o valor do raio do círculo"));
  const pi = 3.14;
  return pi * (raio * raio);
}

function areaTrapezio() {
  const baseMenor = parseInt(prompt("Digite o valor da base menor"));
  const baseMaior = parseInt(prompt("Digite o valor da base maior"));
  const altura = parseInt(prompt("Digite o valor da altura do trapézio"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaQuadrado() {
  const lado = parseInt(prompt("Digite o valor do lado do quadrado"));
  return lado * lado;
}

function areaRetangulo() {
  const base = parseInt(prompt("Digite o valor da base do retângulo"));
  const altura = parseInt(prompt("Digite a altura do retângulo"));
  return base * altura;
}

function areaTriangulo() {
  const base = parseInt(prompt("Digite o valor da base do triângulo"));
  const altura = parseInt(prompt("Digite a altura do triângulo"));
  return (base * altura) / 2;
}

function exibirMenu() {
  return prompt(
    "===============Calculadora Geométrica===============\n" +
      "\n1. Calcular área do triângulo\n2. Calcular área do retângulo\n3. Calcular área do quadrado\n4. Calcular área do trapézio\n5. Calcular área do círculo\n6. Sair"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção inválida! Digite uma opção válida.");
    }

    if (resultado) {
      alert("O resultado é: " + resultado);
    }
  } while (opcao != "6");
}

executar();
