const mongoose = require('mongoose')
const Schema = mongoose.Schema
const IncidentSchema = new Schema({
    name: String,
    observation:String,
    employee:{
        required:'Employe id is required',
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    store:{
        required:'Tienda requerida',
        type: Schema.Types.ObjectId,
        ref:'Store'
    }
})

module.exports = mongoose.model("Incident", IncidentSchema)