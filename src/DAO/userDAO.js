const User = require("../models/userModel");

class UserDAO{

    constructor(bd){

        this.bd = bd;
    }
    getAllUsers(){

        return new Promise((resolve, reject) =>{
            this.bd.all('Select * from USUARIOS',(err, rows) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    getUserById(id){

        return new Promise((resolve, reject) =>{
            this.bd.all("select * from USUARIOS where id = (?)", id, (error, rows) => {
                if(error){
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    insertUser(usuario){

        return new Promise((resolve, reject) =>{
            this.bd.run('Insert into USUARIOS (nome, email, senha) VALUES (?,?,?)', Object.values(usuario),(err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
    deleteUser(id){

        return new Promise((resolve, reject) =>{
            this.bd.all('Delete from USUARIOS where id =?', id, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
    updateUser(nome, email, senha, id){

        return new Promise((resolve, reject) =>{
            let params = [id]
            let query = "Update USUARIOS set"
            let dados = []
            let changes = 0

            if(nome != null){
                params.unshift(nome)
                dados.unshift(" nome =?")
                ++changes
            }
            if(email != null){
                params.unshift(email)
                dados.unshift(" email =?")
                ++changes
            }
            if(senha != null){
                params.unshift(senha)
                dados.unshift(" senha =?")
                ++changes
            }

            query += dados.join(',') + "where id =?"

            this.bd.run(query, params, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve({Changes:changes})
                }
            })
        })
    }

}

module.exports = UserDAO