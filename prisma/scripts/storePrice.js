import prisma from '../client.js';
const today = new Date();
today.setHours(0, 0, 0, 0);

async function storePrice(productDataArray) {
	try {
		for (const productData of productDataArray) {
			await prisma.price.create({
				data: {
					productId: productData.id,
					price: productData.Price,
					date: today,
				},
			});
			console.log(`Stored price for ${productData.id} on database.`);
		}
	} catch (error) {
		console.error(error);
	}
}

export default storePrice;
