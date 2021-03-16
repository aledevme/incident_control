const Store = require('../models/Store.model')
const UserModel = require('../models/User.model')
const storeController = {}

storeController.saveStore = async (req, res) => {
    
    try {
        const {name, direction, user} = req.body
        
        const newStore = new Store({
            name: name,
            direction : direction,
            userId: user
        })
        
        await newStore.save()

        await UserModel.findByIdAndUpdate(user, {
            $push:{
                stores: newStore._id
            }
        })

        res.send(newStore)
    } catch (error) {
        res.send(error)
    }
}

storeController.getStores = async (req, res) => {
    try {
        const stores = await Store.find().populate('userId')

        res.send(stores)
    } catch (error) {
        res.send(error)
    }
}


module.exports = storeController