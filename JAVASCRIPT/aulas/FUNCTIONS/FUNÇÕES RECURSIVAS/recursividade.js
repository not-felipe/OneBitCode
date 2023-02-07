function fatorial(num) {
  console.log(num + " * " + (num - 1) + "!");
  if (num == 0) {
    return 1;
  } else if (num == 1) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}

console.log("\n" + fatorial(5));
