const input = document.getElementById('taskInput');
const ul = document.getElementById('taskList');

function addTask() {
  if (input.value !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;

    // Adicionar botão apra remover a tarefa
    const removerBotao = document.createElement('button');
    removerBotao.textContent = 'Remover';
    removerBotao.onclick = function () {
      ul.removeChild(li);
    }

    // Adicionar os elementos na lista
    li.appendChild(removerBotao);
    ul.appendChild(li);

    // Limpar input
    input.value = '';
  } else {
    alert('Por favor, insira uma tarefa!')
  }
}