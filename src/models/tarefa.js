// let id = 0

class Tarefa{

    constructor(titulo, descricao, status, userId){
        // this.id = id++
        this.titulo = titulo,
        this.descricao = descricao,
        this.status = status,
        this.dataCriacao = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss').diff,
        this.criador = userId
    }
}

module.exports = Tarefa