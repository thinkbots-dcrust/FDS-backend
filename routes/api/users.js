const route = require("express").Router();
const { handleGoogleAuth } = require("../../controllers/users");

route.post("/google-auth", handleGoogleAuth);

module.exports = { route };
