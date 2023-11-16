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
