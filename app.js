
const listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos")
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  //Validaciones de entrada//
  if (inputAmigo.value === "") {
    alert("por favor, inserte un nombre");
    return limpiarCaja();
  }
  const regexNumero = /\d/
  if (regexNumero.test(inputAmigo.value)) {
    alert("Tu nombre no puede tener números, elige otro :)");
    return limpiarCaja();
  }
  const regexSigno = /[^a-zA-Z\s]/;
  if (regexSigno.test(inputAmigo.value)) {
    alert("Tu nombre no puede tener signos (@, #, $, *, etc...), elige otro");
    return limpiarCaja();
  }
  const nombres = inputAmigo.value.trim();
  if (listaAmigos.includes(nombres)) {
    alert("Este nombre ya existe, crea otro");
    return limpiarCaja();
  }
  listaAmigos.push(inputAmigo.value);
  ulListaAmigos.innerHTML += `<li>${listaAmigos.value}</li>`;

  limpiarCaja();
  actualizarListaAmigos();

}

function actualizarListaAmigos() {
  ulListaAmigos.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    ulListaAmigos.innerHTML += `<li>${listaAmigos[i]}</li>`;
  }
}

function limpiarCaja() {
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("Necesitas al menos 2 amigos para iniciar el sorteo");
    return;
  }
  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];
  ulResultado.innerHTML = `<p>Tu amigo secreto es ${amigoSecreto}</p>`
}