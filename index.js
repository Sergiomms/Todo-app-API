const express = require('express')
const app = express()
const port = 3091

app.get('/', (req, res) => {
    res.send('Rota ativada com GET')
})

app.get('/usuario', (req, res) => {
  res.send('Rota ativada com GET e recurso usuario')
})

app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefa')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

