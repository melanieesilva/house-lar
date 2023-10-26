console.log("conectado")

const inputFile = document.getElementById("inputFile")
const btnSub = document.getElementById("btnsub")

document.addEventListener('DOMContentLoaded',()=>{


inputFile.addEventListener('change',(event)=>{
    const imagesPreview = document.getElementById("containerImg")
    const imagesUpload = [];

    console.log("ouviu")

    for(let i = 0;i < event.target.files.length;i++){
        //obtenha cada file
        const file = event.target.files[i]

        //inicie o reader
        const reader = new FileReader()

        reader.onload = (e) =>{
            const img = new Image()
            img.src = e.target.result
            const src = img.src

            const BtnDelete = document.createElement("button")

            const icon = document.createElement("iconify-icon")
            icon.setAttribute('icon','mdi:remove')
            BtnDelete.appendChild(icon)
            BtnDelete.className = "btndelete"

            const imgPreview = document.createElement("div")
            imgPreview.className = "imgpreview"

            imgPreview.appendChild(BtnDelete)
            imgPreview.style.backgroundImage = `url(${src})`
            imagesPreview.appendChild(imgPreview)

            imagesUpload.push(file)
            
            BtnDelete.addEventListener('click',()=>{
                imagesPreview.removeChild(imgPreview)

                const index = imagesUpload.indexOf(file)
                if(index !== -1){
                    imagesUpload.splice(index,1)
                    console.log(imagesUpload)
                }
            })
        }
        reader.readAsDataURL(file);
    }

})

console.log("DOMContentLoaded")

function formLoad(arrayImg){
    const formData = new FormData()
    for(const file of arrayImg){
        formData.append('imagem',file)
    }


  
        const nomeUser = document.getElementById('nomeUser').value
        const email = document.getElementById('email').value
        const cpf = document.getElementById('cpf').value
        const telefone = document.getElementById('telefone').value
        const operacao = document.getElementById('operation').value
        const tipoImovel = document.getElementById('tipoImovel').value
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

function openPreView(){
    const modal = document.getElementById("preVisualizacao")
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"
}


// var posicaoSlide = 1;
// showSlide(posicaoSlide);

// function addSlide(n) {
//   showSlide(posicaoSlide += n);
// }

// function showSlide(n) {
//   var i;
//   var slide = document.getElementsByClassName("img-select");

//   if (n > slide.length) {posicaoSlide = 1}
//   if (n < 1) {posicaoSlide = slide.length}
  
//   for (i = 0; i < slide.length; i++) {
//     slide[i].style.display = "none";
//   }
//   slide[posicaoSlide-1].style.display = "flex";
// }


const test = document.getElementById('tipoImovel').value

console.log(test)

