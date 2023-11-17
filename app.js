const app = require('./server')
const PORT = process.env.PORT || 3000

app.get('/template',(req,res)=>{
    res.render('layouts/email',{
        layout: 'email'
    })
})

app.listen(PORT,()=>{
    console.log(`Servidor iniciado na url http://localhost:8080`)
})