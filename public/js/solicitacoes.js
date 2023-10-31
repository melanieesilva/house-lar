const containerIMGS = document.getElementById('containerImgDetalhes')

var posicaoSlide = 1;
showSlide(posicaoSlide);

function openModal(arrays){
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

    for(let i = 0; i < imgsName.length;i+=2){
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

function detalharSolicitacao(el){
    const idSoli = el.getAttribute('data-soliID')

    console.log("Enviado")
    fetch(`/corretor/detalheSolicitacao/${idSoli}`)
    .then(response => {
        if(!response.ok){
            console.log("Não foi possível buscar os detalhes da solicitação.")
        }
        return response.json()
    }).then(data =>{
        console.log(data.viewSolicitacao) 
        const solicitacaoRecebida = data.viewSolicitacao
        // console.log(solicitacaoRecebida[0])
        openModal(solicitacaoRecebida)

        

    }).catch(error =>{
        console.error('Erro na requisição:',error)
    })
}
