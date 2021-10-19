import db from "handlers/sqlDB";

export const createNewShopSvc = async (shopData) => {
	const Shops = await db.raw(`
	INSERT INTO Shops (name , email , phone_number) Values ("${shopData.name}" , "${shopData.email}" , "${shopData.phone_number}");
	`);
	console.log(Shops[0]);
	return Shops[0];
};

export const getAllShopsSvc = async () => {
	const Shops = await db.raw(`
	SELECT name,email,phone_number,rating FROM Shops;
	`);
	return Shops[0];
};
