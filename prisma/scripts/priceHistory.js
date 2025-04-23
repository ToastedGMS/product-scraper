import prisma from '../client.js';

async function retrievePriceHistory(type, brand, market, id) {
	try {
		const filters = {};
		if (type) filters.type = type;
		if (brand) filters.brand = brand;
		if (market) filters.market = market;
		if (id) filters.id = id;
		console.log(`Getting price history for provided filters.`);

		const priceHistory = await prisma.product.findMany({
			where: filters,
			select: {
				id: true,
				name: true,
				market: true,
				prices: {
					select: {
						price: true,
						date: true,
					},
				},
			},
		});

		return priceHistory;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export default retrievePriceHistory;
