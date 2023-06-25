const body = document.querySelector('body');
const boton = document.querySelector('.color-boton');
const texto = document.querySelector('.color-texto');

const ColorAleatorioHex = () => {
  let digitos = '0123456789ABCDFG';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);

    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
};

boton.addEventListener('click', () => {
  let colorAleatorio = ColorAleatorioHex();

  console.log(colorAleatorio);

  texto.innerText = colorAleatorio;

  body.style.backgroundColor = colorAleatorio;
});
