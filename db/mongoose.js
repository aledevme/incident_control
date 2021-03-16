var mongoose = require('mongoose')

var mongoDB = 'mongodb://127.0.0.1/control_incidencias'

const connection = mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

module.exports = connection

