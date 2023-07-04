const body = document.querySelector('html');

const inputRojo = document.getElementById('color__rojo');
const inputVerde = document.getElementById('color__verde');
const inputAzul = document.getElementById('color__azul');

const textoRojo = document.querySelector('.color__text-rojo');
const textoVerde = document.querySelector('.color__text-verde');
const textoAzul = document.querySelector('.color__text-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  let colorRGB = `rgb(${rojo},${verde},${azul})`;

  // establesco el color de fondo
  body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;

  textoRojo.textContent = rojo;

  actualizarColor(rojo, verde, azul);
});
inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;

  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;

  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});
