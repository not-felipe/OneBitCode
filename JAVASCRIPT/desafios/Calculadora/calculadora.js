let numero1 = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite outro número: "));

soma = numero1 + numero2;
sub = numero1 - numero2;
mul = numero1 * numero2;
divQuebra = numero1 / numero2; // DUAS VARIAVEIS FORAM CRIADAS PARA QUE A DIVISAO FOSSE TRANCADA EM 2 CASAS DECIMAIS
div = divQuebra.toFixed(2);

alert("RESULTADO DAS OPERAÇÕES :\n" + "SOMA: " + soma + "\n" + "MULTIPLICAÇÃO: " + mul + "\n" + "DIVISÃO: " + div + "\n" + "SUBTRAÇÃO: " + sub)