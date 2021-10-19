exports.up = function (knex) {
	return knex.schema.createTable("shops", function (table) {
		table.increments().primary();
		table.string("name", 255).notNullable();
		table.string("email", 255).notNullable();
		table.string("address", 255);
		table.string("phone_number", 20).notNullable();
		table.string("rating", 1).defaultTo(0);
		table.boolean("shop_verified").notNullable().defaultTo(false);
		table.string("admin_id", 255);
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.timestamp("updated_at").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("shops");
};
