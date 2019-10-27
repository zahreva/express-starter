const path = require('path');
const dotenv = require('dotenv-safe');

const config = {
  env: process.env.NODE_ENV || 'dev',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV !== 'production',
  isProduction: process.env.NODE_ENV === 'production',
  workingDirectory: path.join(__dirname, '../../')
};

// path to file with credentials
const envPath = `${config.workingDirectory}.env`.normalize();

// loads environment variables from a .env file into process.env
const envFound = dotenv.config({
  path: envPath,
  allowEmptyValues: true
});

if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

// common
config.port = parseInt(process.env.PORT, 10) || 3000;
config.db = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT
};

module.exports = config;
