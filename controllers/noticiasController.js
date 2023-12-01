const Noticias = require('../models/Noticias')
const Categorias = require('../models/Categorias')



const publicarNoticia = async (req,res) =>{
  try {
    const {
      titulo, 
      descricao, 
      artigo, 
      autor,
      nomeCategoria, 
      corCategoria
    } = req.body

    const imagem = req.file;

    const noticia = await Noticias.create({
      titulo_noticia: titulo,
      descricao_noticia: descricao,
      autor_noticia: autor,
      publicado_por: "House&Lar",
      artigo_noticia: artigo,
      nome_imagem: imagem.filename,
      nome_categoria: nomeCategoria,
      cor_categoria: corCategoria,
      status: 'Publicada'
    });

    if(noticia){
      console.log("Notícia publicada com sucesso!")
      req.flash("success_msg","Notícia publicada com sucesso!")
      res.redirect("/corretor/noticiasCorretor")
    }else{
      console.log("Não foi possível cadastrar a notícia")
      req.flash("error_msg","Não foi possível cadastrar a notícia")
      res.redirect("/corretor/noticiasCorretor")
    }

    
  } catch (error) {
    console.log("Erro ao cadastrar notícia: " + error)
    throw new Error('Não foi possível criar a notícia.');
  }
}

const getNoticias = async (req, res) => {
  try {
    const noticias = await Noticias.findAll();
    console.log(noticias);
    const totalPublicadas = await Noticias.count({
      where: {
        status: "Publicada"
      }
    })
    const totalDesativadas = await Noticias.count({
      where: {
        status: "Desativada"
      }
    })

    const publicadas = noticias.filter(imovel => noticias.status === 'Publicada');
    const desativadas = noticias.filter(imovel => noticias.status === 'Desativada');

    res.status(200).render('pages/noticiasCorretor', {
      noticias: noticias,
      publicadas:publicadas,
      desativadas:desativadas,
      totalPublicadas:totalPublicadas,
      totalDesativadas:totalDesativadas,
      layout: 'painelControle',
      pageTitle: 'Notícias - Painel De Controle'
    });
  } catch (error) {
    throw new Error(error);
  }
};

const getNoticia = async (req, res) => {
  try {
    const Noticia = await Noticias.findOne({
      where: {
        id: req.params.id
      }
    })
    console.log(Noticia)
    res.status(200).render('pages/Noticias/artigoNoticia', {
      noticia: Noticia
    })
  } catch (error) {
    console.log("Não foi encontrar a notícia, erro: " + error)
  }

}

const getCategorias = async (req, res) => {
  try {
    const categorias = await Categorias.findAll();
    const categoriaDefault = await Categorias.findOne({ where: { cor_categoria: "Vermelho" } })
    if (categorias) {
      console.log("Todas a categorias foram recuperadas.");
      res.status(200).render('pages/Noticias/publicarNoticia', {
        categorias: categorias,
        categoriaDefault: categoriaDefault
      });
    } else {
      console.log("Categorias não foram encontradas.")
    }

  } catch (erro) {
    throw new Error('Não foi possível fazer a busca.'+erro);
  }
}

const addCategoria = async (req, res) => {
  try {
    const {
      nomeCategoria,
      corCategoria
    } = req.body
    console.log("Informações da requisição: ")
    console.log("Nome da categoria: " + nomeCategoria)
    console.log("Cor da categoria:" + corCategoria)
    const categorias = await Categorias.create({
      nome_categoria: nomeCategoria,
      cor_categoria: corCategoria
    })
    if (categorias) {
      console.log("Categoria criada com sucesso!")
      res.json({ categorias })
    }
  } catch (error) {
    console.log("Não foi possível cadastrar a categoria: " + error)
  }
}

module.exports = {
  publicarNoticia,
  getNoticias,
  getNoticia,
  getCategorias,
  addCategoria
};