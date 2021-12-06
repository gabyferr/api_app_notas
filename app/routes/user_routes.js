const UserController = require('../controllers/user_controller')
const userController = new UserController();

module.exports = (app) => {
    app.get('/user', userController.listar())
}