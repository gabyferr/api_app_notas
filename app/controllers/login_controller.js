class LoginController {

    fazerLogin() {
        return async (req, resp, next) => {   
            resp.status(200).json({'mesg':'aaaa'})
        }
    }
}

module.exports = LoginController;