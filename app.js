//CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')
const corretorRouter = require('./routes/corretor')
const publicRouter = require('./routes/public')
const connect = require('./Database/Connection')
const flash = require('connect-flash')

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
    //FLASH
    router.use(flash())
    //Middleware para armazenar flash e outras configurações em todas as rotas
    router.use((req,res,next)=>{
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
    })

//ROTAS
app.use('/',corretorRouter)
app.use('/',publicRouter)




app.listen(8080,function(){
    
    console.log(`Servidor iniciado na url http://localhost:8080`)
})