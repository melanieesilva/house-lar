document.addEventListener("DOMContentLoaded", function () {
    const botaoBranco = document.getElementById("compra");
    const botaoCinza = document.getElementById("alugar");
  
    botaoCinza.addEventListener("click", function () {
      console.log("Clique no botão Aluguel");
      document.getElementById('operacao').value = 'Aluguel';
      console.log("Valor da operação:", document.getElementById('operacao').value);
    });
  
    botaoBranco.addEventListener("click", function () {
      document.getElementById('operacao').value = 'Venda';
      console.log("Valor da operação:", document.getElementById('operacao').value);
    });
});

const elementosGrupo1 = document.querySelectorAll('.grupo1');
const elementosGrupo2 = document.querySelectorAll('.grupo2');
const elementosGrupo3 = document.querySelectorAll('.grupo3');

var lado, grupos;

function adicionarEvento(elementos) {
    elementos.forEach(elemento => {
        elemento.addEventListener('click', () => {
            // Remover classe "selecionado" de todos os elementos do grupo
            elementos.forEach(el => el.classList.remove('selecionado'));
            elementos.forEach(el => el.classList.remove('selecionad'));
            elementos.forEach(el => el.classList.remove('seleciona'));

            // Adicionar classe "selecionado" apenas ao elemento clicado
            if ((lado == 'botao-direito') && (grupos != 'grupo3')) {
                elemento.classList.add('selecionado');
            } else if (grupos != 'grupo3') {
                elemento.classList.add('selecionad');
            } else if ((lado == 'botao-direito')) {
                elemento.classList.add('seleciona');
            } else {
                elemento.classList.add('seleciona');
            }
        });
    });
}

adicionarEvento(elementosGrupo1);
adicionarEvento(elementosGrupo2);
adicionarEvento(elementosGrupo3);

function ler(botao, grupo) {
    lado = botao;
    grupos = grupo;
}

// Configurações do display do contêiner

const btnDisplayBloco = document.getElementById('displayBloco');
const btnDisplayLista = document.getElementById('displayLista')

btnDisplayBloco.addEventListener('click', () => {
    const conteinerImoveis = document.getElementById('imoveis');

    const cardsLista = document.querySelectorAll('#imoveis > .info-movel')
    const cardsBloco = document.querySelectorAll('#imoveis > .infoImovelBloco');

    conteinerImoveis.style.flexWrap = 'wrap'
    conteinerImoveis.style.flexDirection = 'unset'
    cardsBloco.forEach(element => {
        element.style.display = "flex"
    })
    cardsLista.forEach(element => {
        element.style.display = "none"
    })

    console.log("BLOCO")
})

btnDisplayLista.addEventListener('click',() => {
    const conteinerImoveis = document.getElementById('imoveis');

    const cardsLista = document.querySelectorAll('#imoveis > .info-movel')
    const cardsBloco = document.querySelectorAll('#imoveis > .infoImovelBloco');

    conteinerImoveis.style.display = 'flex'
    // conteinerImoveis.style.flexDirection = 'column'
    cardsBloco.forEach(element => {
        element.style.display = "none"
    })
    cardsLista.forEach(element => {
        element.style.display = "flex"
    })
    console.log("LISTA")
})