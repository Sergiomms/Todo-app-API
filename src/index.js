const express = require('express')
const app = express()
const port = 3091
const rotaPrincipal = require('./controllers/rota-principal')
const rotaUser = require('./controllers/usuario-controller')
const rotaTarefa = require('./controllers/tarefa-controller')

rotaPrincipal(app);
rotaUser.rotaGet(app);
rotaUser.rotaPost(app);
rotaTarefa.rotaGet(app);
rotaTarefa.rotaPost(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

