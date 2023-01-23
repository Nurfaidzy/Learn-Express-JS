const UserController = require('../Controller/UserController');
const Login = require('../Auth/Login');
const SignUp = require('../Auth/SignUp');
const Middleware = require('../Middleware/Authenticate');

function startServer(app, port) {
  // user signup
  app.post('/signup', SignUp.signUp);
  app.post('/login', Login.login);

  app.get('/users', Middleware.authenticate, UserController.getUsers);

  // Listeing Port
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${port}`);
  });
}

module.exports = startServer;
