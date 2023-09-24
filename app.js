//Inicializando express
const express = require('express')
const app = express()

//Configurando handlebars
const handlebars = require('express-handlebars')

app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/sobrenos',function(req,res){
    res.render('pages/sobrenos.handlebars')
})

app.get('/', (req, res) => res.render('pages/paginaInicial.handlebars'));



app.listen(8080,function(){
    
    console.log("Servidor iniciado na url http://localhost:8080")
})