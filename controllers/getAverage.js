import getAveragePrice from '../prisma/scripts/getAverage.js';

async function averagePrice(req, res) {
	const { type } = req.query;
	try {
		const averagePrice = await getAveragePrice(type);

		if (averagePrice.length === 0) {
			return res.send('No average price found for provided filters.');
		}

		return res.send(averagePrice);
	} catch (error) {
		console.error('Error retrieving average price:', error);
		return res.status(500).json({ error: 'Failed to retrieve average price.' });
	}
}

export default averagePrice;
