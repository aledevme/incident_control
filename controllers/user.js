const User = require('../models/User.model')

const userController = {}

const bcrypt = require('bcrypt')

userController.login = async () => {
    try {
        
    } catch (error) {
        
    }
}

userController.signup = async (req, res) => {
    try {
        const { name, lastname, email, password, role } = req.body
        
        const newUser = new User({
            name: name,
            lastname : lastname,
            email:email,
            password : bcrypt.hashSync(password, 10),
            role: role
        })

        await newUser.save()

        res.send(newUser)
    
    } catch (error) {
        res.send(error)
    }
}

userController.getStores = async (req, res) => {
    try {
        const { id } = req.params
        const findUser = await User.find({
            _id : id
        }).populate('stores')

        res.send(findUser)
    } catch (error) {
        res.send(error)
    }
}

userController.update = async () => {

}

userController.deleteAccount = async () => {

}

module.exports = userController