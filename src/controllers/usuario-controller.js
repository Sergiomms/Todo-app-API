const User = require("../models/userModel")

module.exports = (app, bd) => {

    app.get('/usuario', (req, res) => {
    res.json({
        res:bd.users,
        count:bd.users.length
        })
    })

    app.get('/usuario/:email', (req, res) =>{

        let arrayResposta = bd.users.filter((element) => {
            return element.email === req.params.email
        })
        res.json({
            result:arrayResposta,
            count: arrayResposta.length
        })
    })

    app.post('/usuario',(req,res)=>{

        const {nome,email,senha} = req.body

        let newUser =  new User(nome,email,senha)
        bd.users.push(newUser)
        res.json({
            message:'Usuario criado com sucesso',
            error:false
        })
    })
    
    app.delete('/usuario/:email',(req,res)=>{
        let countArray = bd.users.length
        bd.users = bd.users.filter((element) => {
            return element.email !== req.params.email
        })
        if(countArray === bd.users.length ){
            res.json({
                message:`não existe usuario com esse email ${req.params.email}`,
                error: true
            })
        }
        else{
            res.json({
                message:`Usuario com o email: ${req.params.email} deletado com sucesso`,
                error: false
            })
        }
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

