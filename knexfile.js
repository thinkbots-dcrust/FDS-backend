// Update with your config settings.

const { config } = require("./config");

module.exports = {
	development: {
		client: config.db.client,
		connection: {
			...config.db,
		},
		migrations: {
			directory: config.migration,
		},
		seeds: {
			directory: config.seed,
		},
		// ,
		// pool: {
		// 	min: Number(process.env.DB_POOL_MIN),
		// 	max: Number(process.env.DB_POOL_MAX),
		// },
		// acquireConnectionTimeout: Number(process.env.DB_TIMEOUT),
	},

	staging: {
		client: config.db.client,
		connection: {
			...config.db,
		},
		migrations: {
			directory: config.migration,
		},
		seeds: {
			directory: config.seed,
		},
		// ,
		// pool: {
		// 	min: Number(process.env.DB_POOL_MIN),
		// 	max: Number(process.env.DB_POOL_MAX),
		// },
		// acquireConnectionTimeout: Number(process.env.DB_TIMEOUT)
	},

	production: {
		client: config.db.client,
		connection: {
			...config.db,
		},
		migrations: {
			directory: config.migration,
		},
		seeds: {
			directory: config.seed,
		},
		// ,
		// pool: {
		// 	min: Number(process.env.DB_POOL_MIN),
		// 	max: Number(process.env.DB_POOL_MAX),
		// },
		// acquireConnectionTimeout: Number(process.env.DB_TIMEOUT)
	},
};
