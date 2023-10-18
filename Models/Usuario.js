const db = require('./db')

//Definindo modelo Usuário
const Usuario = db.connect.define('usuarios',{
    Nome: db.Sequelize.STRING,
    Email: db.Sequelize.STRING,
    Telefone: db.Sequelize.STRING,
    Senha: db.Sequelize.STRING
});

// Usuario.sync({force:true})

module.exports = Usuario