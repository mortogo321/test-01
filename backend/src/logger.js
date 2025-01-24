const expressWinston = require("express-winston");
const winston = require("winston");

module.exports.logger = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
});

module.exports.loggerError = expressWinston.errorLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
});
