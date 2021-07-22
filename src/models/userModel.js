// let id = 0

const nodemon = require("nodemon");

class User{

    constructor(nome, email, senha){
        // this.id = id++
        this.nome = nome
        this.email = email
        this.senha = senha
    }
}


module.exports = User