import { createNewShopSvc, getAllShopsSvc } from "services/shopsSvc";
import { Request, Response } from "express";

export async function createNewShop(req: Request, res: Response) {
	try {
		const shopData = req.body;
		if (!shopData.name || !shopData.email || !shopData.phone_number) {
			throw new Error("Please Send All Required Shop Data");
		}
		const svcResponse = await createNewShopSvc(shopData);
		if (!(svcResponse.insertId > 0))
			throw new Error("Unable to Create Shop , Please Contact to Admin");

		res.status(200).send({ success: true, message: "New Shop Created" });
	} catch (err) {
		console.error(err);
		if (err.http_code === 400) {
			res.status(400).send({ success: false, error: err.message });
		} else {
			res.status(500).send({ success: false, error: "Internal Error" });
		}
	}
}

export async function getAllShops(req: Request, res: Response) {
	try {
		const svcResponse = await getAllShopsSvc();
		if (!svcResponse) throw new Error("Error geting shops details");
		res.status(200).send(svcResponse);
	} catch (err) {
		console.error(err);
		if (err.http_code === 400) {
			res.status(400).send({ success: false, error: err.message });
		} else {
			res.status(500).send({ success: false, error: "Internal Error" });
		}
	}
}
