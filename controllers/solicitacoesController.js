const Solicitacao = require('../models/Solicitacoes')
const Imagem_Solicitacao = require('../models/Imagens_Solicitacoes')
const fs = require('fs')


async function cadastrarImagens(idSoli,nomeImagem,pathImagem){
    // const imgBuffer = fs.readFileSync(path);
        try {
            const imagem_solicitacao = await Imagem_Solicitacao.create({
                idSolicitacao_FK:idSoli,
                nomeImagem:nomeImagem,
                pathImagem:pathImagem
            }).then(()=>{console.log("Imagem criada com sucesso!")}).catch((erro)=>{
                console.log("Não foi possível cadastrar a imagem, veja o erro: "+erro)
            })
            
        } catch (error) {
            throw new Error('Não foi possível cadastrar imagem.')
        }
}

async function cadastrarSolicitacao(tipoImovel,operacao,descricao,numQuartos,numBanheiros,numVagas,areaImovel,valorImovel,
valorCondominio,valorIPTU,parcelasIPTU,construcao,numAndares,dataEntrega,emCondominio
,nomeCliente,telefone,email,CPF,cidade,bairro,endereco,numero){
    try {
        const solicitacao = await Solicitacao.create({
            statusSoli:'Publicado',
            tipoImovel:tipoImovel,
            operacao:operacao,
            descricao:descricao,
            numQuartos:numQuartos,
            numBanheiros:numBanheiros,
            numVagas:numVagas,
            areaImovel:areaImovel,
            valorImovel:valorImovel,
            valorCondominio:valorCondominio,
            valorIPTU:valorIPTU,
            parcelasIPTU:parcelasIPTU,
            construcao:construcao,
            numAndares:numAndares,
            dataEntrega:dataEntrega,
            emCondominio:emCondominio,
            nomeCliente:nomeCliente,
            telefone:telefone,
            email:email,
            CPF: CPF,
            cidade: cidade,
            bairro: bairro,
            endereco: endereco,
            numero: numero
        })
        return solicitacao
    } catch (error) {
        throw new Error('Não foi possível enviar solicitação.')
    }

}



module.exports = {
    cadastrarSolicitacao,
    cadastrarImagens
}