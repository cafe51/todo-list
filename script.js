const listaTarefa = document.querySelector('#lista-tarefas');

function adcionarTarefas() {
  const inputTarefa = document.querySelector('#texto-tarefa');
  const tarefaNova = document.createElement('li');
  tarefaNova.setAttribute('class', 'tarefa');
  tarefaNova.innerText = inputTarefa.value;
  listaTarefa.appendChild(tarefaNova);
  inputTarefa.value = '';
}

function efeitoBotaoAdicinar() {
  const botaoAdcionar = document.querySelector('#criar-tarefa');
  botaoAdcionar.addEventListener('click', adcionarTarefas);
}

function removeDestacados() {
  const itens = listaTarefa.children;
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].classList.remove('destacado');
  }
}

function listaCinza(evt) {
  const alvo = evt.target;
  removeDestacados();
  if (alvo.classList[0] === 'tarefa') {
    alvo.classList.add('destacado');
  }
}

function efeitoListaCinza() {
  listaTarefa.addEventListener('click', listaCinza);
}

function listaRiscada(evt) {
  const alvo = evt.target;
  if (alvo.classList[1] !== 'completed' && alvo.classList[2] !== 'completed') {
    alvo.classList.add('completed');
  } else alvo.classList.remove('completed');
}

function efeitoListaRiscada() {
  listaTarefa.addEventListener('dblclick', listaRiscada);
}

function apagaTudo() {
  const tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].parentNode.removeChild(tarefas[i]);
  }
}

function botaoApagaTudoEvento() {
  const botaoApagaTudo = document.querySelector('#apaga-tudo');
  botaoApagaTudo.addEventListener('click', apagaTudo);
}

function apagaFinalizados() {
  const tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList[2] === 'completed' || tarefas[i].classList[1] === 'completed') {
      tarefas[i].parentNode.removeChild(tarefas[i]);
    }
  }
}

function botaoApagaFinalizadosEvento() {
  const botaoApagaFinalizados = document.querySelector('#remover-finalizados');
  botaoApagaFinalizados.addEventListener('click', apagaFinalizados);
}

function apagaSelecionado() {
  const tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList[2] === 'destacado' || tarefas[i].classList[1] === 'destacado') {
      tarefas[i].parentNode.removeChild(tarefas[i]);
    }
  }
}

function botaoApagaSelecionadoEvento() {
  const botaoApagaSelecionado = document.querySelector('#remover-selecionado');
  botaoApagaSelecionado.addEventListener('click', apagaSelecionado);
}

function transferePropriedades(objeto1, objeto2) {
  objeto1.className = objeto2.className;
  objeto1.innerText = objeto2.innerText;
}

function sobeSelecionado() {
  const tarefas = document.querySelectorAll('.tarefa');
  const aux = document.createElement('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    if ((tarefas[i].classList[1] === 'destacado' || tarefas[i].classList[2]) && i > 0) {
      transferePropriedades(aux, tarefas[i - 1]);
      transferePropriedades(tarefas[i - 1], tarefas[i]);
      transferePropriedades(tarefas[i], aux);
    }
  }
}

function botaoSobeEvento() {
  const botaoSobeSelecionado = document.querySelector('#mover-cima');
  botaoSobeSelecionado.addEventListener('click', sobeSelecionado);
}

function desceSelecionado() {
  const tarefas = document.querySelectorAll('.tarefa');
  const aux = document.createElement('li');
  const limite = (tarefas.length - 1);
  for (let i = tarefas.length - 1; i >= 0; i -= 1) {
    if ((tarefas[i].classList[1] === 'destacado' || tarefas[i].classList[2]) && i !== limite) {
      transferePropriedades(aux, tarefas[i + 1]);
      transferePropriedades(tarefas[i + 1], tarefas[i]);
      transferePropriedades(tarefas[i], aux);
    }
  }
}

function botaoDesceEvento() {
  const botaoSobeSelecionado = document.querySelector('#mover-baixo');
  botaoSobeSelecionado.addEventListener('click', desceSelecionado);
}

function carregaListaSalva() {
  apagaTudo();
  const listaSalvaText = [];
  const listaSalvaClass = [];
  for (let i = 0; i < localStorage.length / 2; i += 1) {
    listaSalvaText[i] = localStorage.getItem(`listaText${i}`);
    listaSalvaClass[i] = localStorage.getItem(`listaClass${i}`);
    if (listaSalvaText[i] !== '[object HTMLOListElement]') {
      const li = document.createElement('li');
      li.className = listaSalvaClass[i];
      li.innerText = listaSalvaText[i];
      listaTarefa.appendChild(li);
    }
  }
  removeDestacados();
}

function addListToLocalStorage() {
  const listaPraSalvar = listaTarefa.children;
  localStorage.clear();
  for (let i = 0; i < listaPraSalvar.length; i += 1) {
    localStorage.setItem(`listaText${i}`, listaTarefa.children[i].innerText);
    localStorage.setItem(`listaClass${i}`, listaTarefa.children[i].className);
  }
}

function botaoSalvaEvento() {
  const botaoSalva = document.querySelector('#salvar-tarefas');
  botaoSalva.addEventListener('click', addListToLocalStorage);
}

function botaoCarregaEvento() {
  const botaoSalva = document.querySelector('#carrega-tarefas');
  botaoSalva.addEventListener('click', carregaListaSalva);
}

efeitoBotaoAdicinar();

efeitoListaCinza();

efeitoListaRiscada();

botaoApagaTudoEvento();

botaoApagaFinalizadosEvento();

botaoApagaSelecionadoEvento();

botaoSobeEvento();

botaoDesceEvento();

carregaListaSalva();

botaoSalvaEvento();

botaoCarregaEvento();
