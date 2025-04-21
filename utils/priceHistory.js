import retrievePriceHistory from '../prisma/scripts/retrievePriceHistory.js';

async function priceHistory(...args) {
	const history = await retrievePriceHistory(...args);

	if (history.length === 0) {
		console.log('No price history found for provided filters.');
	}

	for (const item of history) {
		console.log(item.name);
		console.log(item.id);
		console.log(item.market);
		console.table(item.prices);
	}

	return history;
}

priceHistory('arroz');
