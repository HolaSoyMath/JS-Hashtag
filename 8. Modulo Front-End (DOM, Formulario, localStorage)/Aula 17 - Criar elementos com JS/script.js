function criarElemento() {
  const ul = document.getElementById('lista-de-elementos');
  
  const novaLi = document.createElement('li');
  ul.appendChild(novaLi);

  const novoInput = document.createElement('input');
  novaLi.appendChild(novoInput);

  console.log(ul);
}

function removerElemento() {
  const ul = document.getElementById('lista-de-elementos');
  const ultimoUl = ul.lastElementChild;
  ul.removeChild(ultimoUl);
}