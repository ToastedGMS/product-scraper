import fetch from 'node-fetch';

async function getPrice(productArray) {
	const results = [];

	for (const query of productArray) {
		const { brand, sku, market, id } = query;

		try {
			const response = await fetch(
				`https://www.apoioentrega.com/api/catalog_system/pub/products/search?fq=skuId:${sku}`
			);
			const data = await response.json();
			const product = data[0];

			if (!product) {
				console.warn(`Produto não encontrado: ${brand}`);
				continue;
			}

			const item = product.items?.[0];
			const seller = item?.sellers?.[0];
			const offer = seller?.commertialOffer;

			results.push({
				id: id,
				Brand: brand,
				Product: product.productName || 'Desconhecido',
				Price: offer?.Price ?? 'Indisponível',
				Market: market,
			});
		} catch (error) {
			console.error(`Erro ao buscar ${brand} (SKU: ${sku}):`, error.message);
			results.push({
				Brand: brand,
				Product: 'Erro',
				Price: 'Erro',
				Market: market,
			});
		}
	}

	return results;
}

export default getPrice;
