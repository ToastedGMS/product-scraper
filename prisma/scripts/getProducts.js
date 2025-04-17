import prisma from '../client.js';

async function getProducts(type, market) {
	try {
		console.log(
			`Getting product metadata for products of type ${type} and market ${market} from database.`
		);
		const productList = await prisma.product.findMany({
			where: {
				type: type != null ? type : null,
				market: market != null ? market : null,
			},
		});

		if (productList.length === 0) {
			throw new Error(
				`No products found for provided parameters \'${type}\' and \'${market}\'`
			);
		}

		return productList;
	} catch (error) {
		console.error(error);
	}
}

export default getProducts;
