import prisma from '../client.js';
const today = new Date();
today.setHours(12, 0, 0, 0); // Normalize time to avoid duplicate prices being stored for the same day

async function addAveragePrice(type, priceArray) {
	if (priceArray.length === 0) {
		console.log(`No prices available for ${type}`);
		return;
	}
	const averagePrice =
		priceArray.reduce((a, b) => a + b, 0) / priceArray.length;

	const roundedPrice = Math.round(averagePrice * 100) / 100;

	try {
		// Check if the average price for the product type already exists for today
		const existingPrice = await prisma.averageDailyPrice.findUnique({
			where: {
				productType_date: {
					productType: type,
					date: today,
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
				date: today,
			},
		});

		console.log(`Stored average price for ${type}: ${roundedPrice}`);
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export default addAveragePrice;
