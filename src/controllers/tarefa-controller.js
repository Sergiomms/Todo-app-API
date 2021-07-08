
function rotaGetTarefa(app){

    return app.get('/tarefa', (req, res) => {
        res.send('Rota ativada com GET e recurso tarefa')
    })

}

function rotaPostTarefa(app){

    return app.post('/tarefa', (req, res) => {
        res.send('Rota POST de tarefa ativada: Tarefa adiconada ao banco de dados')
    })

}

module.exports = rotaTarefaObj = {

    rotaGet:rotaGetTarefa,
    rotaPost:rotaPostTarefa
}