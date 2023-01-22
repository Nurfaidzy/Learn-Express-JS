const UserController = require('../Controller/UserController');
const Login = require('../Auth/Login');
const Middleware = require('../Middleware/Authenticate');

function startServer(app, port) {
  // app.get('/user', (req, res) => UserController.getUsers(req, res));
  app.get('/users', Middleware.authenticate, UserController.getUsers);

  app.post('/login', Login.login);

  // Listeing Port
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${port}`);
  });
}

module.exports = startServer;
