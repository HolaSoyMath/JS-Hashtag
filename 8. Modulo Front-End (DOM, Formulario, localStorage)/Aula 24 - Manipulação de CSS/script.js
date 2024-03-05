let meuElemento = document.getElementById('meuElemento');

function tornarCirculo() {
  meuElemento.classList.add('circle');
  meuElemento.classList.remove('square');
}

function tornarQuadrado() {
  meuElemento.classList.add('square');
  meuElemento.classList.remove('circle');
}

function bordaMenor() {
  meuElemento.classList.remove('circle');
  meuElemento.classList.remove('square');
}

function alternarFormato() {
  meuElemento.classList.toggle('circle');
  meuElemento.classList.toggle('square');
  meuElemento.classList.toggle('bordaMenor');
}

function verificarClasse() {
  if(meuElemento.classList.contains('circle')) {
    console.log('O elemento possui a classe circle')
  }else {
    console.log('O elemento possui a classe square')
  }
}