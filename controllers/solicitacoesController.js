const Solicitacao = require('../models/Solicitacoes')
const Imagem_Solicitacao = require('../models/Imagens_Solicitacoes')
const ViewSoliImagem = require('../models/ViewsSolicitacoesImagens')
const fs = require('fs');


async function cadastrarImagens(idSoli,nomeImagem,pathImagem){
    // const imgBuffer = fs.readFileSync(path);
        try {
            const imagemCriada = await Imagem_Solicitacao.findOne({
                where: {
                    idSolicitacao_FK: idSoli,
                    nomeImagem: nomeImagem,
                    pathImagem: pathImagem
                }
            });

            if(imagemCriada){
                console.log("Registro já existe e não foi adicionado.")
            }else{
                const imagem_solicitacao = await Imagem_Solicitacao.create({
                    idSolicitacao_FK:idSoli,
                    nomeImagem:nomeImagem,
                    pathImagem:pathImagem
                }).then(()=>{console.log("Imagem criada com sucesso!")}).catch((erro)=>{
                    console.log("Não foi possível cadastrar a imagem, veja o erro: "+erro)
                })
                return imagem_solicitacao;
            }
         
        } catch (error) {
            throw new Error('Não foi possível cadastrar imagem.')
        }
}

// async function cadastrarSolicitacao(statusSoli,tipoImovel,operacao,descricao,numQuartos,numBanheiros,numVagas,areaImovel,valorImovel,
// valorCondominio,valorIPTU,parcelasIPTU,construcao,numAndares,dataEntrega,emCondominio
// ,nomeCliente,telefone,email,CPF,cidade,bairro,endereco,numero){
//     try {
//         const solicitacao = await Solicitacao.create({
//             statusSoli: statusSoli,
//             tipoImovel:tipoImovel,
//             operacao:operacao,
//             descricao:descricao,
//             numQuartos:numQuartos,
//             numBanheiros:numBanheiros,
//             numVagas:numVagas,
//             areaImovel:areaImovel,
//             valorImovel:valorImovel,
//             valorCondominio:valorCondominio,
//             valorIPTU:valorIPTU,
//             parcelasIPTU:parcelasIPTU,
//             construcao:construcao,
//             numAndares:numAndares,
//             dataEntrega:dataEntrega,
//             emCondominio:emCondominio,
//             nomeCliente:nomeCliente,
//             telefone:telefone,
//             email:email,
//             CPF: CPF,
//             cidade: cidade,
//             bairro: bairro,
//             endereco: endereco,
//             numero: numero
//         })
//         return solicitacao
//     } catch (error) {
//         throw new Error('Não foi possível enviar solicitação:'+error)
//     }

// }

const cadastrarSoli = async (req,res) => {
    try {
        const {
            nomeUser,
            email,
            cpf,
            telefone,
            operacao,
            tipoImovel,
            numQuartos,
            numBanheiros,
            numVagas,
            tamArea,
            construcaoImovel,
            condominioImovel,
            andaresImovel,
            dataEntrega,
            valorImovel,
            valorCondominio,
            valorIPTU,
            parcelaIPTU,
            cidade,
            bairro,
            endereco,
            numero,
            descricao,
        } = req.body
        const indexImagemRemovida = req.body.indexImagemRemovida
        const imagensEnviadas = req.files;
        let imagensSelecionadas;
        var imagensFinais;

        console.log(indexImagemRemovida)
        if (indexImagemRemovida === undefined) {
            console.log("index undefined")
            imagensFinais = imagensEnviadas
        } else {
            let indexesRemovidos = indexImagemRemovida.split(',').map(index => parseInt(index, 10));
            imagensSelecionadas = imagensEnviadas.filter((file, index) => {
                return !indexesRemovidos.includes(index);
            });
            imagensFinais = imagensSelecionadas
        }
        const solicitacao = await Solicitacao.create({
            statusSoli: "Solicitado",
            tipoImovel:tipoImovel,
            operacao:operacao,
            descricao:descricao,
            numQuartos:numQuartos,
            numBanheiros:numBanheiros,
            numVagas:numVagas,
            areaImovel:tamArea,
            valorImovel:valorImovel,
            valorCondominio:valorCondominio,
            valorIPTU:valorIPTU,
            parcelasIPTU:parcelaIPTU,
            construcao:construcaoImovel,
            numAndares:andaresImovel,
            dataEntrega:dataEntrega,
            emCondominio:condominioImovel,
            nomeCliente:nomeUser,
            telefone:telefone,
            email:email,
            CPF: cpf,
            cidade: cidade,
            bairro: bairro,
            endereco: endereco,
            numero: numero
        }).then((solicitacao) => {
            for (const img of imagensFinais) {
                cadastrarImagens(solicitacao.id, img.filename, img.path).
                    then(() => {
                        req.flash("success_msg", "Solicitação enviada com sucesso!")
                        res.redirect('/')
                    }).catch((error) => {
                        req.flash("error_msg", "Não foi possível enviar a solicitação")
                    })
            }
        }).catch((erro) => {
            console.log("ERRO: " + erro)
            res.json({Erro: "Erro ao cadastrar:"+erro})
        })

    } catch (error) {
        console.log("Não foi possível efetuar o comando", error)
        res.json({ Erro: "Não foi possível efetuar o comando." })
    }
}

const getSolicitacao = async (req,res) =>{
    try {
        const viewSolicitacao = await ViewSoliImagem.findAll({
            where:{
                id_soli:req.params.id
            }
        })
        res.json({viewSolicitacao})
        return viewSolicitacao
    } catch (error) {
        console.log("Não foi possível buscar: "+error)
    }
}



module.exports = {
    cadastrarSoli,
    cadastrarImagens,
    getSolicitacao
}