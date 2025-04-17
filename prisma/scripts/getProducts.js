import prisma from '../client.js';

async function getProducts(type, market) {
	try {
		console.log(
			`Getting product metadata for products of type ${type} and market ${market} from database.`
		);
		const filters = {};
		if (type) filters.type = type;
		if (market) filters.market = market;

		const productList = await prisma.product.findMany({
			where: filters,
		});

		return productList;
	} catch (error) {
		console.error(error);
	}
}

export default getProducts;
