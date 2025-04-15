import prisma from '../client.js';

async function getProductsByMarket(market) {
	try {
		const productList = await prisma.product.findMany({
			where: {
				market: market,
			},
		});

		if (productList.length === 0) {
			throw new Error(`No products found for provided market \'${market} \'`);
		}

		return productList;
	} catch (error) {
		console.error(error);
	}
}

export default getProductsByMarket;
console.log(await getProductsByMarket('Apoio Mineiro'));
