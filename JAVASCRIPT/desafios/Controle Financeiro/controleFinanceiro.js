let money = Number(prompt("Type the initial amount of money: "));
let sumValue;
let subValue;

let options = "";

do {
  options = prompt(
    "What do you want to do?\n1 - Add money.\n2 - Remove money.\n3 - Exit."
  );
  switch (options) {
    case "1":
      sumValue = Number(prompt("How much you wanna add?"));
      money += sumValue;
      alert("You added " + sumValue + " and now you have: " + money);
      break;

    case "2":
      subValue = Number(prompt("How much do you wanna remove?"));
      money -= subValue;
      alert("You removed " + subValue + " and now you have: " + money);
      break;

    case "3":
      break;

    default:
      alert("Invalid Option!");
  }
} while (options != "3");

alert("Program closed!\nPress F5 to use it again!\nCheck back often!");
