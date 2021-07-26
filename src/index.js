//Import Express
const express = require('express')
const app = express()

const cors = require('cors')
//Import rotas
const rotaPrincipal = require('./controllers/rota-principal')
const rotaUser = require('./controllers/usuario-controller')
const rotaTarefa = require('./controllers/tarefa-controller')
const { response } = require('express')
//Import models e DB
const User = require('./models/userModel')
const Tarefa = require('./models/tarefa')
const bd = require('./infra/sqlite-db')


app.use(express.json()) //Tbm pode ser com body-parser (baixar com npm i body-parser e chamar com uma const bodyParser = require('body-parser')
app.use(cors())

// const testeUser = new User('Sergio', 'sergio@email.com', '123456')
// const testeTarefa = new Tarefa('tarefaTeste', 'descriçãoTesteTarefa', 'Iniciado', '12/07/2021')
// const testeUser2 = new User('teste', 'sergio@email.com', '123456')
// console.log(testeTarefa, testeUser, testeUser2)

//usando Rotas
rotaPrincipal(app);
rotaUser(app, bd);
rotaTarefa(app,bd);

module.exports = app

