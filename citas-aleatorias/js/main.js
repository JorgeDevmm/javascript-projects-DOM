// referencias del Dom
let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min, max) {
  // sin incluir maximo en lo valores posibles
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
  // generamos una variable indice para guardar el valor del aleatorio, con inicio de 0 del arreglo de citas y su maximo como logintud
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);

  citaElem.textContent = `"${citas[indiceAleatorio].texto}"`;
  autorElem.textContent = citas[indiceAleatorio].autor;
}

cambiarCita();
botonElem.addEventListener('click', cambiarCita);
