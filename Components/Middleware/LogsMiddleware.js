const winston = require('winston');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'logs.json',
      level: 'info',
      format: winston.format.json(),
    }),
  ],
});

module.exports.Logs = (req, res, next) => {
  try {
    const user = req.headers.authorization;
    const decode = jwt.verify(user, SECRET_KEY);
    const time = new Date();
    const date = time.toLocaleDateString();
    const clock = time.toLocaleTimeString();
    logger.info({
      TimeAcces: clock,
      DateAcces: date,
      Email: decode.email,
      Method: req.method,
      RouteHit: req.url,
    });
    next();
  } catch (error) {
    logger.error({
      TimeAcces: new Date().toLocaleTimeString(),
      DateAcces: new Date().toLocaleDateString(),
      Error: error.message,
      RouteHit: req.url,
    });
    next();
  }
};
