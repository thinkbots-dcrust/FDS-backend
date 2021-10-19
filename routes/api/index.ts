const route = require("express").Router();
const Users = require("./users");
const Shops = require("./shops");

route.use("/shops", Shops.route);
route.use("/users", Users.route);

module.exports = { route };
