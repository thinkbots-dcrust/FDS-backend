import { googleAuth } from "services";
import { findAllUserSvc } from "services/usersSvc";

export async function handleGoogleAuth(req, res) {
	try {
		let user = await googleAuth(req.body.tokenId);
	} catch (err) {
		console.error(err);
		if (err.http_code === 400) {
			res.status(400).send({ error: err.message });
		} else {
			res.status(500).send({ error: "Internal Error" });
		}
	}
}

export async function createUser(req, res) {
	try {
	} catch (err) {
		console.error(err);
		if (err.http_code === 400) {
			res.status(400).send({ error: err.message });
		} else {
			res.status(500).send({ error: "Internal Error" });
		}
	}
}

export async function getAllUsers(req, res) {
	try {
		const Users = await findAllUserSvc();
		res.send({ Users });
	} catch (err) {
		console.error(err);
		if (err.http_code === 400) {
			res.status(400).send({ error: err.message });
		} else {
			res.status(500).send({ error: "Internal Error" });
		}
	}
}
