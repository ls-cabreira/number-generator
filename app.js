let numerosSorteados = [];
let limite = 10;
let numeroSecreto = gerarNumero();
let tentativa = 1;
let botaoReiniciar = document.getElementById('reiniciar');
let botaoChutar = document.getElementById('chute');

exibirTextos('h1', 'Jogo do Número Secreto');
exibirTextos('p', 'Digite um número de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    let texto = tentativa > 1 ? 'tentativas' : 'tentativa';

    if (chute > numeroSecreto) {
        exibirTextos('p', 'O número secreto é menor');
        tentativa++;
        limparCampo();
    } else if (chute < numeroSecreto) {
        exibirTextos('p', 'O número secreto é maior');
        tentativa++;
        limparCampo();
    } else {
        exibirTextos('h1', 'Parabéns!');
        let mensagemAcerto = `Você acertou em ${tentativa} ${texto}`;
        exibirTextos('p', mensagemAcerto);
        botaoChutar.setAttribute('disabled', 'disabled');
        botaoReiniciar.removeAttribute('disabled');
    }
}

function novoJogo() {
    limparCampo();
    exibirTextos('h1', 'Jogo do Número Secreto');
    exibirTextos('p', 'Digite um número de 1 a 10');
    numeroSecreto = gerarNumero();
    botaoChutar.removeAttribute('disabled');
    botaoReiniciar.setAttribute('disabled', 'disabled');

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumero() {
    let sorteio = parseInt(Math.random() * 10 + 1);

    if (numerosSorteados.length == limite) {
        numerosSorteados = []
        sorteio += 1;
        numerosSorteados.push(sorteio);
        return sorteio;
    }

    if (numerosSorteados.includes(sorteio)) {
        gerarNumero();
    } else {
        numerosSorteados.push(sorteio);
        return sorteio;
    }
}