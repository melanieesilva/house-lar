//Configurando Sequelize
// const db = require('../Database/Connection.js');
const Sequelize = require('sequelize')
const dbHost = "localhost"
require('dotenv').config()

const connect = new Sequelize('larhouse','root',process.env.DBPWD,{
    dialect: "mysql",
    host: dbHost
})

connect.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

module.exports = {
    Sequelize: Sequelize,
    connect: connect
}