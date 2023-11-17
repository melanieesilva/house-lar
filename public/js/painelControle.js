

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
    case 'publicarImovelCorretor':
            setCorMenu(0)
        break;
    case 'publicarNoticia':
            setCorMenu(4)
    break;
    default:
        console.log("Página não encontrada")
        break;
}

document.addEventListener("DOMContentLoaded",()=>{

    if (nomePagina === 'publicarImovelCorretor'){
        diminuirMenu();
    }
    
    
})



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


//Controle da visualização do perfil
const containerPerfil = document.getElementById('containerPerfil');
const mainPerfil = document.getElementById('mainPerfil');
const containerDetalhesPerfil = document.getElementById('detalhesPerfil');
const containerEditarPerfil = document.getElementById('editarPerfil');


function AbrirPerfil() {
    containerPerfil.style.display = "flex";
    mainPerfil.style.display = "flex";
    containerDetalhesPerfil.style.display = "flex";
    containerEditarPerfil.style.display = "none";
}

function AbrirEdicao() {
    containerDetalhesPerfil.style.display = "none";
    containerEditarPerfil.style.display = "flex";
}

function SalvarEdicao(){
    containerEditarPerfil.style.display = "none";
    containerDetalhesPerfil.style.display = "flex";
}

function FecharPerfil() {
    containerPerfil.style.display = "none";
}

document.addEventListener('click',(event) =>{
    if(event.target == containerPerfil){
        containerPerfil.style.display = "none";
    }
})

// IMÓVEIS PUBLICADOS

// document.addEventListener("DOMContentLoaded", function () {
//     const botaorosio = document.getElementById("pub");
//     const botaoCinza = document.getElementById("des");
//     const publicado = document.getElementById("publicados");
//     const desativado = document.getElementById("desativados");

//     botaoCinza.addEventListener("click", function () {
//         botaorosio.classList.remove("ativo");
//         publicado.style.display="none";
//       botaoCinza.classList.add("ativo");
//       desativado.style.display="block";
//     });
  
//     botaorosio.addEventListener("click", function () {
//       botaoCinza.classList.remove("ativo");
//       desativado.style.display="none";
//       botaorosio.classList.add("ativo");
//       publicado.style.display="block";
//     });
//   });