//CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')
const corretorRoute = require('./routes/corretor')
const publicRouter = require('./routes/public')

//CONFIGURAÇÕES
    //EXPRESS
    const app = express()
    //HANDLEBARS
    app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')
    //BODY PARSER
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    //ARQUIVO ESTÁTICO
    app.use(express.static('public'))
    //DOTENV - VARIÁVEIS DE AMBIENTE
    require('dotenv').config()



//ROTAS
app.use('/',corretorRoute)
app.use('/',publicRouter)




app.listen(process.env.PORT,function(){
    
    console.log(`Servidor iniciado na url http://localhost:${process.env.PORT}`)
})