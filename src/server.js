const app = require('./index')
const port = 3091

//Listen
app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});