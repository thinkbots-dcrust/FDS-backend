import db from "handlers/sqlDB";

export const findAllUserSvc = async () => {
	const Users = db.raw(`
	SELECT * FROM Users;
	`);
	return Users;
};
