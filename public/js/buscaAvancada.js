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

const elementosGrupo3 = document.querySelectorAll('.grupo3');

var lado, grupos;

function adicionarEvento(elementos) {
    elementos.forEach(elemento => {
        elemento.addEventListener('click', () => {
            // Remover classe "selecionado" de todos os elementos do grupo
            elementos.forEach(el => el.classList.remove('seleciona'));

            // Adicionar classe "selecionado" apenas ao elemento clicado
            if ((lado == 'botao-direito')) {
                elemento.classList.add('seleciona');
            } else {
                elemento.classList.add('seleciona');
            }
        });
    });
}

adicionarEvento(elementosGrupo3);

function ler(botao, grupo) {
    lado = botao;
    grupos = grupo;
}

// Configurações do display do contêiner

document.addEventListener("DOMContentLoaded", function () {
    const btnDisplayBloco = document.getElementById('displayBloco');
    const btnDisplayLista = document.getElementById('displayLista');

    // Verifique se há um estado salvo e aplique-o
    const savedDisplayMode = localStorage.getItem('displayMode');
    if (savedDisplayMode === 'bloco') {
        exibirImoveisEmBloco();
    } else {
        exibirImoveisEmLista();
    }

    // ...
    btnDisplayBloco.addEventListener('click', () => {
        exibirImoveisEmBloco();
        // Salve o estado
        localStorage.setItem('displayMode', 'bloco');
    });

    btnDisplayLista.addEventListener('click', () => {
        exibirImoveisEmLista();
        // Salve o estado
        localStorage.setItem('displayMode', 'lista');
    });

    // ...

    function exibirImoveisEmBloco() {
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

        btnDisplayBloco.classList.add('selecionado');
        btnDisplayLista.classList.remove('selecionad');

        console.log("BLOCO");
    }

    function exibirImoveisEmLista() {
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

        btnDisplayBloco.classList.remove('selecionado');
        btnDisplayLista.classList.add('selecionad');
        
        console.log("LISTA");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Use o fetch para obter a lista de cidades do seu servidor
    fetch('/api/cidades') // Substitua pela rota correta para buscar as cidades
        .then(response => response.json())
        .then(cidades => {
            // Adicione as opções ao menu suspenso
            const selectCidade = document.getElementById('selectCidade');
            console.log('Cidades recebidas:', cidades); // Adicione este log

            cidades.forEach(cidade => {
                const option = document.createElement('option');
                option.value = cidade; // Use o nome como valor, você pode ajustar conforme necessário
                option.textContent = cidade;
                selectCidade.appendChild(option);
            });
            console.log('Opções adicionadas ao menu suspenso:', selectCidade); // Adicione este log
        })
        .catch(error => console.error('Erro ao buscar cidades:', error));
});
