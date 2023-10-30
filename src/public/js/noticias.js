//Acessando o container que engloba todos os cards de notícias
const containerCard = document.getElementById('containerNoticias')

function criarElemento(tag, className, attribute, valueAtrribute) {
    const elemento = document.createElement(tag)
    elemento.className = className;
    elemento.setAttribute(attribute, valueAtrribute)
    return elemento;
}

function criarCardNoticia(categoriaNoticia,dataPublicacao,tituloNoticia,descricaoNoticia) {
    //Criando todoso os elementos que compôem um card de notícia
    const card = criarElemento("div", "card-noticia")
    const containerIMG = criarElemento("div", "img-noticia")
    const childIMG = criarElemento("img", "", "src", "../../img/img-noticia.png")
    const containerConteudo = criarElemento("div", "conteudo-card")
    const containerDados = criarElemento("div", "dados-noticia")
    const categoria = criarElemento("div", "categoria")
    const nomeCategoria = criarElemento("p", "nome-categoria")
    const dataPubli = criarElemento("div", "data-publicacao")
    const iconeData = criarElemento("iconify-icon", "", "icon", "lucide:calendar")
    const data = criarElemento("p", "data")
    const infoNoticia = criarElemento("div", "infoNoticia")
    const titulo = criarElemento("h4", "titulo-noticia")
    const descricao = criarElemento("p", "descricao-noticia")
    const buttonNoticia = criarElemento("div", "btn-noticia")
    const linkNoticia = criarElemento("a", "btn-ler-noticia", "href", "/artigoNoticia")
    const iconeLink = criarElemento("iconify-icon", "", "icon", "ic:round-arrow-circle-right")

    // Inserindo textos
    nomeCategoria.textContent = categoriaNoticia
    data.textContent = dataPublicacao
    titulo.textContent = tituloNoticia
    descricao.textContent = descricaoNoticia
    linkNoticia.innerHTML = "Ler notícia"

    containerIMG.appendChild(childIMG)
    containerConteudo.appendChild(containerDados)
    containerConteudo.appendChild(infoNoticia)
    containerConteudo.appendChild(buttonNoticia)
    card.appendChild(containerIMG)
    card.appendChild(containerConteudo)
    containerDados.appendChild(categoria)
    containerDados.appendChild(dataPubli)
    categoria.appendChild(nomeCategoria)
    dataPubli.appendChild(iconeData)
    dataPubli.appendChild(data)
    infoNoticia.appendChild(titulo)
    infoNoticia.appendChild(descricao)
    buttonNoticia.appendChild(linkNoticia)
    linkNoticia.appendChild(iconeLink)

    return card;
}



document.addEventListener("DOMContentLoaded", () => {
    let aux;
    const totalCards = [];
    for(let index = 0; index < 10; index++){
        let card1 = criarCardNoticia(`Oportunidade Tenda ${index}`,"02/08/2023","Lorem ipsum","Lorem ipsum")
        totalCards.push(card1)
    }

    let paginas = []
    const qtdItens = 5;
    let totalPaginas = totalCards.length / qtdItens;

    for (let i = 0; i < totalPaginas; i++) {
        aux = i + 1;
        start = (aux - 1) * qtdItens;
        fim = start + qtdItens;
        let divisoes = totalCards.slice(start, fim);
        paginas.push(divisoes);
      }

      
        let posicao = paginas[0];
        posicao.forEach((item) => {
          containerCard.appendChild(item);
        });
      

    function criarPaginacao() {
        const paginacao = document.getElementById('paginacao')
        const botaoVoltar = criarElemento("li","voltar-pagina")
        const iconeBtnVoltar = criarElemento("iconify-icon","","icon","ep:arrow-left")
        botaoVoltar.appendChild(iconeBtnVoltar)
        paginacao.appendChild(botaoVoltar)

        for (let i = 0; i < paginas.length; i++) {
            const botaoPaginacao = criarElemento("li")
            botaoPaginacao.innerHTML = i;
            botaoPaginacao.addEventListener('click', () => {
                while (containerCard.firstChild) {
                    containerCard.removeChild(containerCard.firstChild);
                }
                let posicao = paginas[i]
                posicao.forEach((item)=>{
                    containerCard.appendChild(item)
                })
            })
            paginacao.appendChild(botaoPaginacao)
        }

        const botaoProximo = criarElemento("li","avancar-pagina")
        const iconeBtnProximo = criarElemento("iconify-icon","","icon","ep:arrow-right")
        botaoProximo.appendChild(iconeBtnProximo)
        paginacao.appendChild(botaoProximo)
    }

    criarPaginacao();
    // showItens(1);
    // criarCardNoticia()
})

