//CARREGANDO MÓDULOS
const express = require('express')
const router = express.Router()
const multer = require('../config/multerConfig')
require('dotenv').config()
//MODELOS
const Usuario = require('../models/Usuario')
const Noticia = require('../models/Noticias')
const Imovel = require('../models/Imoveis')
const Categoria_Noticia = require('../models/Categorias')
const Duvidas = require('../models/Duvidas')
const viewSolicitacaoImagem = require('../models/ViewsSolicitacoesImagens')
const viewImovelImagem = require('../models/ViewImovelImagem')
const Cliente = require('../models/Clientes')
const Disponivel = require('../models/Disponibilidades')
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


router.get('/corretor/calendario', (req, res) => {
    res.render('pages/calendario')
})

router.post('/corretor/cadastrarData', multer.uploadSingle, async (req, res) => {
    try{
        const{ horario }= req.body;

        await Disponivel.create({
            selecionar_data: horario
        });

        res.redirect('/')
    } catch(error){
        console.error(error);
        res.status(500).send('Ocorreu um erro ao cadastrar seu horário.');
    }
})

// router.get('/corretor/editarnoticia',(req,res) => {
//     res.render('pages/Noticias/editarNoticia')
// })

router.get('/corretor/noticiasCorretor', noticiasController.getNoticias)

router.post('/corretor/CadastrarNoticia', multer.uploadSingle,noticiasController.publicarNoticia);

router.post('/corretor/addCategoria',noticiasController.addCategoria)


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
            pageTitle: 'Solicitações - Painel de Controle',
            views:views
        })
    })
})

router.get('/corretor/publicarSolicitacao/:id',soliController.publicarSoli)

router.get('/corretor/rejeitarSolicitacao/:id',soliController.rejeitarSoli)

router.get('/corretor/filtroSolicitacao/:option',soliController.filtrarSolicitacoes)

router.get('/corretor/painelControle',imoveisController.getImoveis)

router.get('/corretor/detalheSolicitacao/:id', soliController.getSolicitacao)

router.get('/corretor/excluirImovel/:id',imoveisController.excluirImovel)

router.get('/corretor/desativarImovel/:id',imoveisController.desativarImovel)

router.get('/corretor/ativarImovel/:id',imoveisController.ativarImovel)

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

router.get('/corretor/publicarImovelCorretor', (req,res)=>{
    res.render('pages/publicarImovelCorretor')
})

router.post('/corretor/cadastrarImovelCorretor',multer.uploadArray,imoveisController.cadastrarImovel)



router.get('/corretor/uploadIMG',(req,res)=>{
    res.render('pages/uploadImg')
})

router.post('/corretor/cadImg',multer.uploadArray,(req,res)=>{
    const imgs = req.files
    for(const img of imgs){
        soliController.cadastrarImagens(50,img.filename,img.path)
    }
})



module.exports = router