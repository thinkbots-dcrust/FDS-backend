const { googleAuth } = require("../services");

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
