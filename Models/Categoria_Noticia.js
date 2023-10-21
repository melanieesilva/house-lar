const db = require('../Database/Connection')

//Definindo modelo Categoria_noticia

const categoria_noticia = db.connect.define('categoria_noticia',{
    id_categoria: db.Sequilize.INTEGER,
    nome_categoria: db.Sequilize.STRING
});

// Categoria_noticia.sync({force:true})

module.exports = categoria_noticia