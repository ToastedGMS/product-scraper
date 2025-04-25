import prisma from '../client.js';
const today = new Date();
today.setHours(12, 0, 0, 0); //normalize time to avoid duplicate prices being stored for the same day

async function addAveragePrice(type, priceArray) {
	if (priceArray.length === 0) {
		console.log(`No prices available for ${type}`);
		return;
	}
	const averagePrice =
		priceArray.reduce((a, b) => a + b, 0) / priceArray.length;
	try {
		const result = await prisma.averageDailyPrice.create({
			data: {
				type: type,
				price: averagePrice,
				date: today,
			},
		});
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export default addAveragePrice;
