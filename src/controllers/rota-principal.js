
function rotaGetPrincipal(app){

    return app.get('/', (req, res) => {
        res.send('Olá Mundo!')
    });
}


module.exports = rotaGetPrincipal