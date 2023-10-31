//CARREGANDO MÓDULOS
const express = require('express')
const router = express.Router()
const multer = require('../config/multerConfig')
require('dotenv').config()
//MODELOS
const Usuario = require('../models/Usuario')
const Noticia = require('../models/Noticias')
const Imovel = require('../models/Imoveis')
const Categoria_Noticia = require('../models/Categoria_Noticia')
const Duvidas = require('../models/Duvidas')
const viewSolicitacaoImagem = require('../models/ViewsSolicitacoesImagens')
const viewImovelImagem = require('../models/ViewImovelImagem')
const Cliente = require('../models/Clientes')
//CONTROLLERS
const noticiasController = require('../controllers/noticiasController')
const msgController = require('../controllers/mensagensController')
const soliController = require('../controllers/solicitacoesController')
const imoveisController = require('../controllers/imoveisController')

//MIDDLEWARE
router.use((req,res,next)=>{
    res.locals.layout = 'painelControle'
    res.locals.pageTitle = 'Painel de Controle'
    next()
})

router.get('/corretor/painelControle', (req, res) => {
    res.render('pages/imoveisPublicados');
});

router.get('/corretor/calendario', (req, res) => {
    res.render('pages/calendario')
})

// router.get('/corretor/editarnoticia',(req,res) => {
//     res.render('pages/Noticias/editarNoticia')
// })

router.get('/corretor/noticiasCorretor', noticiasController.getNoticias)



router.post('/corretor/CadastrarNoticia', multer.uploadSingle, async (req, res) => {
    try {
        const {
            titulo_noticia,
            descricao_noticia,
            artigo_noticia,
            autor_noticia,
            publicado_por,
            nome_imagem,
            data_imagem,
            nome_categoria,
            status
        } = req.body;

        const imagem = req.file

        const Noticia_Cor = Noticia.findOne({
            where: {
                nome_categoria:nome_categoria
            }
        })

        const cor_categoria = Noticia_Cor.cor_categoria

        const noticia = await noticiasController.publicarNoticia(
            titulo_noticia,
            descricao_noticia,
            autor_noticia,
            publicado_por,
            artigo_noticia,
            nome_imagem,
            data_imagem,
            nome_categoria,
            cor_categoria,
            status,
        )
        
        req.flash("success_msg", "Notícia criada com sucesso!")
        res.redirect(200,'/corretor/noticiasCorretor');
    } catch (error) {
        
        res.redirect(500,'/corretor/noticiasCorretor')
        console.log(error);
        req.flash("error_msg", "Não foi possível cadastrar notícia.")
        console.log("O ERRO: "+error)
    }
});

router.get('/corretor/solicitacoes', (req, res) => {
    viewSolicitacaoImagem.findAll({
        attributes: [
            'id_soli',
            'statusSoli',
            'tipoImovel',
            'nomeCliente',
            'cidade',
            'bairro',
            'endereco',
            'numero',
            'dataPublicacao'
        ],
        group: ['id_soli']
    }).then((views)=>{
        res.render('pages/solicitacoes.handlebars', {
            layout: 'painelControle',
            pageTitle: 'Solicitações - Painel de Controle',
            views:views
        })
    })
})



router.get('/corretor/painelControle', imoveisController.getImoveis)

router.get('/corretor/detalheSolicitacao/:id', soliController.getSolicitacao)

router.get('/corretor/excluirImovel/:id', imoveisController.excluirImovel)

router.get('/corretor/DesativarNoticia/:id', (req, res) => {
    //findOne where id:req.params.id
    //then(noticia)
    //update noticia mudar status noticia para desativada onde id for igual a req.params.id

    // find all (where status = desativado) then(noticiasDesativadas)
    //busque a lista atualizada de noticias onde status = desativado
    //res render passa o objeto noticiasDesativadas para a rota noticiasCorretor
    router.get('/corretor/DesativarNoticia/:id', (req, res) => {
        const noticiaId = req.params.id;

        Noticia.findOne({
            where: { id: noticiaId }
        })
            .then(noticia => {
                if (noticia) {

                    noticia.update({
                        status: 'desativado'
                    })
                        .then(() => {

                            Noticia.findAll({
                                where: { status: 'desativado' }
                            })
                                .then(noticiasDesativadas => {

                                    res.render('pages/noticiasCorretor', {
                                        noticias: noticiasDesativadas,
                                        layout: 'painelControle',
                                        pageTitle: 'Notícias - Painel De Controle'
                                    });
                                })

                        })
                        .catch(error => {
                            console.log(error);
                            res.status(500).send('Erro ao desativar a notícia.');
                        });
                }
            })

    })
})

router.get('/corretor/publicarNoticia', noticiasController.getCategorias)

router.get('/corretor/mensagens', (req, res) => {
    Duvidas.findAll().then((duvidas) => {
        console.log(duvidas)
        res.render('pages/mensagens', {
            duvidas: duvidas
        })
    }).catch((error) => {
        console.log(error)
    })

})

router.get('/corretor/buscaMensagem/:id',msgController.getMensagem)

/*(router.get('/corretor/viewMensagem', (req, res) => {
    Duvidas.findAll().then((duvidas) => {
        console.log(duvidas)
        res.render('pages/Mensagens/viewmensagem', {
            duvidas: duvidas
        })
    }).catch((error) => {
        console.log(error)
    })
})*/

router.get('/corretor/publicarImovelCorretor', (req, res) => {
    res.render('pages/publicarImovelCorretor.handlebars')
})



module.exports = router