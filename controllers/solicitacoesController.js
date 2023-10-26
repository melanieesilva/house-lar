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

async function cadastrarSolicitacao(    
statusSoli,tipoImovel,operacao,descricao,numQuartos,numBanheiros,numVagas,areaImovel,valorImovel,
valorCondominio,valorIPTU,parcelasIPTU,construcao,numAndares,dataEntrega,emCondominio){
    try {
        const solicitacao = await Solicitacao.create({
            statusSoli:statusSoli,
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
            emCondominio:emCondominio
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