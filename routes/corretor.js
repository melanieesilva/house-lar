const express = require('express')
const router = express.Router()


router.get('/painelControle', (req,res) => {
    res.render('pages/imoveisPublicados', {
        layout: 'painelControle',
        pageTitle: 'Painel de Controle'
    });
});

router.get('/calendario', (req,res) => {
    res.render('pages/calendario.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Calendário - Painel De Controle'
    })
})

router.get('/noticiasCorretor', (req,res) => {
    res.render('pages/noticiasCorretor.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Notícias - Painel De Controle'
    })
})

router.get('/solicitacoes', (req,res)=>{
    res.render('pages/solicitacoes.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Solicitações - Painel de Controle'
    })
})

router.get('/publicarNoticia', (req,res)=>{
    res.render('pages/Noticias/publicarNoticia.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Noticias - Painel de Controle'
    })
})

router.get('/mensagens', (req,res)=>{
    res.render('pages/Mensagens/mensagens.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Mensagens - Painel de Controle'
    })
})

router.get('/viewMensagem',(req,res)=>{
    res.render('pages/Mensagens/viewMensagem.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Visualização Mensagem - Painel de Controle'
})
})

router.get('/publicarImovelCorretor',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publicarImovelCorretor.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor2',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor2.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor3',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor3.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor4',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor4.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor5',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor5.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor6',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor6.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor7',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor7.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor8',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor8.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor9',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor9.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor10',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor10.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

router.get('/publiImovelCorretor11',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor11.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})


module.exports = router