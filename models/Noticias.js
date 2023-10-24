const db = require('../Database/Connection');

// Definindo modelo Usuário
const Noticia = db.connect.define('noticias', {
    titulo_noticia: db.Sequelize.STRING,
    descricao_noticia: db.Sequelize.STRING,
    artigo_noticia: db.Sequelize.TEXT,
    autor_noticia: db.Sequelize.STRING,
    publicado_por: { type: db.Sequelize.STRING, defaultValue: "House&Lar" },
    nome_imagem: db.Sequelize.STRING,
    data_imagem: db.Sequelize.BLOB,
    categoria_id: db.Sequelize.INTEGER,
    status: db.Sequelize.ENUM('Publicada','Desativada')
});

// Noticia.sync({ force: true });

module.exports = Noticia;
