//ABRIR MODAL
const btnAddCategoria = document.getElementById('addCategoria')

function openModal(){
    const containerModal = document.getElementById('containerModal')
    const closeModal = document.getElementById('closeModal')

    console.log("add")
    containerModal.style.display = 'flex'

    closeModal.addEventListener('click',()=>{
        containerModal.style.display = 'none'
    })

}
