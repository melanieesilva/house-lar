//ABRIR MODAL
const btnAddCategoria = document.getElementById('addCategoria')

function openModal() {
    const containerModal = document.getElementById('containerModal')
    const closeModal = document.getElementById('closeModal')

    console.log("add")
    containerModal.style.display = 'flex'

    closeModal.addEventListener('click', () => {
        containerModal.style.display = 'none'
    })
}

var cliques = 0;

function openDrop(el) {
    const elementID = el.getAttribute("id")
    const conteudoModal = document.getElementById('conteudoModal')
    switch (elementID) {
        case "mainCategoriaModal":
            const bodyDropModal = document.getElementById('bodyDropModal');
            bodyDropModal.style.display = 'flex';
            console.log("Categoria modal aberta.")
            cliques++
            if (cliques >= 2) {
                bodyDropModal.style.display = 'none'
                cliques = 0;
            }
            break;
        case "mainCategoria":
            const bodydrop = document.getElementById('bodyDrop')
            bodydrop.style.display = 'flex'
            console.log("Categoria aberta.")
            cliques++
            if (cliques >= 2) {
                bodydrop.style.display = 'none'
                cliques = 0;
            }
            break;
        default:
            console.log("ID não identificado.")
            break;
    }

}


window.onload = function() {
    document.getElementById('inputImg').addEventListener('change', getFileName);

    function setColor(back,color){
        optionMain.style.backgroundColor = back
        optionMain.style.color = color
    }

    const optionMain = document.getElementById('optionDrop')
    const cor = optionMain.getAttribute('data-corCategoria')
    switch (cor) {
        case 'Vermelho':
         
            setColor('#FFE1E1','#C80000')
            break;
        case 'Azul':
            setColor('rgba(0, 128, 200, 0.12)','#0080C8')
        break;
        
        default:
            break;
    }
}
const getFileName = (event) => {
    const files = event.target.files;
    const fileName = files[0].name;
    console.log("file name: ", fileName);


    const label = document.getElementById('labelInput')
    label.innerHTML = ''
    label.classList.add("change")
    const iconeRemove = document.createElement("iconify-icon")
    iconeRemove.setAttribute("icon","mdi:remove")
    const nameFile = document.createElement("p")

    nameFile.classList.add('labelChange')

    nameFile.textContent = fileName
    label.appendChild(iconeRemove)
    label.appendChild(nameFile)

    const input = document.getElementById('inputImg')
    input.setAttribute("disabled","")

    iconeRemove.addEventListener('click',()=>{
        label.innerHTML = ''

        iconeRemove.setAttribute("icon","material-symbols:upload")
        nameFile.textContent = "Escolher Imagem"

        label.appendChild(iconeRemove)
        label.appendChild(nameFile)
        label.classList.remove('change')
        nameFile.classList.remove('labelChange')
        setTimeout(()=>{
            input.removeAttribute("disabled")
        },200)

    })
}