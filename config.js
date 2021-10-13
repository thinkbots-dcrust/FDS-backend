require("dotenv").config();

const ENV = process.env.APP_ENV || "dev"; // 'pro' || 'dev' || 'test'
const MONGO_HOST = process.env.MONGO_HOST;
const GOOGLE_CLIENT_TOKEN = process.env.GOOGLE_CLIENT_TOKEN;

const dev = {
	mode: "dev",
	clients: ["http://localhost:3000", "http://macbook.local:3000"],
	app: {
		port: 9393,
	},
	db: {
		client: "mysql",
		host: "mariadb",
		port: 3306,
		user: "root",
		password: "classmate",
		database: "fds_dcrust_dev",
	},
	mongoDBLink: `mongodb://${MONGO_HOST}:27017/fds_dev`,
	timeZone: "Asia/Calcutta",
	logReqBody: true,
	logReqParams: true,
	googleClientToken: GOOGLE_CLIENT_TOKEN,
	migration: __dirname + "/knex/migrations",
	seed: __dirname + "/knex/seeds",
	superAdminList: ["iamtushar324@gmail.com"],
};
const pro = {
	mode: "pro",
	clients: [
		"http://localhost/",
		"http://localhost:3000",
		"http://macbook.local:3000",
		"http://macbook.local",
		"https://fds.thinkbots.club",
	],
	app: {
		port: 9292,
	},
	db: {
		client: "mysql",
		host: "localhost",
		port: 3306,
		user: "root",
		password: "classmate",
		database: "fds_dcrust_dev",
	},
	mongoDBLink: `mongodb://${MONGO_HOST}:27017/fds_pro`,
	timeZone: "Asia/Calcutta",
	logReqBody: true,
	logReqParams: true,
	googleClientToken: GOOGLE_CLIENT_TOKEN,
	superAdminList: ["iamtushar324@gmail.com"],
};

const config = {
	development: { ...dev },
	pro: { ...pro },
};

module.exports.config = config[ENV];
