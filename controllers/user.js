const User = require('../models/User.model')

const userController = {}

const bcrypt = require('bcrypt')

userController.login = async (req, res) => {
    try {
        
        const { email, password } = req.body

        const userFound = await User.findOne({ email : email })

        if(userFound){
            
            if( !bcrypt.compareSync(password, userFound.password) ){
                res.send({
                    user : null,
                    message : 'Las credenciales son incorrectas, verifique'
                })
            } else {
                res.send({
                    user: userFound
                })
            }

        } else {
            res.send({
                user:null,
                message : 'El usuario no se encuentra en nuestros registros'
            })   
        }


    } catch (error) {
        res.send(error)   
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