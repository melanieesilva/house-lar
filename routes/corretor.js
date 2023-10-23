//CARREGANDO MÓDULOS
const express = require('express')
const router = express.Router()
const multer = require('multer')
    //MODELOS
    const Usuario = require('../models/Usuario')
    const Noticia = require('../models/Noticias')
    const Categoria_Noticia = require('../models/Categoria_Noticia')


var storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,"C:/Users/021.785638/Documents/GitHub/house-lar/public/uploads")
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname)
    }
})

const upload = multer({
    storage: storage
}).single("imagem")

router.get('/corretor/painelControle', (req, res) => {
    res.render('pages/imoveisPublicados', {
        layout: 'painelControle',
        pageTitle: 'Painel de Controle'
    });
});

router.get('/corretor/calendario', (req, res) => {
    res.render('pages/calendario.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Calendário - Painel De Controle'
    })
})

router.get('/corretor/noticiasCorretor', (req, res) => {
    res.render('pages/noticiasCorretor.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Notícias - Painel De Controle'
    })
})



router.post('/corretor/CadastrarNoticia', upload, async (req, res) => {
    try {
        const {
            titulo_noticia,
            descricao_noticia,
            autor_noticia,
            artigo_noticia,
            nome_categoria,
            cor_categoria,
        } = req.body;
        const imagem = req.file
        await Noticia.create({
                titulo_noticia: titulo_noticia,
                descricao_noticia: descricao_noticia,
                autor_noticia: autor_noticia,
                artigo_noticia: artigo_noticia,
                categoria_id: 1,
                nome_imagem: imagem.filename,
                data_imagem: imagem.buffer
            });
        
        console.log("Notícia cadastrada com sucesso!")
        res.redirect('/corretor/noticiasCorretor');
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocorreu um erro ao cadastrar a notícia');
    }
});


router.get('/corretor/solicitacoes', (req, res) => {
    res.render('pages/solicitacoes.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Solicitações - Painel de Controle'
    })
})

router.get('/corretor/publicarNoticia', (req, res) => {
    res.render('pages/Noticias/publicarNoticia.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Noticias - Painel de Controle'
    })
})

router.get('/corretor/mensagens', (req,res)=>{
    res.render('pages/Mensagens/mensagens.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Mensagens - Painel de Controle'
    })
})

router.get('/corretor/viewMensagem', (req, res) => {
    res.render('pages/Mensagens/viewMensagem.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Visualização Mensagem - Painel de Controle'
    })
})

router.get('/corretor/publicarImovelCorretor', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publicarImovelCorretor.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor2', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor2.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor3', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor3.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor4', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor4.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor5', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor5.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor6', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor6.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor7', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor7.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor8', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor8.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor9', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor9.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor10', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor10.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})

router.get('/publiImovelCorretor11', (req, res) => {
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor11.handlebars', {
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
    })
})


module.exports = router