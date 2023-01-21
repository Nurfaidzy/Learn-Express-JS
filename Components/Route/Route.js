const UserController = require('../Controller/UserController');

function startServer(app, port) {
  app.get('/user', (req, res) => UserController.getUsers(req, res));

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${port}`);
  });
}

module.exports = startServer;
