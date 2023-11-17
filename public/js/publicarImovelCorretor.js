const inputFile = document.getElementById("inputFile")
const btnSub = document.getElementById("btnsub")
let displayAtual = 1;

function displayForm(display) {
    document.getElementById(`etapa${displayAtual}`).style.color = 'green'
    document.getElementById(`etapa${display}`).style.color = 'grey'
    document.getElementById(`form${displayAtual}`).style.display = 'none';
    document.getElementById(`form${display}`).style.display = 'flex';
    displayAtual = display;
}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('form1').style.display = 'flex'
    document.getElementById('etapa1').style.color = 'green'

})

const opRadio1 = document.getElementById('operation')
const opRadio2 = document.getElementById('operation2')


opRadio1.addEventListener('change',()=>{
    if(opRadio1.checked){
        document.getElementById('labelValorImovel').textContent = "Valor de venda (R$)"
    }
})
opRadio2.addEventListener('change',()=>{
    if(opRadio2.checked){
        document.getElementById('labelValorImovel').textContent = "Valor do aluguel (R$)"
        document.getElementById('titleValImovel').textContent = "Valor do aluguel"
    }
})



inputFile.addEventListener('change', (event) => {
    const imagesPreview = document.getElementById("containerImg")
    const imagesUpload = [];

    console.log("ouviu")

    for (let i = 0; i < event.target.files.length; i++) {
        //obtenha cada file
        const file = event.target.files[i]

        //inicie o reader
        const reader = new FileReader()

        reader.onload = (e) => {
            const img = new Image()
            img.src = e.target.result
            const src = img.src

            const BtnDelete = document.createElement("button")

            const icon = document.createElement("iconify-icon")
            icon.setAttribute('icon', 'mdi:remove')
            BtnDelete.appendChild(icon)
            BtnDelete.className = "btndelete"

            const imgPreview = document.createElement("div")
            imgPreview.className = "imgpreview"

            imgPreview.appendChild(BtnDelete)
            imgPreview.style.backgroundImage = `url(${src})`
            imagesPreview.appendChild(imgPreview)

            imagesUpload.push(file)

            BtnDelete.addEventListener('click', () => {
                imagesPreview.removeChild(imgPreview)

                let inputHidden = document.createElement("input")
                inputHidden.type = 'hidden'
                inputHidden.name = 'indexImagemRemovida'

                const index = imagesUpload.indexOf(file)
                inputHidden.value = i;

                if (index !== -1) {
                    imagesUpload.splice(index, 1)
                    imagesPreview.appendChild(inputHidden)
                    console.log(imagesUpload)
                }
            })
        }
        reader.readAsDataURL(file);
    }

})

function openPreView() {
    const modal = document.getElementById("preVisualizacao")
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"

    //Exibindo dados do form
    let operation1 = document.getElementById('operation')
    let operation2 = document.getElementById('operation2')
    if(operation1.checked){
        console.log(operation1.value)
        document.getElementById('operacaoPreview').textContent = operation1.value
    }else if(operation2.checked){
        console.log(operation2.value)
        document.getElementById('operacaoPreview').textContent = operation2.value
    }

    let tipoCasa = document.getElementById('tipoCasa')
    let tipoAp = document.getElementById('tipoApartamento')
    let tipoLote = document.getElementById('tipoLote')
    let tipoKitStudio = document.getElementById('tipoKitStudio')
    let tipoSalaComercial = document.getElementById('tipoSalaComercial')
    if(tipoCasa.checked){
        document.getElementById('tipoImovelPreview').textContent = tipoCasa.value
    }else if(tipoAp.checked){
        document.getElementById('tipoImovelPreview').textContent = tipoAp.value
    }else if(tipoLote.checked){
        document.getElementById('tipoImovelPreview').textContent = tipoLote.value
    }else if(tipoKitStudio.checked){
        document.getElementById('tipoImovelPreview').textContent = tipoKitStudio.value
    }else if(tipoSalaComercial.checked){
        document.getElementById('tipoImovelPreview').textContent = tipoSalaComercial.value
    }
    else{
        console.log("Nenhum input selecionado.")
    }
    
    let inputCidade = document.getElementById('cidade').value
    let inputBairro = document.getElementById('bairro').value
    let inputEndereco = document.getElementById('endereco').value
    let inputNumero = document.getElementById('numero').value

    let enderecoCompleto = `${inputEndereco}, ${inputBairro}, ${inputCidade}, ${inputNumero}`
    document.getElementById('enderecoPreview').textContent = enderecoCompleto

    let inputQuarto = document.getElementById('numQuartos').value
    let inputBanheiros = document.getElementById('numBanheiros').value
    let inputVagas = document.getElementById('numVagas').value
    let inputArea = document.getElementById('tamArea').value

    document.getElementById('numQuartosPreview').textContent = inputQuarto
    document.getElementById('numBanheirosPreview').textContent = inputBanheiros
    document.getElementById('numVagasPreview').textContent = inputVagas
    document.getElementById('tamAreaPreview').textContent = String(inputArea+' m²')
    // console.log(inputNome)
    let valorImovel = document.getElementById('valorImovel').value
    document.getElementById('valImovel').textContent = valorImovel

    let valorCondo = document.getElementById('valorCondominio').value
    let construcaoImovel = document.getElementById('construcaoImovel').value
    let condominioImovel = document.getElementById('condominioImovel').value
    let andaresImovel = document.getElementById('andaresImovel').value
    let dataEntrega = document.getElementById('dataEntrega').value

    document.getElementById('valCondo').textContent = String('R$ '+valorCondo)
    document.getElementById('emConstru').textContent = construcaoImovel
    document.getElementById('dataEntregaPreview').textContent = dataEntrega
    document.getElementById('numAndares').textContent = andaresImovel
    document.getElementById('emCondo').textContent = condominioImovel

    let valorIPTU = document.getElementById('valorIPTU').value
    let selectparcela = document.getElementById('selectParcelasIPTU').value
    console.log(selectparcela)
    document.getElementById('numeroParcela').textContent = `(${selectparcela}X)`
    document.getElementById('valIPTU').textContent = `R$ ${valorIPTU}`

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "scroll"
        }
    })
    document.getElementById('btnCancelar').addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "scroll"
    })
}


// function confirmarEnvio() {
//     const modalDecisao = document.getElementById('modaldecisao')

//     modalDecisao.style.display = 'flex'
//     document.body.style.overflow = "hidden"

//     window.addEventListener('click', (e) => {
//         if (e.target == modalDecisao) {
//             modalDecisao.style.display = "none";
//             document.body.style.overflow = "scroll"
//         }
//     })

//     document.getElementById('btnCancelDecisao').addEventListener('click', () => {
//         modalDecisao.style.display = "none";
//         document.body.style.overflow = "scroll"
//     })
// }



const inputFilesS = document.getElementById('inputFile')
const containerImgs = document.getElementById('containerImgs')

// function flashConfirmar(){
//     const modalEnviada = document.getElementById('modalenviada');
//     const botaoConfirmar = document.getElementById('btnVoltarInicio');

//     modalEnviada.style.display = 'flex';
//     document.body.style.overflow = 'hidden';

//     window.addEventListener('click', (f) => {
//         if (f.target == botaoConfirmar){
//             modalEnviada.style.display = 'none';
//             document.body.style.overflow = 'scroll';
//         }
//     })
// }

var posicaoSlide = 1;
showSlide(posicaoSlide);

inputFilesS.addEventListener('change',()=>{
    const imgs = inputFilesS.files

    containerImgs.innerHTML = ''

    for(let i = 0; i < imgs.length;i+=2){
        const bloco = document.createElement("div")
        bloco.classList.add("bloco")

        for (let j = i; j < Math.min(i + 2, imgs.length); j++) {
            const divImagem = document.createElement("div");
            divImagem.classList.add("img-select");
            divImagem.style.backgroundImage = `url(${URL.createObjectURL(imgs[j])})`;
            bloco.appendChild(divImagem);
          }

        containerImgs.appendChild(bloco)
        posicaoSlide = 1;
        showSlide(posicaoSlide);
    }
})

function addSlide(n) {
    showSlide(posicaoSlide += n);
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("bloco");
  
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

