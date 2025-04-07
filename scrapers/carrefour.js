import fetch from 'node-fetch';

/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado carrefour
//the map contains the product title and its SKU value
//the SKU value is retrieved from the carrefour supermarket API
/////////////////////////////////////////////////////////////////

const coffeeSKUArray = [
	{
		id: 'cafe_fort_500g',
		brand: 'Fort',
		name: 'Café Fort',
		weight: 500,
		packaging: 'pacote',
		market: 'Carrefour',
		sku: '4578',
	},
	{
		id: 'cafe_fino_grao_500g_tradicional',
		brand: 'Fino Grão',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Carrefour',
		sku: '13290',
	},
	{
		id: 'cafe_pilao_500g_extraforte',
		brand: 'Pilão',
		name: 'Café Extraforte',
		weight: 500,
		packaging: 'pacote',
		market: 'Carrefour',
		sku: '8973',
	},
	{
		id: 'cafe_pilao_500g_tradicional_vacuo',
		brand: 'Pilão',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Carrefour',
		sku: '4536',
	},
	{
		id: 'cafe_tres_coracoes_500g_tradicional_vacuo',
		brand: '3 Corações',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Carrefour',
		sku: '7488090',
	},
	{
		id: 'cafe_caboclo_500g_tradicional_vacuo',
		brand: 'Caboclo',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Carrefour',
		sku: '2653',
	},
	{
		id: 'cafe_melitta_500g_tradicional',
		brand: 'Melitta',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'unknown',
		market: 'Carrefour',
		sku: '14726',
	},
	{
		id: 'fake_product_test',
		brand: 'Product',
		name: 'Café Tradicional',
		weight: null,
		packaging: 'unknown',
		market: 'Carrefour',
		sku: '999999999',
	},
];

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
					console.log(
						`${product.brand}: ${data.name} - R$${data.offers.lowPrice}`
					);
				} else {
					console.log(`Produto não encontrado: ${product.brand}`);
				}
			}
		} catch (err) {
			console.error(`Network/Server error for ${product.brand}:`, err);
		}
	}
}

await getPrice(coffeeSKUArray);
