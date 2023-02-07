const name = prompt("E aí turista! Qual seu nome?");
let count = 0;
let countries = '';
let haveVisited = prompt(name + ", você ja visitou algum país? 1 = SIM | 2 = NÃO");

while(haveVisited == 1 || haveVisited == "sim"){
  let countryName = prompt("Qual o nome do país?");
  countries += " - " + countryName + "\n";
  count++;
  haveVisited = prompt("Você ja visitou algum outro país? 1 = SIM | 2 = NÃO");
}


alert("Você visitou " + count + " países\n" + "Sendo eles:\n" + countries);