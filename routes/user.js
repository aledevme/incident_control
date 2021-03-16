const router = require('./router')
const userController = require('../controllers/user')

router.post('/signup', userController.signup)
router.get('/:id/stores', userController.getStores)

module.exports = router