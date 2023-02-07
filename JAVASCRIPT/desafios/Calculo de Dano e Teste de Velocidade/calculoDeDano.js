const nomePersonagem1 = prompt('Digite o nome do primeiro personagem: ');
const poderDeAtaque1 = parseFloat(prompt('Qual o poder de ataque do '+ nomePersonagem1 + '?'));

const nomePersonagem2 = prompt('Digite o nome do segundo personagem: ');
const pontosDeVida2 = parseFloat(prompt('Quantos pontos de vida ' + nomePersonagem2 + ' tem?'));
const poderDeDefesa2 = parseFloat(prompt('Qual o poder de defesa do '+ nomePersonagem2 + '?'));
const escudo = confirm(nomePersonagem2 + " tem escudo?");

let dano = 0;

if(poderDeAtaque1 > poderDeDefesa2 && escudo == false) { 
  dano = poderDeAtaque1 - poderDeDefesa2; 
}
else if(poderDeAtaque1 > poderDeDefesa2 && escudo == true) {
  dano = (poderDeAtaque1 - poderDeDefesa2) / 2;
}
else if(poderDeAtaque1 < poderDeDefesa2){
  dano = 0;
}

const vidaRestante = pontosDeVida2 - dano;

alert('Dano sofrido: ' + dano + '\nVida restante: ' + vidaRestante);
