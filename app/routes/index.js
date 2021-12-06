const loginR = require('./login_routes');
const userR = require('./user_routes');

module.exports = (app) => {
    loginR(app);
    userR(app);
}