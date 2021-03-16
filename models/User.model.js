const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: String,
    lastName: String,
    email: {
        type:String,
        unique:true,
    },
    password: String,
    stores:[{
        type: Schema.Types.ObjectId,
        ref: "Store"
    }]
})

module.exports = mongoose.model("User", UserSchema)