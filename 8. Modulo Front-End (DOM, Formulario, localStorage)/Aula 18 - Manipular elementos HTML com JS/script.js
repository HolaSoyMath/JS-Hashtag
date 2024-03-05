function criarElementoInnerText() {
  const ul = document.getElementById('lista-de-elementos');
  const novaLi = document.createElement('li');
  const novoInput = document.createElement('input');
  
  novaLi.innerText = 'Novo input com InnerText ';
  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}

function criarElementoInnerHTML() {
  const ul = document.getElementById('lista-de-elementos');
  const novaLi = document.createElement('li');

  novaLi.innerHTML = '<input type="text" placeholder="Criado por InnerHTML"/>'
  ul.appendChild(novaLi);
}

function criarElementoTextContent() {
  const ul = document.getElementById('lista-de-elementos');
  const novaLi = document.createElement('li');
  const novoInput = document.createElement('input');

  novaLi.textContent = 'Atribuindo conteúdo TextContent ';
  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}

// innerText - texto
// textContent - texto
// innerHTML - conteúdo HTML e texto