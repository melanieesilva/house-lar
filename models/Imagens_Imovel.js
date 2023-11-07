const db = require('../Database/Connection')
const Imovel = require('../models/Imoveis')

// Definindo modelo imagens_imovel

const imagens_imovel = db.connect.define('imagens_imovel',{
    idImovel_FK: {
        type: db.Sequelize.INTEGER,
        references: {
          model: Imovel,
          key: 'id',
        }
    },
    nome_imagem: db.Sequelize.STRING,
    path_imagem: db.Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true
});

// imagens_imovel.sync({force:true})



module.exports = imagens_imovel