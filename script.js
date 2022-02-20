function adcionarTarefas() {
  const listaTarefa = document.querySelector('#lista-tarefas');
  const inputTarefa = document.querySelector('#texto-tarefa');
  const tarefaNova = document.createElement('li');
  tarefaNova.innerText = inputTarefa.value;
  listaTarefa.appendChild(tarefaNova);
  inputTarefa.value = '';
}

function efeitoBotaoAdicinar() {
  const botaoAdcionar = document.querySelector('#criar-tarefa');
  botaoAdcionar.addEventListener('click', adcionarTarefas);
}

efeitoBotaoAdicinar();
