const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = input.value === "" ? "Olá mundo" : "";
});

document.getElementById("type").addEventListener("click", function () {
  input.setAttribute("type", "password");
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = input.placeholder === "placeholder" ? "" : "placeholder";
});

document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById('data').addEventListener('click', function(){
  const data = input.dataset.something;
  console.log("O valor do atributo data-something é: " + data);
})