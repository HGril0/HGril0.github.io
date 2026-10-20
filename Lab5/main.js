const passa = document.querySelector("#passa");
passa.addEventListener("mouseover", () => {
  passa.textContent = "Obrigado por passares!";
});
passa.addEventListener("mouseout", () => {
  passa.textContent = "Passa por aqui!";
});

const pintar = (cor) => {
  document.querySelector("#frase").style.color = cor;
};

document.querySelectorAll("button.color").forEach((botao) => {
  botao.addEventListener("click", () => pintar(botao.dataset.color));
});

const cores = ["lightblue", "khaki", "salmon", "gray"];
const escrever = document.querySelector("#escrever");
escrever.addEventListener("input", () => {
  const n = escrever.value.length;
  if (n > 0) {
    escrever.style.backgroundColor = cores[(n - 1) % cores.length];
  }
});

document.querySelector("#corPagina").addEventListener("change", function () {
  document.body.style.backgroundColor = this.value;
});

let total = 0;
document.querySelector("#conta").addEventListener("click", () => {
  total++;
  document.querySelector("#contador").textContent = total;
});

document.querySelector("#formulario").onsubmit = (e) => {
  e.preventDefault();
  const nome = document.querySelector("#nome").value;
  const idade = document.querySelector("#idade").value;
  document.querySelector("#mensagem").textContent =
    `Olá, o ${nome} tem ${idade}!`;
};

let segundos = 0;
function count() {
  segundos++;
  document.querySelector("#automatico").textContent = segundos;
}
setInterval(count, 1000);

const guardado = document.querySelector("#guardado");
let valor = Number(localStorage.getItem("counter")) || 0;
guardado.textContent = valor;

const atualizar = (novoValor) => {
  valor = novoValor;
  guardado.textContent = valor;
  localStorage.setItem("counter", valor);
};
const incrementar = () => atualizar(valor + 1);
const decrementar = () => atualizar(valor - 1);
const reset = () => atualizar(0);

document.querySelector("#incrementar").addEventListener("click", incrementar);
document.querySelector("#decrementar").addEventListener("click", decrementar);
document.querySelector("#reset").addEventListener("click", reset);

document.querySelector("#direcao").addEventListener("change", function () {
  document.querySelector("#caixa").style.flexDirection = this.value;
});
