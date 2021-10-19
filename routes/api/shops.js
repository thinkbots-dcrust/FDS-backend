const route = require("express").Router();
const { createNewShop, getAllShops } = require("../../controllers/shops");

route.post("/create", createNewShop);
route.get("/all", getAllShops);

module.exports = { route };
