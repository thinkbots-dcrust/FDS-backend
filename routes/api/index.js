const route = require("express").Router();
const Users = require("./users");

route.use("/users", Users.route);

module.exports = { route };
