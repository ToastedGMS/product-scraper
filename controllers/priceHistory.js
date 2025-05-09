import retrievePriceHistory from '../prisma/scripts/priceHistory.js';

async function priceHistory(req, res) {
	const { type, brand, market, id, quantity } = req.query;
	try {
		const history = await retrievePriceHistory(
			type,
			brand,
			market,
			id,
			quantity
		);

		if (history.length === 0) {
			return res.send('No price history found for provided filters.');
		}

		for (const item of history) {
			console.log(item.name);
			console.log(item.id);
			console.log(item.market);
			console.table(item.prices);
		}

		return res.send(history);
	} catch (error) {
		console.error('Error retrieving price history:', error);
		return res.status(500).json({ error: 'Failed to retrieve price history.' });
	}
}

export default priceHistory;
