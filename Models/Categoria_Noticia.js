const db = require('../Database/Connection')

//Definindo modelo Categoria_noticia

const Categoria_Noticia = db.connect.define('categoria_noticia',{
    nome_categoria: db.Sequelize.STRING,
    cor_categoria: db.Sequelize.ENUM('Amarelo', 'Azul', 'Roxo', 'Verde', 'Laranja', 'Vermelho')
});


// Categoria_Noticia.sync({force:true})

module.exports = Categoria_Noticia