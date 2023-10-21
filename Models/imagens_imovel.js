const db = require('../Database/Connection')

// Definindo modelo imagens_imovel

const imagens_imovel = db.connect.define('imagens_imovel',{
    id_imagem: db.Sequelize.INTEGER,
    dados_imagem: db.Sequelize.BLOB,
    data_upload: db.Sequelize.DATE
});

// imagens_imovel.sync({force:true})

module.exports = imagens_imovel