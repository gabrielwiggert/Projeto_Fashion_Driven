const nome = prompt("Qual o seu nome?");

let selecionado1 = 0;
let selecionado2 = 0;
let selecionado3 = 0;

let input = "";
let model = "";
let neck = "";
let material = "";

function selecionarItem1(opcao) {

    let removedor = document.querySelector(".selecionado1");
    if (removedor !== null) {
        removedor.classList.remove("selecionado1");
    }

    opcao.classList.add('selecionado1');
    selecionado1 = 1;
    model = opcao.id;

    checarFinalizacao();
}

function selecionarItem2(opcao) {

    let removedor = document.querySelector(".selecionado2");
    if (removedor !== null) {
        removedor.classList.remove("selecionado2");
    }

    opcao.classList.add('selecionado2');
    selecionado2 = 1;
    neck = opcao.id;

    checarFinalizacao();
}

function selecionarItem3(opcao) {

    let removedor = document.querySelector(".selecionado3");
    if (removedor !== null) {
        removedor.classList.remove("selecionado3");
    }

    opcao.classList.add('selecionado3');
    selecionado3 = 1;
    material = opcao.id;

    checarFinalizacao();
}

function checarFinalizacao() {
    input = document.querySelector("input");
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

function confirmar() {
    let botao = document.querySelector('button');
    if (botao.classList.contains('ligado')) {
        enviarPedido();
    }
}

function enviarPedido() {

    let promise = axios.post(
        "https://mock-api.driven.com.br/api/v4/shirts-api/shirts",
        {
            "model": model,
            "neck": neck,
            "material": material,
            "image": input.value,
            "owner": nome,
            "author": nome
        }
    );

    promise.then(sucesso);
    promise.catch(erro);
}

function sucesso() {
    alert("Pedido confirmado!");
    pegarUltimosPedidos();
}

function erro() {
    alert("Ops, não conseguimos processar sua encomenda");
}

function pegarUltimosPedidos() {
    const resposta = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    resposta.then(renderizarPedidos);
  }

function renderizarPedidos(resposta) {
    let blusas = resposta.data;
    let div = document.querySelector('.showroom');
    div.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        div.innerHTML += `
        <div class="pedido">
        <div class="caixa">
            <img src="${blusas[i].image}"/>
        </div>
        <p><span>Criador:</span> ${blusas[i].owner}</p>
        </div>
        `
    }
}

pegarUltimosPedidos();