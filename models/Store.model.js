const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StoreSchema = new Schema({
    name: String,
    direction: String,
    userId: {
        required: 'El usuario es requerido',
        type: Schema.Types.ObjectId,
        ref:'User'
    },
})

module.exports = mongoose.model("Store", StoreSchema)