
// - dar um jeito de pegar o elemento HTML dos botões
const botaoCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//dar um jeito de identificar o clique do usuário no botão
botaoCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // - passo 3 - desmarcar o botão selecionado anterior
        desmarcarBotao();

        // - passo 4 - marcar o botão clicado como se ele fosse selecionado
        Botaoclicado(botao);

        // - passo 5 - esconder a imagem anterior e mostrar a proxima
        esconderImagem();

        // - passo 6 - fazer aparecer a imagem que corresponde ao botão clicado
        imagem_mostrada(indice);

        // - passo 7 - esconder a informação do personagem que saiu
        esconderInformacao();

        // - passo 8 - mostrar a informação do persoagem mostrado
        mostrarInformacao_personagem(indice);
        console.log();
        
        console.log(imagens[indice]);
        
    });
});

function mostrarInformacao_personagem(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacao() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function imagem_mostrada(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagem() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function Botaoclicado(botao) {
    botao.classList.add("selecionado");
}

function desmarcarBotao() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}
