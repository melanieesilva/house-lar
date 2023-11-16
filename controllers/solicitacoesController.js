const Solicitacao = require('../models/Solicitacoes')
const Imagem_Solicitacao = require('../models/Imagens_Solicitacoes')
const ViewSoliImagem = require('../models/ViewsSolicitacoesImagens')
const Imovel = require('../models/Imoveis')
const ImagensImovel = require('../models/Imagens_Imovel')
const nodemailer = require('../config/nodemailerConfig')
// const axios = require('axios')
// const fs = require('fs');

const imovelController = require('../controllers/imoveisController')
const Cliente = require('../models/Clientes')


async function cadastrarImagens(idSoli, nomeImagem, pathImagem) {
    // const imgBuffer = fs.readFileSync(path);
    try {
        const imagemCriada = await Imagem_Solicitacao.findOne({
            where: {
                idSolicitacao_FK: idSoli,
                nomeImagem: nomeImagem,
                pathImagem: pathImagem
            }
        });

        if (imagemCriada) {
            console.log("Registro já existe e não foi adicionado.")
        } else {
            const imagem_solicitacao = await Imagem_Solicitacao.create({
                idSolicitacao_FK: idSoli,
                nomeImagem: nomeImagem,
                pathImagem: pathImagem
            }).then(() => { console.log("Imagem criada com sucesso!") }).catch((erro) => {
                console.log("Não foi possível cadastrar a imagem, veja o erro: " + erro)
            })
            return imagem_solicitacao;
        }

    } catch (error) {
        throw new Error('Não foi possível cadastrar imagem.')
    }
}

const cadastrarSoli = async (req, res) => {
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
            tipoImovel: tipoImovel,
            operacao: operacao,
            descricao: descricao,
            numQuartos: numQuartos,
            numBanheiros: numBanheiros,
            numVagas: numVagas,
            areaImovel: tamArea,
            valorImovel: valorImovel,
            valorCondominio: valorCondominio,
            valorIPTU: valorIPTU,
            parcelasIPTU: parcelaIPTU,
            construcao: construcaoImovel,
            numAndares: andaresImovel,
            dataEntrega: dataEntrega,
            emCondominio: condominioImovel,
            nomeCliente: nomeUser,
            telefoneCliente: telefone,
            emailCliente: email,
            CPFCliente: cpf,
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
            res.json({ Erro: "Erro ao cadastrar:" + erro })
        })

    } catch (error) {
        console.log("Não foi possível efetuar o comando", error)
        res.json({ Erro: "Não foi possível efetuar o comando." })
    }
}

const getSolicitacao = async (req, res) => {
    try {
        const viewSolicitacao = await ViewSoliImagem.findAll({
            where: {
                id_soli: req.params.id
            }
        })
        res.json({ viewSolicitacao })
        return viewSolicitacao
    } catch (error) {
        console.log("Não foi possível buscar: " + error)
    }
}

const publicarSoli = async (req, res) => {
    try {
        var aux;
        const solicitacaoAtt = await Solicitacao.update(
            { statusSoli: "Aceito" },
            { where: { id: req.params.id } }
        )
        if (solicitacaoAtt) {
            console.log("Solicitação atualizada com sucesso.")
            const solicitacao = await Solicitacao.findOne({
                where: { id: req.params.id }
            })

            const imovel = await Imovel.create({
                statusImovel: "Publicado",
                nome_prop: solicitacao.nomeCliente,
                email_prop: solicitacao.emailCliente,
                cpf_prop: solicitacao.CPFCliente,
                telefone_prop: solicitacao.telefoneCliente,
                operacao: solicitacao.operacao,
                tipo_imovel: solicitacao.tipoImovel,
                num_quartos: solicitacao.numQuartos,
                num_banheiros: solicitacao.numBanheiros,
                num_vagas: solicitacao.numVagas,
                area: solicitacao.areaImovel,
                construcao: solicitacao.construcao,
                em_condominio: solicitacao.emCondominio,
                num_andres: solicitacao.numAndares,
                data_entrega: solicitacao.dataEntrega,
                valor_imovel: solicitacao.valorImovel,
                valor_condominio: solicitacao.valorCondominio,
                valor_iptu: solicitacao.valorIPTU,
                parcelas_iptu: solicitacao.parcelasIPTU,
                cidade: solicitacao.cidade,
                bairro: solicitacao.bairro,
                endereco: solicitacao.endereco,
                numero: solicitacao.numero,
                descricao: solicitacao.descricao
            })
            if (imovel) {
                console.log("Solicitação publicada com sucesso!")
                const ImagemSolicitacao = await Imagem_Solicitacao.findAll({
                    where: {
                        idSolicitacao_FK: req.params.id
                    }
                })
                if (ImagemSolicitacao) {
                    console.log("Imagens encontradas.")
                    for (const imagem of ImagemSolicitacao) {
                        const imagens_imovel = await ImagensImovel.create({
                            idImovel_FK: imovel.id,
                            nome_imagem: imagem.nomeImagem,
                            path_imagem: imagem.pathImagem
                        })
                        if (imagens_imovel) {
                            console.log("Imagens cadastradas.")
                            aux = true;

                        } else {
                            console.log("Não foi possível cadastrar as imagens.")
                        }
                    }
                    if (aux === true) {
                        console.log("E-mail será enviado para: ")
                        console.log(imovel.email_prop)
                        try {
                            nodemailer.sendEmail({
                                subject: "Sua solicitação foi aceita",
                                to: `${imovel.email_prop}`,
                                from: process.env.EMAIL,
                                template: 'email',
                                context: {
                                    nome_completo: `${imovel.nome_prop}`,
                                    solicitacaoPublicada: true
                                }
                            })
                            console.log("O e-mail foi enviado ao proprietário")
                            req.flash("success_msg", "Solicitação publicada com sucesso!")
                            res.redirect("/corretor/solicitacoes")
                        } catch (error) {
                            console.log("NÃO FOI POSSÍVEL ENVIAR O E-MAIL: " + error)
                            req.flash("error_msg", "Não foi possível publicar a solicitação.")
                            res.redirect("/corretor/solicitacoes")
                        }

                    }

                }
            }
        }
    } catch (error) {
        console.log("A tentativa de publicar solicitação não foi bem sucedida: " + error)
    }
}

const rejeitarSoli = async (req,res) => {
    try {
        const solicitacaoRecus = await Solicitacao.update(
            { statusSoli: 'Recusado' },
            { where: { id: req.params.id}}
        );

        const solicitacaoData = await Solicitacao.findOne({where: {id:req.params.id}})
        const cliente = await Cliente.findOne({where:{id:1}})

        if(solicitacaoRecus){
            const emailEnviado = await nodemailer.sendEmail({
                subject: "Sua solicitação foi recusada",
                to: `${solicitacaoData.emailCliente}`,
                from: process.env.EMAIL,
                template: 'email',
                context: {
                    telefoneCliente: cliente.telefoneCliente,
                    emailCliente: cliente.email_cliente,
                    solicitacaoRejeitada: true
                }
            })

            if(solicitacaoRecus && emailEnviado){
                console.log("Imóvel recusado e e-mail enviado.")
                req.flash("success_msg", "Solicitação recusada com sucesso.")
                res.redirect("/corretor/solicitacoes")
            }else{
                console.log("A solicitação ou o e-mail não foram enviados.")
                req.flash("error_msg", "Não foi possível recusar a solicitação")
                res.redirect("/corretor/solicitacoes")
            }
        }

        

    } catch (error) {
        console.log("Não foi possível recusar a solicitação: "+error)
    }
}

const filtrarSolicitacoes = async (req, res) => {
    const optionReq = req.params.option

    switch (optionReq) {
        case "recente":
            try {
                const solicitacoesRecentes = await ViewSoliImagem.findAll({
                    group: ['id_soli'],
                    order: [
                        ['id_soli','DESC']
                    ]
                })
                if(solicitacoesRecentes){
                    console.log("Solicitações recentes enviadas.")
                    res.render('pages/solicitacoes',{views:solicitacoesRecentes})
                }
                
            } catch (error) {
                req.flash("error_msg","Não foi possível filtrar as solicitações recentes.")
                res.redirect('/corretor/solicitacoes')
                console.log("Não foi possível filtrar as solicitações recentes.")
            }
            break;
        case "antigo":
            try {
                const solicitacoesAntigas = await ViewSoliImagem.findAll({
                    group: ['id_soli'],
                    order: [
                        ['id_soli','ASC']
                    ]
                })
                if(solicitacoesAntigas){
                    console.log("Solicitações antigas enviadas.")
                    res.render('pages/solicitacoes',{views:solicitacoesAntigas})
                }else{
                    console.log("Solicitações antigas não foram enviadas.")
                }
                
            } catch (error) {
                req.flash("error_msg","Não foi possível filtrar as solicitações antigas.")
                res.redirect('/corretor/solicitacoes')
                console.log("Não foi possível filtrar as solicitações antigas.")
            }
        break;
        case "aluguel":
            try {
                const solicitacoesAluguel = await ViewSoliImagem.findAll({
                    group: ['id_soli'],
                    where: { operacao: 'Aluguel'}
                })
                if(solicitacoesAluguel){
                    console.log("Solicitações de aluguel enviadas.")
                    res.render('pages/solicitacoes',{views:solicitacoesAluguel})
                }else{
                    console.log("Solicitações de aluguel não foram enviadas.")
                }
                
            } catch (error) {
                req.flash("error_msg","Não foi possível filtrar as solicitações de aluguel.")
                res.redirect('/corretor/solicitacoes')
                console.log("Não foi possível filtrar as solicitações de aluguel.")
            }
        break;

        case "venda":
            try {
                const solicitacoesVenda = await ViewSoliImagem.findAll({
                    group: ['id_soli'],
                    where: { operacao: 'Venda'}
                })
                if(solicitacoesVenda){
                    console.log("Solicitações de venda enviadas.")
                    res.render('pages/solicitacoes',{views:solicitacoesVenda})
                }else{
                    console.log("Solicitações de venda não foram enviadas.")
                }
                
            } catch (error) {
                req.flash("error_msg","Não foi possível filtrar as solicitações de venda.")
                res.redirect('/corretor/solicitacoes')
                console.log("Não foi possível filtrar as solicitações de venda.")
            }
        break;

        default:
            console.log("Opção incorreta do switch.")
            break;
    }
}


module.exports = {
    cadastrarSoli,
    cadastrarImagens,
    getSolicitacao,
    publicarSoli,
    filtrarSolicitacoes,
    rejeitarSoli
}