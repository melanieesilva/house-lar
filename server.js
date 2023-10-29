//CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')
const moment = require('moment')
const corretorRouter = require('./routes/corretor')
const publicRouter = require('./routes/public')
const connect = require('./Database/Connection')
const session = require('express-session')
const flash = require('connect-flash')
const bodyParser = require('body-parser');

//CONFIGURAÇÕES    
    //EXPRESS
    const app = express()
    //HANDLEBARS
    app.engine('handlebars',handlebars.engine({
        partialsDir: __dirname + '/views/partials',
        helpers: {
            formatDate: (date) => {
                return moment(date).format('DD/MM/YYYY')
            }
        }
    }))
    app.set('view engine', 'handlebars')
    //BODY PARSER
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    //ARQUIVOS ESTÁTICOS
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



module.exports = app