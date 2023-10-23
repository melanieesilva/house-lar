const db = require('./db')

//Definindo modelo Cliente
const Cliente = db.connect.define('clientes',{
    nome_cliente: db.Sequelize.STRING,
    email_cliente: db.Sequelize.STRING,
    telefone_cliente: db.Sequelize.STRING
});

// Cliente.sync({force:true})

module.exports = Cliente