let line = [];
let option = "";
let count = 0;

do {
  let patients = "";
  for (let i = 0; i < line.length; i++) {
    patients += i + 1 + "º - " + line[i] + "\n";
  }

  option = prompt(
    "Pacientes:\n" +
      patients +
      "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
  );  

  switch (option) {
    case "1":
      const newPatient = prompt("Qual o nome do paciente?");
      line.push(newPatient);
      count++;
      break;
    case "2":
      if(count <= 0){
        alert("Você não tem pacientes na fila!");
      }
      else{
      const consultedPatient = line.shift();
      alert(consultedPatient + " foi removido da fila.");
      count--;
    }
      break;
    case "3":
      alert("Você saiu da aplicação!");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== "3");
