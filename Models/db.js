//Configurando Sequelize
const Sequelize = require('sequelize')
const dbHost = "localhost"

const connect = new Sequelize('larhouse','root','cimatec',{
    dialect: "mysql",
    host: dbHost
}) //conectando a um banco de dados chamado Objeto, na máquina do CIMATEC

module.exports = {
    Sequelize: Sequelize,
    connect: connect
}