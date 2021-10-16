const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function googleAuth(tokenId) {
	try {
		const ticket = await client.verifyIdToken({
			idToken: tokenId,
			audience: process.env.GOOGLE_CLIENT_ID,
		});
		const payload = ticket.getPayload();

		let user = {
			email: payload.email,
			name: payload.name,
		};
		return user;
	} catch (err) {
		console.error(err);
		throw new Error("Google Auth Error");
	}
}

module.export = { googleAuth };
