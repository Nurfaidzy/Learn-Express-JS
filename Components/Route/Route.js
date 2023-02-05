const UserController = require('../Controller/UserController');
const Login = require('../Auth/Login');
const SignUp = require('../Auth/SignUp');
const Middleware = require('../Middleware/Authenticate');
const Log = require('../Middleware/LogsMiddleware');

function startServer(app, port) {
  // user signup
  app.post('/signup', Log.Logs, SignUp.signUp);
  app.post('/login', Log.Logs, Login.login);

  app.get('/users', Log.Logs, Middleware.authenticate, UserController.getUsers);

  // Listeing Port
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${port}`);
  });
}

module.exports = startServer;
