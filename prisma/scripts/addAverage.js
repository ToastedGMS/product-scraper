import prisma from '../client.js';

async function addAveragePrice(type, priceArray) {
	if (priceArray.length === 0) {
		console.log(`No prices available for ${type}`);
		return;
	}

	const averagePrice =
		priceArray.reduce((a, b) => a + b, 0) / priceArray.length;

	const roundedPrice = Math.round(averagePrice * 100) / 100;

	// Set start and end of today
	const startOfDay = new Date();
	startOfDay.setHours(0, 0, 0, 0);

	const endOfDay = new Date();
	endOfDay.setHours(23, 59, 59, 999);

	try {
		// Check if the average price for the product type already exists for today
		const existingPrice = await prisma.averageDailyPrice.findFirst({
			where: {
				productType: type,
				date: {
					gte: startOfDay,
					lte: endOfDay,
				},
			},
		});

		if (existingPrice) {
			console.log(
				`Average price for ${type} already exists for today, skipping...`
			);
			return;
		}

		const result = await prisma.averageDailyPrice.create({
			data: {
				productType: type,
				price: roundedPrice,
				date: new Date(), // Current timestamp
			},
		});

		console.log(`Stored average price for ${type}: ${roundedPrice}`);
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export default addAveragePrice;
