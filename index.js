const express = require('express')
const cors = require('cors');
const app = express()
const bodyparser = require('body-parser'); 
const port = process.env.PORT || 3000

//middlewares
app.use(cors())
app.use(bodyparser.json()); 

//parser responses
app.use(bodyparser.urlencoded({     
    extended: true
}))

const store = require('./routes/store')
const incident = require('./routes/incident');
const connection = require('./db/mongoose');
const user = require('./routes/user')

app.use('/stores', store)
app.use('/incidents', incident)
app.use('/users', user)

connection.then(() => {
    
    app.listen(port, () => {
        console.log('api works')
    })

}).catch((error) => console.log(error))
