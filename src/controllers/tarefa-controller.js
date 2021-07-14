const Tarefa = require('../models/tarefa')

module.exports = (app,bd) =>{
    app.get('/tarefa',(req,res)=>{
        res.json({
            result:bd.tasks,
            count:bd.tarefa.length
        })
    })

    app.post('/tarefa',(req,res)=>{
        const {titulo, descricao, status, dataCriacao} = req.body
        let newTasks =  new Tarefa(titulo, descricao, status, dataCriacao)
        bd.tarefa.push(newTasks)
        res.json({
            message:'Tarefa criada com sucesso',
            error:false
        })
    })
}










// function rotaGetTarefa(app){

//     return app.get('/tarefa', (req, res) => {
//         res.send('Rota ativada com GET e recurso tarefa')
//     })

// }

// function rotaPostTarefa(app){

//     return app.post('/tarefa', (req, res) => {
//         res.send('Rota POST de tarefa ativada: Tarefa adiconada ao banco de dados')
//         console.log(req.body)
//     })

// }

// module.exports = rotaTarefaObj = {

//     rotaGet:rotaGetTarefa,
//     rotaPost:rotaPostTarefa
// }