// A. Estado e variáveis com referência de elementos do DOM
const secaoProdutos = document.querySelector("#produtos");


// B. Funções utilitárias
function criarProduto(produto) {
  const article = document.createElement("article");

  const titulo = document.createElement("h2");
  titulo.textContent = produto.title;

  const imagem = document.createElement("img");
  imagem.src = produto.image;
  imagem.alt = produto.title;

  const descricao = document.createElement("p");
  descricao.textContent = produto.description;

  const preco = document.createElement("p");
  preco.textContent = `Preço: ${produto.price} €`;

  const rating = document.createElement("p");
  rating.textContent = `Rating: ${produto.rating.rate} (${produto.rating.count} avaliações)`;

  article.append(titulo, imagem, descricao, preco, rating);

  return article;
}
// C. Event handlers
function renderizarProdutos(produtos) {
  produtos.forEach(produto => {
    const article = criarProduto(produto);
    secaoProdutos.append(article);
  });
}

// D. Event Listeners

// E. Inicialização
renderizarProdutos(produtos);
