

//Acessa a url da página para conseguir encontrar o nome da página atual
const url = window.location.href;
const caminho = window.location.pathname;
const caminhoSlice = caminho.split('/')
const nomePagina = caminhoSlice[caminhoSlice.length - 1]

//Acessa a lista de opções do menu lateral
const navMenu = document.getElementById("nav-lista-menu")

//Função para setar a cor da opção do menu
const setCorMenu = (index) =>{
    navMenu.children[index].style.backgroundColor = 'var(--primary-color)'
    navMenu.children[index].style.color = 'white'
}

//Chama a função setCorMenu que serve para identificar o item na lista do menu lateral que corresponde a página atual
switch (nomePagina) {
    case 'painelControle':
            setCorMenu(0);
        break;
    case 'solicitacoes':
            setCorMenu(1);
        break;
    case 'calendario':
            setCorMenu(2);
        break;
    case 'mensagens':
            setCorMenu(3);
        break;
    case 'viewMensagem':
            setCorMenu(3);
        break;
    case 'noticiasCorretor':
            setCorMenu(4);
        break; 
    default:
        console.log("Página não encontrada")
        break;
}

const itensMenu = document.querySelectorAll('.nav-item-menu')
const btnSair = document.getElementById('sair')
let aux = false;

function diminuirMenu(){
    if (aux === true) return; //Impede que ele continue removendo os elementos filhos da nav-item-menu
    itensMenu.forEach(item => {
        const ultimoFilho = item.lastChild;
        item.removeChild(ultimoFilho)
        aux = true;
        console.log("foi")
    })
    // //Acessa o útlimo elemento filho do botão Sair, que é o texto "Sair", e o remove
    let ultimoFilhoBtn = btnSair.lastChild;
    btnSair.removeChild(ultimoFilhoBtn);

    //Diminui o tamanho do Menu
    const menu = document.getElementById('aside')
    menu.style.width = "90px"
}