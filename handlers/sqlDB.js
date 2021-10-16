const environment = process.env.APP_ENV || "dev";
console.log(environment);
const config = require("../knexfile.js")[environment];

module.exports = require("knex")(config);
