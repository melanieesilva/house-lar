//CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')
const corretorRouter = require('./routes/corretor')
const publicRouter = require('./routes/public')
const connect = require('./Database/Connection')
const session = require('express-session')
const flash = require('connect-flash')

//CONFIGURAÇÕES    
    //EXPRESS
    const app = express()
    //HANDLEBARS
    app.engine('handlebars',handlebars.engine({
        defaultLayout:'main',
        partialsDir: __dirname + '/views/partials'
    }))
    app.set('view engine', 'handlebars')
    //BODY PARSER
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    //ARQUIVO ESTÁTICO
    app.use(express.static('public'))
    //DOTENV - VARIÁVEIS DE AMBIENTE
    require('dotenv').config()
    //SESSION
    app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 30000
        }
    }))
    //FLASH
    app.use(flash())
    //Middleware para armazenar flash e outras configurações em todas as rotas
    app.use((req,res,next)=>{
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