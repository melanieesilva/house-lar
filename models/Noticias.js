const db = require('../Database/Connection');

// Definindo modelo Usuário
const Noticia = db.connect.define('noticias', {
    // Remova a definição da coluna id do modelo
    // id: db.Sequelize.INTEGER,
    id_noticia: { type: db.Sequelize.INTEGER, primaryKey: true },
    titulo_noticia: db.Sequelize.STRING,
    descricao_noticia: db.Sequelize.STRING,
    artigo_noticia: db.Sequelize.TEXT,
    autor_noticia: db.Sequelize.STRING,
    publicado_por: { type: db.Sequelize.STRING, defaultValue: "House&Lar" },
    imagem_noticia: db.Sequelize.BLOB
}, {
    // Adicione a opção autoIncrement: true para a coluna id
    timestamps: false
});

// Noticia.sync({ force: true });

module.exports = Noticia;
