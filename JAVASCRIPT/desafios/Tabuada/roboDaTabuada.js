// const numero = prompt("Digite um número para ver sua tabuada.");
// let tabuada = "";

// for(let i = 1; i <= 20; i++) {
//   tabuada += " -> " + numero + "*" + i + " = " + (numero * i) + "\n";
// }

// alert("Resultado da tabuada de " + numero + ":\n\n" + tabuada);


//buscando palindromos

let word = prompt("Type a word");
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

if (word == reversedWord) {
  alert(word + " is a palindrome");
} else {
  alert(
    word + " isn't a palindrome\n\n" + 
    word + " !== " + reversedWord
    );
}
