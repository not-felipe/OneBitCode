document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSession").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva na session storage é: " + info);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const text = localStorage.getItem("text");
  alert("O texto salvo no local storage é: " + text);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // cookieName =value; expires =UTCStringDate;path = /
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 4, 8) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName =value; expires =UTCStringDate;path = /
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 5, 8) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
});
