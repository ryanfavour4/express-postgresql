const {Pool} = require("pg");

const client = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "87329100Rf",
    database: "TestDataBase",
})

module.exports = client;
