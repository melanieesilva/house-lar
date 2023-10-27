console.log("conectado")

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


    document.getElementById('sla').addEventListener('click',()=>{
        console.log('oaaaa')
    })



    function formLoad(arrayImg) {
        const formData = new FormData()
        for (const file of arrayImg) {
            formData.append('imagem', file)
        }
        nomeUser 
        email
        cpf 
        telefone
        operacao
        tipoImovel
        numQuartos
        numBanheiros
        numVagas
        tamArea
        construcaoImovel
        condominioImovel
        andaresImovel
        dataEntrega
        valorVenda
        valorCondominio
        valorIPTU
        parcelaIPTU
        cidade
        bairro
        endereco
        numero
        descricao




        fetch('/corretor/cadastrarSolicitacao')
    }

})

function openPreView() {
    const modal = document.getElementById("preVisualizacao")
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"

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

function confirmarEnvio() {
    const modalDecisao = document.getElementById('modaldecisao')

    modalDecisao.style.display = 'flex'
    document.body.style.overflow = "hidden"

    window.addEventListener('click', (e) => {
        if (e.target == modalDecisao) {
            modalDecisao.style.display = "none";
            document.body.style.overflow = "scroll"
        }
    })

    document.getElementById('btnCancelDecisao').addEventListener('click', () => {
        modalDecisao.style.display = "none";
        document.body.style.overflow = "scroll"
    })
}


var posicaoSlide = 1;
showSlide(posicaoSlide);

function addSlide(n) {
    showSlide(posicaoSlide += n);
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("bloco");

    if (n > slide.length) { posicaoSlide = 1 }
    if (n < 1) { posicaoSlide = slide.length }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[posicaoSlide - 1].style.display = "flex";
}


const test = document.getElementById('tipoImovel').value

console.log(test)

$(document).ready(function () {
    const meuInputValor = $("#nomeUser").val();
    console.log(meuInputValor);
});