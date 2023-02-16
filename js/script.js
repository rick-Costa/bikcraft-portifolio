// Ativar Links do Menu.

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

// Ativar Itens do Orçamento.

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);

    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes.

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Imagens.

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function colocarEmPrimeiro(event) {
    const media = window.matchMedia('(min-width: 1000px)');

    if (media.matches) {
        const bicicleta = event.currentTarget;
        galeriaContainer.prepend(bicicleta);
    }
}

function eventoBicicletas(bicicleta) {
    bicicleta.addEventListener('click', colocarEmPrimeiro);
}

galeria.forEach(eventoBicicletas);

// Animação.

if (window.SimpleAnime) {
    new SimpleAnime();
}
