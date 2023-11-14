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