const lista = document.getElementById('list');

function adicionarItem() {
  const novaLi = document.createElement('li');
  novaLi.textContent = 'Novo Item';

  lista.appendChild(novaLi);
}

function removerItem() {
  const ultimoItem = lista.lastElementChild;

  lista.removeChild(ultimoItem);
}