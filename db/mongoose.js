var mongoose = require('mongoose')

var mongoDB = 'mongodb+srv://thsolucionesquery:ThGeMauSoluciones@cluster0.ewjii.mongodb.net/control_incidencias?retryWrites=true&w=majority' //'mongodb://127.0.0.1/control_incidencias'

const connection = mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

module.exports = connection

