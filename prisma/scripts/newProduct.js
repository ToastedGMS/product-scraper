import prisma from '../client.js';

async function newProduct(productArray) {
	try {
		for (const product of productArray) {
			await prisma.product.create({
				data: {
					id: product.id,
					name: product.name,
					type: product.type,
					brand: product.brand,
					weight: product.weight,
					variety: product.variety ? product.variety : null,
					packaging: product.packaging ? product.packaging : null,
					parboil: product.parboil ? product.parboil : null,
					sku: product.sku,
					market: product.market,
				},
			});
		}
	} catch (error) {
		console.error(error);
	}
}
