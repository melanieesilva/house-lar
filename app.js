// import { createRequire } from 'module'
// const require = createRequire(import.meta.url);

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


//Inicializando express
const express = require('express')
const app = express()


//Configurando handlebars
const handlebars = require('express-handlebars')

app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))


//Configurando body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Rotas
app.get('/sobrenos',function(req,res){
    res.render('pages/sobrenos.handlebars')
})

app.get('/', (req, res) => res.render('pages/paginaInicial.handlebars'));



app.listen(8080,function(){
    
    console.log("Servidor iniciado na url http://localhost:8080")
})