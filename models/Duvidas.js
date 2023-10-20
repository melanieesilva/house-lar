const db = require('./db')

//Definindo modelo Duvidas
const Duvidas = db.connect.define('duvidas',{
    id_duvida: db.Sequelize.INTEGER,
    nome_cliente: db.Sequelize.STRING,
    email_cliente: db.Sequelize.STRING,
    telefone_cliente: db.Sequelize.STRING,
    mensagem_cliente: db.Sequelize.TEXT
});

// Duvidas.sync({force:true})
module.exports = Duvidas

