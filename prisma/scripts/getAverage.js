import prisma from '../client.js';

async function getAveragePrice(type) {
	try {
		const averagePrice = await prisma.averageDailyPrice.findMany({
			where: {
				productType: type,
			},
			orderBy: {
				date: 'asc',
			},
		});

		return { type, averagePrice };
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export default getAveragePrice;
