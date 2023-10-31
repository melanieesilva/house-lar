const db = require('../Database/Connection')
const Solicitacoes = require('../Database/Connection')

const Imagem_Solicitacao = db.connect.define('imagensSolicitacoes',{
	nomeImagem: db.Sequelize.STRING,
    pathImagem: db.Sequelize.STRING,
    idSolicitacao_FK: {
        type: db.Sequelize.INTEGER,
        references: {
          model: Solicitacoes,
          key: 'id',
        }
    }
},{
    timestamps: false,
    freezeTableName: true
})

// Imagem_Solicitacao.belongsTo(Solicitacoes, { foreignKey: 'idSolicitacao_FK' });

//Imagem_Solicitacao.sync({force:true})

module.exports = Imagem_Solicitacao