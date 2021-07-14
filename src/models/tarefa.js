let id = 0

class Tarefa{

    constructor(titulo, descricao, status, dataCriacao){
        this.id = id++
        this.titulo = titulo
        this.descricao = descricao
        this.status = status
        this.dataCriacao = dataCriacao
    }
}

module.exports = Tarefa