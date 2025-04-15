import prisma from '../client.js';

async function getProductsByType(type) {
	try {
		const productList = await prisma.product.findMany({
			where: {
				type: type,
			},
		});

		if (productList.length === 0) {
			throw new Error(`No products found for provided type \'${type} \'`);
		}

		return productList;
	} catch (error) {
		console.error(error);
	}
}

export default getProductsByType;
console.log(await getProductsByType('cafe'));
