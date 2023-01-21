const user = require('../Model/User');

function startServer(app, port) {
  app.get('/user', async (req, res) => {
    try {
      const response = await user.findAll({ attributes: ['username', 'email'] });
      res.json(response);
    } catch (error) {
      res.send(error);
    }
  });

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${port}`);
  });
}

module.exports = startServer;
