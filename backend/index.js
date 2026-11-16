const express = require('express')
const app = express()
const cors = require('cors')
const host = 'localhost'
const port = 3000
const conn = require('./db/conn')
require('./models/rel')

const rotaPrivada = require('./middleware/authMiddleware')
const funcionarioController = require('./controller/funcionario.controller')
const loginController = require('./controller/auth.controller')
const condominioController = require('./controller/condominio.controller')
const materiaisController = require('./controller/materiais.controller')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.status(200).json({message: 'servidor rodando'})
})

app.post('/funcionario', funcionarioController.cadastrar)
app.post('/login', loginController.login)

app.use(rotaPrivada)
app.post('/condominio', condominioController.cadastrar)
app.get('/condominios', condominioController.listar)
app.get('/condominio/buscar/:nome', condominioController.consultar)
app.delete('/condominio/:id', condominioController.apagar)

app.post('/materiais', materiaisController.cadastrar)

conn.sync()
.then(()=>{
    app.listen(port,host, ()=>{
        console.log(`Servidor rodando em http${host}:${port}`)
    })
})
.catch((err)=>{
    console.error('erro ao rodar servidor',err)
})