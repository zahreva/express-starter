const winston = require('winston');

const myFormat = winston.format.combine(
  winston.format.prettyPrint(),
  winston.format.colorize(),
  winston.format.simple()
);

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
  format: myFormat
});

module.exports = { logger };
