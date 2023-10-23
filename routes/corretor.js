const express = require('express')
const router = express.Router()
const Usuario = require('../models/Usuario')
const Noticia = require('../models/Noticias')
const Categoria_Noticia = require('../models/Categoria_Noticia')

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



router.post('/corretor/CadastrarNoticia', async (req, res) => {
    try {
        // Obtenha os dados do formulário a partir de req.body
        const {
            titulo_noticia,
            descricao_noticia,
            autor_noticia,
            artigo_noticia,
            nome_categoria,
            cor_categoria
        } = req.body;

        // Crie uma nova categoria usando o modelo
        const Categoria = await Categoria_Noticia.create({
            nome_categoria: nome_categoria,
            cor_categoria: cor_categoria
        });

        // Crie uma nova notícia associada à categoria recém-criada
        await Noticia.create({
            titulo_noticia: titulo_noticia,
            descricao_noticia: descricao_noticia,
            autor_noticia: autor_noticia,
            artigo_noticia: artigo_noticia,
            categoria_id: Categoria.id_categoria
        });

        res.redirect('/'); // Redirecione para a página inicial ou para onde desejar
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao cadastrar a notícia e categoria.');
    }
});


router.get('/solicitacoes', (req, res) => {
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