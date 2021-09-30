require('dotenv').config();

const {DB_USER, DB_PASSWORD, DB_HOST,API} = process.env;

module.exports = {
    dbUser: DB_USER,
    dbPassword: DB_PASSWORD,
    dbHost: DB_HOST,
    api: API
}