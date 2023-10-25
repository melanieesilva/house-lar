const Noticias = require('../models/Noticias')

function publicarNoticia(titulo, descricao, artigo, autor,publicadoPor,
    nomeImagem, dataImagem, nomeCategoria, corCategoria, status) {
    try {
        const noticia = Noticias.create({
            titulo_noticia: titulo,
            descricao_noticia: descricao,
            autor_noticia: autor,
            publicado_por: publicadoPor,
            artigo_noticia: artigo,
            nome_imagem: nomeImagem,
            data_imagem: dataImagem,
            nome_categoria: nomeCategoria,
            cor_categoria: corCategoria,
            status: status,
        });
        return noticia;
    } catch (error) {
        throw new Error('Não foi possível criar a notícia.');
    }
}

const getNoticias = async (req, res) => {
    try {
      const noticias = await Noticias.findAll();
      console.log(noticias);
      res.render('pages/noticiasCorretor', {
        noticias: noticias,
        layout: 'painelControle',
        pageTitle: 'Notícias - Painel De Controle'
      });
    } catch (error) {
      console.log(error);
    }
};

const getCategorias = async (req,res) =>{
    try {
        const noticias = await Noticias.findAll({
          attributes: ['nome_categoria']
        });
        console.log("Todas os detalhes de categoria foram recuperados.");
        res.render('pages/Noticias/publicarNoticia', {
          layout: 'painelControle',
          pageTitle: 'Publicar Noticia - Painel de Controle',
          noticias: noticias
        });
      } catch (erro) {
        console.log("Não foi possível fazer a busca: " + erro);
        res.render('pages/noticiasCorretor');
      }
}

module.exports = {
    publicarNoticia,
    getNoticias,
    getCategorias
};