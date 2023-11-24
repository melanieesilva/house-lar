const btnAddCategoria = document.getElementById('addCategoria')
var cliques = 0;

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

function sendCategoria() {
    var cor = corCategoria;
    console.log(cor)
    var nome = document.getElementById('nomeCategoria').value
    console.log(nome)

    let formData = { corCategoria: cor, nomeCategoria: nome }

    fetch("/corretor/addCategoria", {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            console.log("Não foi possível enviar categorias")
        }
        return response.json()
    })
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
    optionMain.setAttribute("data-cor", "Vermelho")
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
    const optionCategoria = document.querySelectorAll('#optionDrop')
    const optionMain = document.getElementById('optionMain')

    const dataRes = optionMain.getAttribute('data-Res')

    if(dataRes === "true"){
        optionMain.style.backgroundColor = "#FFE1E1"
        optionMain.style.color = "#C80000"
    }else{
        optionMain.style.backgroundColor = "#ffe1f6"
        optionMain.style.color = "#c8005d"
    }

    optionCategoria.forEach(option => {
        const data = option.getAttribute('data-corCategoria')

        switch (data) {
            case "Vermelho":
                option.style.backgroundColor = "#FFE1E1"
                option.style.color = "#C80000"
                break;
            case "Azul":
                option.style.backgroundColor = "rgba(0, 128, 200, 0.12)"
                option.style.color = "#0080C8"
                break;
            case "Verde":
                option.style.backgroundColor = "rgba(0, 131, 60, 0.12)"
                option.style.color = "#00833C"
                break;
            case "Amarelo":
                option.style.backgroundColor = "rgba(223, 147, 0, 0.12)"
                option.style.color = "#DF9300"
                break;
            case "Roxo":
                option.style.backgroundColor = "rgba(71, 0, 223, 0.12)"
                option.style.color = "#4700DF"
                break;
            case "Laranja":
                option.style.backgroundColor = "rgba(223, 80, 0, 0.12)"
                option.style.color = "#DF5000"
                break;
            default:
                console.log("Não foi possível identificar uma cor de categoria.")
                break;
        }

        option.addEventListener('click',()=>{
            const dataCor = option.getAttribute('data-corCategoria')
            const valueCategoria = option.innerHTML;
            optionMain.innerHTML = valueCategoria
            const inputCor = document.getElementById('valueCor')
            const inputNome = document.getElementById('valueNome')
            inputCor.value = dataCor
            inputNome.value = valueCategoria

            switch (dataCor) {
                case "Vermelho":
                    optionMain.style.backgroundColor = "#FFE1E1"
                    optionMain.style.color = "#C80000"
                    break;
                case "Azul":
                    optionMain.style.backgroundColor = "rgba(0, 128, 200, 0.12)"
                    optionMain.style.color = "#0080C8"
                    break;
                case "Verde":
                    optionMain.style.backgroundColor = "rgba(0, 131, 60, 0.12)"
                    optionMain.style.color = "#00833C"
                    break;
                case "Amarelo":
                    optionMain.style.backgroundColor = "rgba(223, 147, 0, 0.12)"
                    optionMain.style.color = "#DF9300"
                    break;
                case "Roxo":
                    optionMain.style.backgroundColor = "rgba(71, 0, 223, 0.12)"
                    optionMain.style.color = "#4700DF"
                    break;
                case "Laranja":
                    optionMain.style.backgroundColor = "rgba(223, 80, 0, 0.12)"
                    optionMain.style.color = "#DF5000"
                    break;
                default:
                    console.log("Não foi possível identificar uma cor de categoria.")
                    break;
            }
        })
    })

}

const getFileName = (event) => {
    const files = event.target.files;
    const fileName = files[0].name;
    console.log("file name: ", fileName);

    document.getElementById('inputImgHidden').value = fileName
    

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



