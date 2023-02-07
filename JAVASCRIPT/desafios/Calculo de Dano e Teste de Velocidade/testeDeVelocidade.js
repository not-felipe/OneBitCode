const veiculo1 = prompt("Nome do veículo:");
const velocidadeVeiculo1 = parseFloat(prompt("Velocidade do veículo:"));

const veiculo2 = prompt("Nome do outro veículo:");
const velocidadeVeiculo2 = parseFloat(prompt("Velocidade do outro veículo:"));

if (velocidadeVeiculo1 == velocidadeVeiculo2){
  alert("Veículos tem a mesma velocidade");
}else if (velocidadeVeiculo1 > velocidadeVeiculo2){
  alert(veiculo1 + " é mais rápido que o veículo " + veiculo2);
}
else{
  alert(veiculo2 + " é mais rápido que o " + veiculo1);
}