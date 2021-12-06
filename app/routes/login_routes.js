const LoginControll = require('../controllers/login_controller');
const loginControll = new LoginControll();


module.exports = (app) => {
    app.post('/login', loginControll.fazerLogin())
}