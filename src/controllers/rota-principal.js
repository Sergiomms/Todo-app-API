module.exports = (app) => {

    app.get('/', (req, res) => {
    res.send('Olá Mundo!')
    })

}



// function rotaGetPrincipal(app){

//     return app.get('/', (req, res) => {
//         res.send('Olá Mundo!')
//     });
// }


// module.exports = rotaGetPrincipal