const containerIMGS = document.getElementById('containerImgDetalhes')

var posicaoSlide = 1;
showSlide(posicaoSlide);

document.addEventListener('DOMContentLoaded',()=>{
    const areaStatus = document.getElementById('statusSoli');
    const contentStatus = areaStatus.textContent;

    switch(contentStatus){
        case 'Aceito':
            areaStatus.style.border = '2px solid #00833C';
            areaStatus.style.color = '#00833C';
        break;
        case 'Recusado':
            areaStatus.style.border = '2px solid #C80000';
            areaStatus.style.color = '#C80000';
        break;
        case 'Solicitado':
            areaStatus.style.border = '2px solid black';
            areaStatus.style.color = 'black';
        break;
        default:
            console.log("Não foi possível identificar o status.")
        break;
    }
})

function openModal(arrays) {
    //display flex no modal
    //operacao = arrays[0].data
    const modalSolicitacao = document.getElementById('modalDetalhesSolicitacao')
    modalSolicitacao.style.display = 'flex'
    document.body.style.overflow = "hidden"

    let imgsName = []
    arrays.forEach(element => {
        imgsName.push(element.nomeImagem)
    });
    console.log(imgsName)

    containerIMGS.innerHTML = ''

    for (let i = 0; i < imgsName.length; i += 2) {
        const bloco = document.createElement("div")
        bloco.classList.add("blocoImgs")

        for (let j = i; j < Math.min(i + 2, imgsName.length); j++) {
            const divImagem = document.createElement("div");
            divImagem.classList.add("imgBloco");
            divImagem.style.backgroundImage = `url(../../uploads/${imgsName[j]})`;
            bloco.appendChild(divImagem);
        }

        containerIMGS.appendChild(bloco)
        posicaoSlide = 1;
        showSlide(posicaoSlide);
    }

    //SPAN
    document.getElementById('idSoli').textContent = arrays[0].id_soli

    //OPERAÇÃO
    document.getElementById('operacaoDetalhe').textContent = arrays[0].operacao

    //DATA PUBLI
    document.getElementById('dataPubliDetalhe').textContent = arrays[0].dataPublicacao

    //TIPO IMOVEL
    document.getElementById('tipoImovelDetalhe').textContent = arrays[0].tipoImovel

    //ENDEREÇO
    const endereco = arrays[0].endereco
    const cidade = arrays[0].cidade
    const bairro = arrays[0].bairro
    const numero = arrays[0].numero

    const enderecoCompleto = String(endereco + ' ' + numero + ', ' + bairro + ', ' + cidade)

    document.getElementById('enderecoDetalhe').textContent = enderecoCompleto

    //DESCRIÇÃO
    document.getElementById('descricaoDetalheTxt').textContent = arrays[0].descricao

    //CARACTERÍSTICAS BÁSICAS
    document.getElementById('numQuartos').textContent = arrays[0].numQuartos
    document.getElementById('numBan').textContent = arrays[0].numBanheiros
    document.getElementById('numVaga').textContent = arrays[0].numVagas
    const vagas = arrays[0].areaImovel
    document.getElementById('valArea').textContent = String(vagas + ' m²')

    //SIDE
    document.getElementById('valImovelDetalhe').textContent = String('R$ ' + arrays[0].valorImovel);
    document.getElementById('valCondo').textContent = String('R$ ' + arrays[0].valorCondominio);
    document.getElementById('valIPTU').textContent = String('R$ ' + arrays[0].valorIPTU);
    document.getElementById('numParcela').textContent = String('(' + arrays[0].parcelasIPTU + 'X)');

    document.getElementById('emConstru').textContent = arrays[0].construcao;
    document.getElementById('dataEntrega').textContent = arrays[0].dataEntrega;
    document.getElementById('numAndares').textContent = arrays[0].numAndares;
    document.getElementById('emCondo').textContent = arrays[0].emCondominio;

    document.getElementById('nomePessoaDetalhe').textContent = arrays[0].nomeCliente;
    document.getElementById('emailPessoaDetalhe').textContent = arrays[0].emailCliente;
    document.getElementById('telefonePessoaDetalhe').textContent = arrays[0].telefoneCliente;
    document.getElementById('CPFPessoaDetalhe').textContent = arrays[0].CPFCliente;

    //PUBLICAR SOLICITAÇÃO
    const linkPublicarSoli = document.getElementById('aceitarSolicitacao')
   

    //REJEITAR
    const linkRejeitar = document.getElementById('rejeitarSolicitacao')

    

    window.addEventListener('click', (e) => {
        if (e.target == modalSolicitacao) {
            modalSolicitacao.style.display = "none";
            document.body.style.overflow = "scroll"
        }
    })
    document.getElementById('btnCloseSolicitacao').addEventListener('click', () => {
        modalSolicitacao.style.display = "none";
        document.body.style.overflow = "scroll"
    })
}

function addSlide(n) {
    showSlide(posicaoSlide += n);
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("blocoImgs");

    if (n > slide.length) {
        posicaoSlide = 1;
    }
    if (n < 1) {
        posicaoSlide = slide.length;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    if (slide[posicaoSlide - 1]) {
        slide[posicaoSlide - 1].style.display = "flex";
    }
}

function detalharSolicitacao(el) {
    const idSoli = el.getAttribute('data-soliID')

    console.log("Enviado")
    fetch(`/corretor/detalheSolicitacao/${idSoli}`)
        .then(response => {
            if (!response.ok) {
                console.log("Não foi possível buscar os detalhes da solicitação.")
            }
            return response.json()
        }).then(data => {
            console.log(data)
            console.log(data.viewSolicitacao)
            const solicitacaoRecebida = data.viewSolicitacao
            // console.log(solicitacaoRecebida[0])
            openModal(solicitacaoRecebida)


            const linkPublicarSoli = document.createElement("a")
            linkPublicarSoli.classList.add("aceitarSolicitacao")
            linkPublicarSoli.id = "aceitarSolicitacao"

            const linkRejeitar = document.createElement("a")
            linkRejeitar.classList.add("rejeitarSolicitacao")
            linkRejeitar.id = "rejeitarSolicitacao"

            document.getElementById('buttonsSideDetalhe').innerHTML = ""

            if (solicitacaoRecebida[0].statusSoli === "Aceito") {
                linkPublicarSoli.textContent = "Solicitação Publicada"
                linkPublicarSoli.removeAttribute("href")
                linkPublicarSoli.style.cursor = "default"
                document.getElementById('buttonsSideDetalhe').appendChild(linkPublicarSoli)
                document.getElementById('buttonsSideDetalhe').removeChild(linkRejeitar)
            }else if(solicitacaoRecebida[0].statusSoli = "Solicitado"){

                linkPublicarSoli.textContent = "Publicar Imóvel"
                linkPublicarSoli.setAttribute("href", `/corretor/publicarSolicitacao/${solicitacaoRecebida[0].id_soli}`)
                linkRejeitar.textContent = "Rejeitar Solicitação"
                linkRejeitar.setAttribute("href",`/corretor/rejeitarSolicitacao/:${solicitacaoRecebida[0].id_soli}`)


                document.getElementById('buttonsSideDetalhe').appendChild(linkPublicarSoli)
                document.getElementById('buttonsSideDetalhe').appendChild(linkRejeitar)
            }

        }).catch(error => {
            console.error('Erro na requisição:', error)
        })
}

const filtroRecente = document.getElementById('filtroRecente')
const filtroAntigo = document.getElementById('filtroAntigo')
const filtroAluguel = document.getElementById('filtroAluguel')
const filtroVenda = document.getElementById('filtroVenda')

filtroRecente.addEventListener('click',()=>{
    console.log("Filtro recente")

    fetch('/corretor/filtroSolicitacao/recente')
    .then(response => {
        if (!response.ok) {
            console.log("Não foi possível filtrar solicitações mais recentes")
        }
        return response.json()
    }).then(data =>{
        // console.log(data)
        console.log(data.solicitacoesRecentes)
        const arraySolicitacoes = data.solicitacoesRecentes

        for (let i = 0; i < arraySolicitacoes.length; i++) {
            const element = arraySolicitacoes[i];
            // console.log(element)
            console.log(element.id_soli)
            document.getElementById('imovel').textContent = el.tipoImovel
            document.getElementById('discri').textContent = el.descricao
        }

    }).catch(error => {
        console.error('Erro na requisição:', error)
    })
 
})
