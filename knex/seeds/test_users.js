exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("users").insert([
				{ id: 1, name: "Test01", email: "test01@test.com" },
				{ id: 2, name: "Test02", email: "test02@test.com" },
				{ id: 3, name: "Test03", email: "test03@test.com" },
			]);
		});
};
