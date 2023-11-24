const btnAddCategoria = document.getElementById('addCategoria')
var cliques = 0;

var formData = new FormData();
var corCategoria;

function setCategoria() {
    const optionsDrop = document.querySelectorAll('#optionDropModal')
    const optionMain = document.getElementById('optionMainModal')

    optionsDrop.forEach(element => {
        element.addEventListener('click', (item) => {
            let dataCor = item.target.getAttribute('data-cor')

            switch (dataCor) {
                case "Red":
                    optionMain.innerHTML = "Vermelho"
                    optionMain.style.backgroundColor = "#FFE1E1"
                    optionMain.style.color = "#C80000"
                    corCategoria = "Vermelho"
                    break;
                case "Azul":
                    optionMain.innerHTML = "Azul"
                    optionMain.style.backgroundColor = "rgba(0, 128, 200, 0.12)"
                    optionMain.style.color = "#0080C8"
                    corCategoria = "Azul"
                    break;
                case "Verde":
                    optionMain.innerHTML = "Verde"
                    optionMain.style.backgroundColor = "rgba(0, 131, 60, 0.12)"
                    optionMain.style.color = "#00833C"
                    corCategoria = "Verde"
                    break;
                case "Amarelo":
                    optionMain.innerHTML = "Amarelo"
                    optionMain.style.backgroundColor = "rgba(223, 147, 0, 0.12)"
                    optionMain.style.color = "#DF9300"
                    corCategoria = "Amarelo"
                    break;
                case "Roxo":
                    optionMain.innerHTML = "Roxo"
                    optionMain.style.backgroundColor = "rgba(71, 0, 223, 0.12)"
                    optionMain.style.color = "#4700DF"
                    corCategoria = "Roxo"
                    break;
                case "Laranja":
                    optionMain.innerHTML = "Laranja"
                    optionMain.style.backgroundColor = "rgba(223, 80, 0, 0.12)"
                    optionMain.style.color = "#DF5000"
                    corCategoria = "Laranja"
                    break;
                default:
                    console.log("Não foi possível identificar uma cor de categoria.")
                    break;
            }
            
        })
    });

}

function sendCategoria(){
    var cor = corCategoria;
    console.log(cor)
    var nome = document.getElementById('nomeCategoria').value
    console.log(nome)
}

function openModal() {
    const containerModal = document.getElementById('containerModal')
    const closeModal = document.getElementById('closeModal')

    console.log("add")
    containerModal.style.display = 'flex'

    closeModal.addEventListener('click', () => {
        containerModal.style.display = 'none'
    })

    setCategoria()

    corCategoria = "Vermelho"
    const optionMain = document.getElementById('optionMainModal')
    optionMain.innerHTML = "Vermelho"
    optionMain.style.backgroundColor = "#FFE1E1"
    optionMain.style.color = "#C80000"
    optionMain.setAttribute("data-cor","Vermelho")
}

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

window.onload = function () {
    document.getElementById('inputImg').addEventListener('change', getFileName);

    // function setColor(back,color){
    //     optionMain.style.backgroundColor = back
    //     optionMain.style.color = color
    // }

    // const optionMain = document.getElementById('optionDrop')
    // const cor = optionMain.getAttribute('data-corCategoria')
    // switch (cor) {
    //     case 'Vermelho':

    //         setColor('#FFE1E1','#C80000')
    //         break;
    //     case 'Azul':
    //         setColor('rgba(0, 128, 200, 0.12)','#0080C8')
    //     break;

    //     default:
    //         break;
    // }
}
const getFileName = (event) => {
    const files = event.target.files;
    const fileName = files[0].name;
    console.log("file name: ", fileName);


    const label = document.getElementById('labelInput')
    label.innerHTML = ''
    label.classList.add("change")
    const iconeRemove = document.createElement("iconify-icon")
    iconeRemove.setAttribute("icon", "mdi:remove")
    const nameFile = document.createElement("p")

    nameFile.classList.add('labelChange')

    nameFile.textContent = fileName
    label.appendChild(iconeRemove)
    label.appendChild(nameFile)

    const input = document.getElementById('inputImg')
    input.setAttribute("disabled", "")

    iconeRemove.addEventListener('click', () => {
        label.innerHTML = ''

        iconeRemove.setAttribute("icon", "material-symbols:upload")
        nameFile.textContent = "Escolher Imagem"

        label.appendChild(iconeRemove)
        label.appendChild(nameFile)
        label.classList.remove('change')
        nameFile.classList.remove('labelChange')
        setTimeout(() => {
            input.removeAttribute("disabled")
        }, 200)

    })
}

function cadastrarCategoria() {

    // fetch('/corretor/addCategoria',{
    //     headers:{
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     method: "POST",
    //     body: JSON.stringify({nomeCategoria:,corCategoria:})

    // }).then(response=>{

    // })
}


