const UserController = require('../Controller/UserController');
const Login = require('../Auth/Login');

function startServer(app, port) {
  // app.get('/user', (req, res) => UserController.getUsers(req, res));
  app.get('/users', UserController.authenticate, UserController.getUsers);

  app.post('/login', Login.login);

  // Listeing Port
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${port}`);
  });
}

module.exports = startServer;
