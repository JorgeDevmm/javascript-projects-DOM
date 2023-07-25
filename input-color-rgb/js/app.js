// referencia el body
const html = document.querySelector('html');

// referenciamos los inputs
const inputRojo = document.querySelector('#color__rojo');
const inputVerde = document.querySelector('#color__verde');
const inputAzul = document.querySelector('#color__azul');

// referemciamos los parrafos
const textRojo = document.querySelector('.color__text-rojo');
const textVerde = document.querySelector('.color__text-verde');
const textAzul = document.querySelector('.color__text-azul');

// referenciamos los valores por defecto de del rojo,verde,azul
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// asignar los valores de los inputs a los textos
textRojo.innerText = rojo;
textVerde.innerText = verde;
textAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  // guardamos el valor por value
  const colorRGB = `rgb(${rojo},${verde},${azul})`;

  // aplicamos el color al background de body
  html.style.backgroundColor = colorRGB;
}

// aplicar eventListener
inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;

  textRojo.innerText = rojo;

  actualizarColor(rojo, verde, azul);
});
inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;

  textVerde.innerText = verde;

  actualizarColor(rojo, verde, azul);
});
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;

  textAzul.innerText = azul;

  actualizarColor(rojo, verde, azul);
});
