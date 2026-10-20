
const nodeInputNumero = document.querySelector("form input[type=number]");
const nodeInputSubmit = document.querySelector("form input[type=submit]");
const nodeUlColecao = document.querySelector("#colecao ul");
const nodeUlRepetidos = document.querySelector("#repetidos ul");
const nodeTotalColecao = document.querySelector("#colecao span");
const nodeTotalRepetidos = document.querySelector("#repetidos span");
const form = document.querySelector("form");

const colecao = [];
const repetidos = [];

function guardaCarta() {
  const numero = Number(nodeInputNumero.value);

  if (colecao.includes(numero)) {
    repetidos.push(numero);
    repetidos.sort((a, b) => a - b);
  } else {
    colecao.push(numero);
    colecao.sort((a, b) => a - b);
  }

  guardaTudo();
  atualizaLista(colecao, nodeUlColecao);
  atualizaLista(repetidos, nodeUlRepetidos);

  nodeInputNumero.value = "";
  nodeInputNumero.focus();
}

function atualizaLista(lista, nodeUl) {
  nodeUl.innerHTML = "";

  lista.forEach((numero, i) => {
    const li = document.createElement("li");

    if (nodeUl === nodeUlRepetidos) {
      li.innerHTML = numero + " <button data-i='" + i + "'>eliminar</button>";
    } else {
      li.textContent = numero;
    }

    nodeUl.append(li);
  });

  nodeTotalColecao.textContent = colecao.length;
  nodeTotalRepetidos.textContent = repetidos.length;

  ligaBotoesEliminar();
}

function eliminaRepetido(i) {
  repetidos.splice(i, 1);
  guardaTudo();
  atualizaLista(repetidos, nodeUlRepetidos);
}

function guardaTudo() {
  localStorage.setItem("colecao", JSON.stringify(colecao));
  localStorage.setItem("repetidos", JSON.stringify(repetidos));
}

function leTudo() {
  const colecaoGuardada = JSON.parse(localStorage.getItem("colecao"));
  const repetidosGuardados = JSON.parse(localStorage.getItem("repetidos"));

  if (colecaoGuardada) {
    colecao.push(...colecaoGuardada);
  }
  if (repetidosGuardados) {
    repetidos.push(...repetidosGuardados);
  }
}

form.onsubmit = (event) => {
  event.preventDefault();
  guardaCarta();
};

function ligaBotoesEliminar() {
  const botoes = document.querySelectorAll("#repetidos button");

  botoes.forEach((botao) => {
    botao.onclick = () => eliminaRepetido(Number(botao.dataset.i));
  });
}

leTudo();
atualizaLista(colecao, nodeUlColecao);
atualizaLista(repetidos, nodeUlRepetidos);
