var posicaoSlide = 1;
showSlide(posicaoSlide);

function addSlide(n) {
    showSlide(posicaoSlide += n);
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("blocoImgs");

    if (n > slide.length) { posicaoSlide = 1 }
    if (n < 1) { posicaoSlide = slide.length }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[posicaoSlide - 1].style.display = "flex";
}


function openModal(arrays){
    //display flex no modal
    //operacao = arrays[0].data
    const modalSolicitacao = document.getElementById('modalDetalhesSolicitacao')
    modalSolicitacao.style.display = 'flex'

    console.log(arrays[0].email)
    let dividido = arrays.slice(0,2)

    dividido.forEach(element => {
        const dive = document.createElement('div')
        dive.className = 'divezin'
        const img = document.createElement('img')
        let path = `../../uploads/${element.nomeImagem}`
        img.src = path
        
        
    });
    

    // arrays.forEach(element => {
    //     console.log(element.pathImagem)

    // });


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
        // console.log(data)
        const solicitacaoRecebida = data.viewSolicitacao
        console.log(solicitacaoRecebida[0])
        openModal(solicitacaoRecebida)

        //Percorrendo os arrays
        // solicitacaoRecebida.forEach(element => {
        //     console.log(element.pathImagem)
        // });
    }).catch(error =>{
        console.error('Erro na requisição:',error)
    })
}
