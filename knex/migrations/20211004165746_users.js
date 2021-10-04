exports.up = function (knex) {
	return knex.schema.createTable("users", function (table) {
		table.increments().primary();
		table.string("name", 255).notNullable();
		table.string("email", 255).notNullable();
		table.string("address", 255);
		table.string("role", 20).notNullable().defaultTo("user");
		table.boolean("account_verified").notNullable().defaultTo(false);
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.timestamp("updated_at").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
