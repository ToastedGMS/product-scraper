import prisma from '../client.js';
import retrievePriceHistory from './priceHistory.js';
const today = new Date();
today.setHours(0, 0, 0, 0);

async function storePrice(productDataArray) {
	try {
		//check latest price first
		for (const productData of productDataArray) {
			const history = await retrievePriceHistory(
				null,
				null,
				null,
				productData.id
			);

			const latestPrice = history[0].prices[history[0].prices.length - 1].price;
			//only store price if a price change is detected
			if (latestPrice != productData.Price || history.length === 0) {
				await prisma.price.create({
					data: {
						productId: productData.id,
						price: productData.Price,
						date: today,
					},
				});
				console.log(`Stored price for ${productData.id} on database.`);
			} else {
				console.log(`No price change for ${productData.id}.`);
			}
		}
	} catch (error) {
		console.error(error);
	}
}

export default storePrice;
