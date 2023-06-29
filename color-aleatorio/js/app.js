const body = document.querySelector('body');
const boton = document.querySelector('.color-boton');
const texto = document.querySelector('.color-texto');

const ColorAleatorioHex = () => {
  let digitos = '0123456789ABCDFG';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    // genera un numero pseudoaleatorio
    let indiceAleatorio = Math.floor(Math.random() * 16);

    // guardamos lov valore de los 6 indices indice en la variable
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
};

boton.addEventListener('click', () => {
  // obtenemos el color hexa de la función y lo almacenamos en la variable
  let colorAleatorio = ColorAleatorioHex();

  // modificamos el background
  body.style.backgroundColor = colorAleatorio;

  // modificamos el texto
  texto.textContent = colorAleatorio;
});
