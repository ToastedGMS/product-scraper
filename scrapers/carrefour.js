import fetch from 'node-fetch';
import scrape from '../utils/scrape.js';
import cafeArray from '../data/Carrefour/cafe.js';
import arrozArray from '../data/Carrefour/arroz.js';
import feijaoArray from '../data/Carrefour/feijao.js';

const GRAPHQL_QUERY = `
  query BrowserProductQuery($locator: [LocatorInput!]!) {
    product(locator: $locator) {
      name
      offers {
        lowPrice
      }
    }
  }
`;

async function getPrice(productArray) {
	const results = [];

	for (const product of productArray) {
		const variables = {
			locator: [
				{ key: 'id', value: `${product.sku}` },
				{
					key: 'channel',
					value:
						'{"salesChannel":2,"regionId":"v2.040910A0C07CE54F376E80736D221282"}',
				},
				{ key: 'locale', value: 'pt-BR' },
				{ key: 'region-id', value: 'v2.040910A0C07CE54F376E80736D221282' },
			],
		};

		const body = {
			operationName: 'BrowserProductQuery',
			query: GRAPHQL_QUERY,
			variables,
		};

		try {
			const res = await fetch('https://mercado.carrefour.com.br/api/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});

			const result = await res.json();

			if (result.errors) {
				console.error(`Error for ${product.brand}:`, result.errors);
			} else {
				const data = result.data?.product;
				if (data) {
					results.push({
						Brand: product.brand,
						Product: data.name,
						Price: data.offers.lowPrice,
						Market: product.market,
					});
				} else {
					console.log(`Produto não encontrado: ${product.brand}`);
				}
			}
		} catch (err) {
			console.error(`Network/Server error for ${product.brand}:`, err);
		}
	}
	return results;
}

console.log(await scrape(getPrice, cafeArray, arrozArray, feijaoArray));
