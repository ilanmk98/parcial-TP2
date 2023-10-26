import express from 'express'
import RouterNota from './router/numeros.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/numeros',new RouterNota().start())

const PORT=8081
const server = app.listen(PORT,()=>console.log(`Servidor express escuchando en http://localhost:${PORT} `))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))