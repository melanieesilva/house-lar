const db = require('./db')

//Definindo modelo Usuário
const Noticia = db.connect.define('noticias',{
    id_noticia: db.Sequelize.INTEGER,
    titulo_noticia: db.Sequelize.STRING,
    descricao_noticia: db.Sequelize.STRING,
    artigo_noticia: db.Sequelize.TEXT,
    autor_noticia: db.Sequelize.STRING,
    publicado_por:{type:db.Sequelize.STRING, defaultValue:"House&Lar"},
    imagem_noticia: db.Sequelize.BLOB
});

// Noticia.sync({force:true})

module.exports = Noticias

