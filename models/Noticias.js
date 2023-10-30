const db = require('../Database/Connection');

const Noticia = db.connect.define('noticias', {
    titulo_noticia: {
        type:db.Sequelize.STRING,
        allowNull: false
    },
    descricao_noticia: {
        type:db.Sequelize.STRING,
        allowNull: false
    },
    artigo_noticia: {
        type:db.Sequelize.TEXT,
        allowNull: false
    },
    autor_noticia: {
        type:db.Sequelize.STRING,
        allowNull: false
    },
    publicado_por: {
        type:db.Sequelize.STRING,
        defaultValue: "House&Lar"
    },
    nome_imagem: {
        type:db.Sequelize.STRING,
        allowNull: false,
    },
    data_imagem: {
        type:db.Sequelize.BLOB
    },
    nome_categoria: {
        type:db.Sequelize.STRING
    },
    cor_categoria: {
        type:db.Sequelize.ENUM('Amarelo', 'Azul', 'Roxo', 'Verde', 'Laranja', 'Vermelho')
    },
    status: {
        type: db.Sequelize.ENUM('Publicada','Desativada'),
        allowNull: false,
    }
});



// Noticia.sync({ force: true });


module.exports = Noticia;
