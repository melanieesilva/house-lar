//Configurando Sequelize
const Sequelize = require('sequelize')
const dbHost = "localhost"

const connect = new Sequelize('larhouse','root','',{
    dialect: "mysql",
    host: dbHost
}) //conectando a um banco de dados chamado Objeto, na máquina do CIMATEC

connect.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

module.exports = {
    Sequelize: Sequelize,
    connect: connect
}