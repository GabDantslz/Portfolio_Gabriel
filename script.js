// === SCROLLSPY: Ativa link no menu ao rolar a página ===
const links = document.querySelectorAll('.cabecalho__menu__link');
const secoes = document.querySelectorAll('section');
const header = document.querySelector('.cabecalho');
const headerAltura = header.offsetHeight;

function iniciarRetornando() {
  const nave = document.querySelector(".nave");
  const imagem = document.querySelector(".apresentacao__imagem");
  imagem.style.transform = "translateY(-200px) scale(0.3) skewX(30deg) skewY(10deg)";
  nave.style.display = "block";
  nave.classList.add("retornando");
  imagem.style.opacity = "0";


  setTimeout(() => {
    imagem.style.transition = "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease";

    nave.style.display = "block";
    nave.classList.remove("retornando");
    imagem.style.transform = "translateY(0) scale(1)";
    imagem.style.opacity = "1";
  },3000);
}

iniciarRetornando();

function atualizarLinkAtivo() {
  let indexAtual = secoes.length;
  while (--indexAtual >= 0) {
    const secao = secoes[indexAtual];
    const offset = 150;
    if (window.scrollY + offset >= secao.offsetTop) {
      links.forEach(link => link.classList.remove('ativo'));
      const id = secao.getAttribute('id');
      const linkAtivo = document.querySelector(`.cabecalho__menu__link[href="#${id}"]`);
      if (linkAtivo) linkAtivo.classList.add('ativo');
      break;
    }
  }
}

links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    const offset = destino.offsetTop - headerAltura - 10;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', atualizarLinkAtivo);
window.addEventListener('load', atualizarLinkAtivo);

// === CARROSSEL DE PROJETOS (fade com botões e rotação automática) ===
const cards = document.querySelectorAll('.carrossel__card');
let cardAtual = 0;

function mostrarCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('ativo', i === index);
  });
}

document.getElementById('avancar').addEventListener('click', () => {
  cardAtual = (cardAtual + 1) % cards.length;
  mostrarCard(cardAtual);
});

document.getElementById('voltar').addEventListener('click', () => {
  cardAtual = (cardAtual - 1 + cards.length) % cards.length;
  mostrarCard(cardAtual);
});

setInterval(() => {
  cardAtual = (cardAtual + 1) % cards.length;
  mostrarCard(cardAtual);
}, 6000);

mostrarCard(cardAtual);

// === ABDUÇÃO + RETORNO COM ALIEN ===
function configurarAbducao() {
  const nave = document.querySelector(".nave");
  const imagem = document.querySelector(".apresentacao__imagem");

  if (!nave || !imagem) return;

  nave.addEventListener("click", () => {
    // Inicia animação de abdução
    nave.classList.add("abduzindo");

    // ...existing code...
    imagem.style.transition = "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease";
    imagem.style.transform = "translateY(-200px) scale(0.3) skewX(30deg) skewY(10deg)";
    imagem.style.opacity = "0";

    // ...existing code...

    // Após a animação completa (3s), esconde a nave
    setTimeout(() => {
      nave.style.display = "none";
    }, 3000);

    setTimeout(() => {
      nave.style.display = "block";
      nave.classList.add("retornando");
      nave.classList.remove("abduzindo");
    }, 3000);


    setTimeout(() => {
      nave.classList.remove("retornando");
      imagem.style.transform = "translateY(0) scale(1)";
      imagem.style.opacity = "1";
  },6000);
})}

configurarAbducao();
