let cachedToken = null;

async function getVillefortToken() {
	if (cachedToken) return cachedToken;

	try {
		const response = await fetch(
			'https://services.vipcommerce.com.br/api-admin/v1/auth/loja/login',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Origin: 'https://www.villefortentrega.com.br',
					Referer: 'https://www.villefortentrega.com.br/',
					organizationid: '120',
				},
				body: JSON.stringify({
					domain: 'villefortentrega.com.br',
					key: 'df072f85df9bf7dd71b6811c34bdbaa4f219d98775b56cff9dfa5f8ca1bf8469',
					username: 'loja',
				}),
			}
		);

		const res = await response.json();

		if (!res.success) {
			throw new Error(`Login failed: ${res.message || 'Unknown error'}`);
		}

		cachedToken = res.data;
		return cachedToken;
	} catch (err) {
		console.error('Failed to get Villefort token:', err.message);
		return null;
	}
}

export default getVillefortToken;
