const db = require('./db')

//Definindo modelo Cliente
const Cliente = db.connect.define('clientes',{
    id_cliente: db.Sequelize.INTEGER,
    nome_cliente: db.Sequelize.STRING,
    email_cliente: db.Sequelize.STRING,
    telefone_cliente: db.Sequelize.STRING
});

// Cliente.sync({force:true})

module.exports = Cliente