const mongoose = require('mongoose')
const Schema = mongoose.Schema
const IncidentSchema = new Schema({
    name: String,
    observation:String,
    employe:{
        required:'Employe id is required',
        type: mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    }
})

module.exports = mongoose.model("Incident", IncidentSchema)