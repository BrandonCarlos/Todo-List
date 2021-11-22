const botao  = document.querySelector('button');
const resp = document.querySelector('.resp');

botao.addEventListener('click', handleClick);

function handleClick(event) {
  const inputValor = document.forms[0].texto.value;
  const imagem = './img/mariobros.png';
  const paragrafo = criaP(inputValor, imagem);
  resp.appendChild(paragrafo);
}

function handleClickImage(event) {
  console.log(event.target.parentElement.remove());
}

function criaDiv() {
  const div = document.createElement('div');
  return div;
}

function criaP(valor, img) {
  const p_one = document.createElement('p');
  const image = document.createElement('img');
  p_one.innerText = valor;
  image.classList.add('mariobros');
  image.src = img;
  image.addEventListener('click', handleClickImage);
  const div = criaDiv();
  div.classList.add('resp-flex');
  div.appendChild(p_one);
  div.appendChild(image);
  return div;
}
