require("dotenv").config();
const app = require("./app");
const http = require("http");
const dateFormat = require("dateformat");
const fs = require("fs");
const path = require("path");
const { config } = require("./config.js");

if (config.mode === "pro") require("log-timestamp");

if (config.useMongoDB) {
	//call this for mongoDB connection
	require("../handlers/mongoDB");
}

process.env.TZ = config.timeZone;
console.log(`${process.env.TZ} Time zone`);

const port = normalizePort(config.app.port || "3000");
app.set("port", port);

/**
 * Create HTTP server
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces
 */
console.log(
	`(${config.mode} environment) ${dateFormat(
		new Date(),
		"yyyy/mm/dd HH:MM"
	)} Server is starting...`
);

//TODO:- Implement a database connection check before running server Starting sql DB only if it started successfully then the server starts

server.listen(port);
server.on("listening", onListening);

/////////////////////////////////////////////////////////////////////////////Main Code Ended //////////////////////////////////////////////////////////////////////////////////////////

//Functions///////

/**
 * Event listener for HTTP server "listening" event
 */
async function onListening() {
	const addr = server.address();
	const uri = typeof addr === "string" ? addr : `${addr.address}:${addr.port}`;
	console.log(`*************** Server listening on ${uri} ****************`);
}

/**
 * Normalize a port into a number, string, or false
 */
function normalizePort(val) {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// Named pipe
		return val;
	}

	if (port >= 0) {
		// Port number
		return port;
	}

	return false;
}
