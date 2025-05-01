import prisma from '../client.js';
import retrievePriceHistory from './priceHistory.js';

async function storePrice(productDataArray) {
	const today = new Date();
	today.setHours(12, 0, 0, 0); //normalize time to avoid duplicate prices being stored for the same day
	const messages = [];
	try {
		for (const productData of productDataArray) {
			const history = await retrievePriceHistory(
				null,
				null,
				null,
				productData.id
			);

			if (history.length === 0 || history[0].prices.length === 0) {
				// No price history at all — store the price
				await prisma.price.create({
					data: {
						productId: productData.id,
						price: productData.Price,
						date: today,
					},
				});
				console.log(
					`Stored price for ${productData.id} on database (first entry).`
				);
				messages.push(
					`Stored price for ${productData.id} on database (first entry).`
				);
			} else {
				const latestPrice = history[0].prices.at(-1).price;
				if (latestPrice != productData.Price) {
					await prisma.price.create({
						data: {
							productId: productData.id,
							price: productData.Price,
							date: today,
						},
					});
					console.log(
						`Stored price for ${productData.id} on database (price changed).`
					);
					messages.push(
						`Stored price for ${productData.id} on database (price changed).`
					);
				} else {
					console.log(`No price change for ${productData.id}.`);
					messages.push(`No price change for ${productData.id}.`);
				}
			}
		}
		return messages;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export default storePrice;
