
const listaAmigos = [];
const inputAmigo= document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos")
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  const nombres = inputAmigo.value.trim();
  let mensajeError = "";

  mensajeError = nombres === "" ? "Por favor, inserte un nombre" :
    /\d/.test(nombres) ? "Tu nombre no puede tener números, elige otro :)" :
    /[^a-zA-Z\s]/.test(nombres) ? "Tu nombre no puede tener signos (@, #, $, *, etc...), elige otro" :
    listaAmigos.includes(nombres) ? "Este nombre ya existe, crea otro" : "";

  if (mensajeError) {
    alert(mensajeError);
    return limpiarCaja();
  }

  listaAmigos.push(nombres);
  ulListaAmigos.innerHTML += `<li>${nombres}</li>`;
  limpiarCaja();
  actualizarListaAmigos();
}
  
function actualizarListaAmigos(){
ulListaAmigos.innerHTML= "";
  for (let i=0; i< listaAmigos.length; i++){
    ulListaAmigos.innerHTML += `<li>${listaAmigos[i]}</li>`;
  }
}

function limpiarCaja(){
  document.getElementById("amigo").value = "";
  }

function sortearAmigo(){
const random = Math.floor (Math.random()*listaAmigos.length);
const amigoSecreto = listaAmigos[random];
ulResultado.innerHTML = `<p>Tu amigo secreto es ${amigoSecreto}</p>`
}
