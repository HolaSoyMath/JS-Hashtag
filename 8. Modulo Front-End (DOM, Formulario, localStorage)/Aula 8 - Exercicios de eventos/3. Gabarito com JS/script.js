// onmouseover="this.style.color='red'"
// onmouseout="this.style.color='black'"

function mudarCor(elemento, cor) {
  elemento.style.color=cor;
}

// alert('Botão clicado!')

function clicarBotao() {
  alert('Botão clicado!');
}

// onfocus="this.value='Campo em foco'"
// onblur="this.value=''"

function campoEmFoco(elemento) {
  elemento.value = 'Campo em Foco';
}

function campoForaFoco(elemento) {
  elemento.value = '';
}

function mudarImagem(imagem, novoSrc) {
  imagem.src = novoSrc;
}