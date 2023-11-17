const Noticias = require('../models/Noticias')

async function publicarNoticia(titulo, descricao, artigo, autor,publicadoPor,
    nomeImagem, dataImagem, nomeCategoria, corCategoria, status) {
    try {
        const noticia = await Noticias.create({
            titulo_noticia: titulo,
            descricao_noticia: descricao,
            autor_noticia: autor,
            publicado_por: publicadoPor,
            artigo_noticia: artigo,
            nome_imagem: nomeImagem,
            data_imagem: dataImagem,
            nome_categoria: nomeCategoria,
            cor_categoria: corCategoria,
            status: 'Publicada',
        });
        
        return noticia;
    } catch (error) {
        console.log("erro: "+error)
        throw new Error('Não foi possível criar a notícia.');
    }
}

const getNoticias = async (req, res) => {
    try {
      const noticias = await Noticias.findAll();
      console.log(noticias);
      res.status(200).render('pages/noticiasCorretor', {
        noticias: noticias,
        layout: 'painelControle',
        pageTitle: 'Notícias - Painel De Controle'
      });
    } catch (error) {

      throw new Error(error);
    }
};

const getNoticia = async (req,res)=>{
  try {
    const Noticia = await Noticias.findOne({
      where:{
        id:req.params.id
      }
    })
    console.log(Noticia)
    res.status(200).render('pages/Noticias/artigoNoticia',{noticia:Noticia})
  } catch (error) {
    console.log("Não foi encontrar a notícia, erro: "+error)
  }

}

// const getCategorias = async (req,res) =>{
//     try {
//         const categorias = await Noticias.findAll({
//           attributes: ['nome_categoria']
//         });
//         console.log("Todas os detalhes de categoria foram recuperados.");
//         res.status(200).render('pages/Noticias/publicarNoticia', {
//           layout: 'painelControle',
//           pageTitle: 'Publicar Noticia - Painel de Controle',
//           categorias: categorias
//         });
//       } catch (erro) {
//         throw new Error('Não foi possível fazer a busca.');
//         // res.render('pages/noticiasCorretor');
//       }
// }

module.exports = {
    publicarNoticia,
    getNoticias,
    getNoticia
};