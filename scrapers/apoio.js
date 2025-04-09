import fetch from 'node-fetch';
import scrape from '../utils/scrape.js';
import cafeArray from '../data/Apoio/cafe.js';
import arrozArray from '../data/Apoio/arroz.js';
import feijaoArray from '../data/Apoio/feijao.js';

/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado apoio mineiro
//the map contains the product title and its SKU value
//the SKU value is retrieved from the apoio supermarket API
/////////////////////////////////////////////////////////////////

async function getPrice(productArray) {
	const results = [];

	for (const query of productArray) {
		const { brand, sku, market } = query;

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

console.log(await scrape(getPrice, cafeArray, arrozArray, feijaoArray));
