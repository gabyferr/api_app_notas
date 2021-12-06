const mongoPool = require('../../config/mongoPool');
const

class UserController {
    listar() {
        return async (req, resp, next) => {   
            resp.status(200).json({'mesg':'aaaa'})
        }
    }
}

module.exports = UserController;