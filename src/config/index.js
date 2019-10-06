const path = require('path');

const config = {
  env: process.env.NODE_ENV || 'dev',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV !== 'production',
  isProduction: process.env.NODE_ENV === 'production',
  workingDirectory: path.join(__dirname, '../../')
};

// path to file with credentials
const envPath = path
  .join(__dirname, path.join(__dirname, '../../'))
  .normalize();

// loads environment variables from a .env file into process.env
require('dotenv').config({
  path: envPath
});

// common
config.port = parseInt(process.env.PORT, 10) || 3000;
// ...
module.exports = config;
