const elementosGrupo1 = document.querySelectorAll('.grupo1');
const elementosGrupo2 = document.querySelectorAll('.grupo2');
var lado;

function adicionarEvento(elementos) {
    elementos.forEach(elemento => {
        elemento.addEventListener('click', () => {
            // Remover classe "selecionado" de todos os elementos do grupo
            elementos.forEach(el => el.classList.remove('selecionado'));
            elementos.forEach(el => el.classList.remove('selecionad'));

            // Adicionar classe "selecionado" apenas ao elemento clicado
            if (lado == 'botao-direito') {
                elemento.classList.add('selecionado');
            } else {
                elemento.classList.add('selecionad');
            }
        });
    });
}

adicionarEvento(elementosGrupo1);
adicionarEvento(elementosGrupo2);

function ler(botao) {
    lado = botao;
}