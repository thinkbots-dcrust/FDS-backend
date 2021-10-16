const route = require("express").Router();
const {
	handleGoogleAuth,
	createUser,
	getAllUsers,
} = require("../../controllers/users");

route.post("/google-auth", handleGoogleAuth);

//TODO :- Remove These apis , temp apis
route.post("/create", createUser);
route.get("/", getAllUsers);

module.exports = { route };
