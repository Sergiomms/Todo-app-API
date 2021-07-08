
function rotaGetUser(app){

   return app.get('/usuario', (req, res) => {
        res.send('Rastreamento da aplicação sendo feito com nodemon')
    })
}

function rotaPostUser(app){

    return app.post('/usuario', (req, res) => {
        res.send('Rota POST de usuario ativada: usuario adicionado ao banco de dados')
    })
}

module.exports = rotaUserObj = {
    
    rotaGet:rotaGetUser,
    rotaPost:rotaPostUser

}

