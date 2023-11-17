const db = require('../Database/Connection');

//Definindo modelo Duvidas
const Duvidas = db.connect.define('duvidas',{
    nome_cliente: db.Sequelize.STRING,
    email_cliente: db.Sequelize.STRING,
    telefone_cliente: db.Sequelize.STRING,
    mensagem_cliente: db.Sequelize.TEXT
}, {

    timestamps: false,
    freezeTableName: true
});

// Duvidas.sync({force:true})
module.exports = Duvidas

