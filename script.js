const nome = prompt("Qual o seu nome?");

let selecionado1 = 0;
let selecionado2 = 0;
let selecionado3 = 0;

function selecionarItem1(opcao) {

    let removedor = document.querySelector(".selecionado1");
    if (removedor !== null) {
        removedor.classList.remove("selecionado1");
    }

    opcao.classList.add('selecionado1');
    selecionado1 = 1;

    checarFinalizacao();
}

function selecionarItem2(opcao) {

    let removedor = document.querySelector(".selecionado2");
    if (removedor !== null) {
        removedor.classList.remove("selecionado2");
    }

    opcao.classList.add('selecionado2');
    selecionado2 = 1;

    checarFinalizacao();
}

function selecionarItem3(opcao) {

    let removedor = document.querySelector(".selecionado3");
    if (removedor !== null) {
        removedor.classList.remove("selecionado3");
    }

    opcao.classList.add('selecionado3');
    selecionado3 = 1;

    checarFinalizacao();
}

function checarFinalizacao() {
    let input = document.querySelector("input");
    if (selecionado1 && selecionado2 && selecionado3 && input.value) {
        habilitarConfirmacao();
    }
    else {
        desabilitarConfirmacao();
    }
}

setInterval(checarFinalizacao, 500);

function habilitarConfirmacao() {
    let botao = document.querySelector('button');
    botao.classList.add('ligado');
}

function desabilitarConfirmacao() {
    let botao = document.querySelector('button');
    if (botao.classList.contains('ligado')) {
        botao.classList.remove('ligado');
    }
}