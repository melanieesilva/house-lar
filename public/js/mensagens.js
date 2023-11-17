function verMensagem(el){
    const idMsg = el.getAttribute('data-mensagemId')

    console.log("Enviado")
    fetch(`/corretor/buscaMensagem/${idMsg}`)
    .then(response => {
        if(!response.ok){
            console.log("Não foi possível abrir a mensagem selecionada.")
        }
        return response.json()
    }).then(data =>{
        // console.log(data)
        const mensagemAberta = data.viewMensagem
        console.log(mensagemAberta[0])
        //openModal(mensagemAberta)

        //Percorrendo os arrays
        // solicitacaoRecebida.forEach(element => {
        //     console.log(element.pathImagem)
        // });
    }).catch(error =>{
        console.error('Erro na requisição:',error)
    })
}