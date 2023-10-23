const db = require('../Database/Connection')

// Definindo modelo solicitacoes

const solicitacoes = db.connect.define({
    // id_solicitacoes: db.Sequelize.INTEGER
})

// solicitacoes.sync({force:true})

module.exports = solicitacoes