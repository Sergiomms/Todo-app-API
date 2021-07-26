const User = require("../models/userModel")
const UserDAO = require("../DAO/userDAO")

module.exports = (app, bd) => {

    let userBanco = new UserDAO(bd)

    app.get('/usuario', async (req, res) => {
        try{
            let resposta = await userBanco.getAllUsers()
            res.json({
                message:"Sucesso",
                Result: resposta,
                Count:resposta.length
            })
        }
        catch(err){
            res.json({
               message: "Erro ao mostrar usuários",
               Erro: err.message
            })
        }
    })
    app.get('/usuario/:id', async(req, res) =>{
        let id = req.params.id
        try{
            if(parseInt(id) != NaN){
                let resposta = await userBanco.getUserById(id)
                if(resposta.length > 0){
                    res.json({
                        Result:resposta
                    })
                }else{
                    throw new Error ("Nenhum usuario encontrado")
                }
            }else{
                throw new Error("É esperado um ID do tipo INT, tente novamente")
            }
        }
        catch(Error){
            res.json({Erro: Error.message})
        }
        // userBanco.getUserById(id)
        // .then((rows) =>{
        //     res.json({
        //         Result:rows,
        //         Count:rows.length
        //     })
        // })
        // .catch((err) =>{
        //     res.json({err})
        // })
    })
    app.post('/usuario',(req,res)=>{
        const {nome,email,senha} = req.body
        let newUser =  new User(nome,email,senha)
        userBanco.insertUser(newUser)
        .then(()=>{
            res.json({
                message:'Usuario inserido com sucesso',
                error: false
            })
        })
        .catch((err)=>{
            console.log(err)
            res.json({
                message:'Erro inserido com sucesso',
                error: true
            })
        })
    })
    app.delete('/usuario/:id', (req, res) =>{
        const id = req.params.id
        userBanco.deleteUser(id)
        .then(() =>{
            res.json({
                Message: "Usuario deletado com sucesso"
            })
        })
        .catch((err) =>{
            res.json({err})
        })
    })
    app.put('/usuario/:id', (req, res) =>{
        const id = req.params.id
        const {nome, email, senha} = req.body
        userBanco.updateUser(nome, email, senha, id)
        .then((rows) =>{
            res.json({
                Message:"Alteração realizada com sucesso",
                Result:rows
            })
        })
        .catch((err) =>{
            res.json({err})
        })
    })
    
    
    

    
}




// function rotaGetUser(app, bd){

//    return app.get('/usuario', (req, res) => {
//         res.send('Rastreamento da aplicação sendo feito com nodemon')

//     })
// }

// function rotaPostUser(app,bd){

//     return app.post('/usuario', (req, res) => {
//         const{nome, email, senha} = req.body
//         let newUser = new User(nome, email, senha)
//         res.send('Rota POST de usuario ativada: usuario adicionado ao banco de dados')
//         bd.users.push(newUser)
//         console.log(req.body)
//     })
// }


// module.exports = rotaUserObj = {
    
//     rotaGet:rotaGetUser,
//     rotaPost:rotaPostUser
    
// }

