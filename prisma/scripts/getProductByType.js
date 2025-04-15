import prisma from '../client.js';

async function getProductByType(type) {
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

export default getProductByType;
console.log(await getProductByType('cafe'));
