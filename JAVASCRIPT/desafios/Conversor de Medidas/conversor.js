const valorEmMetro = parseFloat(prompt("Insira um valor em metros"));

const alternativa = prompt("Você deseja converter para qual unidade de medida?\n\nMilímetro (mm)\nCentímetro (cm)\nDecímetro (dm)\nDecâmetro (dam)\nHectômetro (hm)\nQuilômetro (km)");

let valorConvertido = 0;

switch (alternativa){
  case "mm" || "milimetro" || "Milímetro":
    valorConvertido = valorEmMetro*1000;
    alert("Valor em metro: " + valorEmMetro + "\nValor convertido: " + valorConvertido + " mm");
    break;
  case "cm" || "centimetro" || "Centímetro":
    valorConvertido = valorEmMetro*100;
    alert("Valor em metro: " + valorEmMetro + "\nValor convertido: " + valorConvertido + " cm");
    break;
  case "dm" || "Decímetro" || "decimetro":
    valorConvertido = valorEmMetro*10;
    alert("Valor em metro: " + valorEmMetro + "\nValor convertido: " + valorConvertido + " dm");
    break;
  case "dam" || "Decâmetro" || "decametro":
    valorConvertido = valorEmMetro/10;
    alert("Valor em metro: " + valorEmMetro + "\nValor convertido: " + valorConvertido + " dam");
    break;
  case "hm" || "Hectômetro" || "hectometro":
    valorConvertido = valorEmMetro/100;
    alert("Valor em metro: " + valorEmMetro + "\nValor convertido: " + valorConvertido + " hm");
    break;
  case "km" || "Quilômetro" || "quilometro":
    valorConvertido = valorEmMetro/1000;
    alert("Valor em metro: " + valorEmMetro + "\nValor convertido: " + valorConvertido + " km");
    break;
  default:
    alert("Valor Desconhecido");
}
