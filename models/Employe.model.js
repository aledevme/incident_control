const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EmployeeSchema = new Schema({
    name: String,
    lastName: String,
    email: {
        unique: true,
        type:String
    },
    password: String,
    direction:String, 
    cellphone:String
})

module.exports = mongoose.model("Employee", EmployeeSchema)