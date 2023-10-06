// const containerCard = document.getElementById('containerNoticias')
// const card = criarElemento("div", "card-noticia")
// const containerIMG = criarElemento("div", "img-noticia")
// const childIMG = criarElemento("img", "", "src", "../../img/img-noticia.png")
// const containerConteudo = criarElemento("div", "conteudo-card")
// const containerDados = criarElemento("div", "dados-noticia")
// const categoria = criarElemento("div", "categoria")
// const nomeCategoria = criarElemento("p", "nome-categoria")
// const dataPubli = criarElemento("div", "data-publicacao")
// const iconeData = criarElemento("iconify-icon", "", "icon", "lucide:calendar")
// const data = criarElemento("p", "data")
// const infoNoticia = criarElemento("div", "infoNoticia")
// const titulo = criarElemento("h4", "titulo-noticia")
// const descricao = criarElemento("p", "descricao-noticia")
// const buttonNoticia = criarElemento("div", "btn-noticia")
// const linkNoticia = criarElemento("a", "btn-ler-noticia", "href", "/artigoNoticia")
// const iconeLink = criarElemento("iconify-icon", "", "icon", "ic:round-arrow-circle-right")


// function criarElemento(tag, className, attribute, valueAtrribute) {
//     const elemento = document.createElement(tag)
//     elemento.className = className;
//     elemento.setAttribute(attribute, valueAtrribute)
//     return elemento;
// }

// function criarCardNoticia() {
//     containerCard.appendChild(card)
//     containerIMG.appendChild(childIMG)
//     containerConteudo.appendChild(containerDados)
//     containerConteudo.appendChild(infoNoticia)
//     containerConteudo.appendChild(buttonNoticia)
//     card.appendChild(containerIMG)
//     card.appendChild(containerConteudo)
//     containerDados.appendChild(categoria)
//     containerDados.appendChild(dataPubli)
//     categoria.appendChild(nomeCategoria)
//     dataPubli.appendChild(iconeData)
//     dataPubli.appendChild(data)
//     infoNoticia.appendChild(titulo)
//     infoNoticia.appendChild(descricao)
//     buttonNoticia.appendChild(linkNoticia)
//     linkNoticia.appendChild(iconeLink)
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const itensPorPagina = 5;
//     const totalCards = [...Array(10).keys()];

//     function showItens(page) {
//         const inicio = (page - 1) * itensPorPagina;
//         const fim = inicio + itensPorPagina;
//         const itensDaPagina = totalCards.slice(inicio,fim)

//         itensDaPagina.forEach(item =>{
//             const card = document.createElement("div");
//             card.className = "card";
//             containerCards.appendChild(card);
//         })
//     }

//     function criarPaginacao(){
//         const totalPaginas = Math.ceil(totalCards.length / itensPorPagina)

//         for (let i = 0; i < totalPaginas; i++) {
//             const botaoPaginacao = document.createElement("p")
//             botaoPaginacao.textContent = i;
//             botaoPaginacao.addEventListener('click',() =>{
//                 showItens(i)
//             })
//             pagination.appendChild(botaoPaginacao)
//         }
//     }

//     // criarPaginacao();
//     // showItens(1);
//     criarCardNoticia()
// })

