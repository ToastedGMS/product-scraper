import fetch from 'node-fetch';
import scrape from '../utils/scrape.js';

/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado carrefour
//the map contains the product title and its SKU value
//the SKU value is retrieved from the carrefour supermarket API
/////////////////////////////////////////////////////////////////

const cafeSKUArray = [
	{
		id: 'cafe_fort_500g',
		type: 'cafe',
		brand: 'Fort',
		name: 'Café Fort',
		weight: 500,
		packaging: 'pacote',
		market: 'Carrefour',
		sku: '4578',
	},
	{
		id: 'cafe_fino_grao_500g_tradicional',
		type: 'cafe',
		brand: 'Fino Grão',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Carrefour',
		sku: '13290',
	},
	{
		id: 'cafe_pilao_500g_extraforte',
		type: 'cafe',
		brand: 'Pilão',
		name: 'Café Extraforte',
		weight: 500,
		packaging: 'pacote',
		market: 'Carrefour',
		sku: '8973',
	},
	{
		id: 'cafe_pilao_500g_tradicional_vacuo',
		type: 'cafe',
		brand: 'Pilão',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Carrefour',
		sku: '4536',
	},
	{
		id: 'cafe_tres_coracoes_500g_tradicional_vacuo',
		type: 'cafe',
		brand: '3 Corações',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Carrefour',
		sku: '7488090',
	},
	{
		id: 'cafe_caboclo_500g_tradicional_vacuo',
		type: 'cafe',
		brand: 'Caboclo',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Carrefour',
		sku: '2653',
	},
	{
		id: 'cafe_melitta_500g_tradicional',
		type: 'cafe',
		brand: 'Melitta',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'unknown',
		market: 'Carrefour',
		sku: '14726',
	},
	{
		id: 'fake_product_test',
		type: 'cafe',
		brand: 'Product',
		name: 'Product',
		weight: null,
		packaging: 'unknown',
		market: 'Carrefour',
		sku: '999999999',
	},
];

const arrozSKUArray = [
	{
		id: 'arroz_branco_fino_namorado_tipo1_5kg',
		type: 'arroz',
		brand: 'Namorado',
		name: 'Arroz Branco Fino Namorado Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Carrefour',
		sku: '5854',
	},
	{
		id: 'arroz_branco_fino_broto_legal_tipo1_5kg',
		type: 'arroz',
		brand: 'Broto Legal',
		name: 'Arroz Branco Fino Broto Legal Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Carrefour',
		sku: '4774',
	},
	{
		id: 'arroz_branco_longo_albaruska_tipo1_5kg',
		type: 'arroz',
		brand: 'Albaruska',
		name: 'Arroz Branco Longo Albaruska Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Carrefour',
		sku: '2377',
	},
	{
		id: 'arroz_branco_longo_fino_tipo1_emporio_sao_joao_5kg',
		type: 'arroz',
		brand: 'Emporio Sao Joao',
		name: 'Arroz Branco Longo Fino Emporio Sao Joao Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Carrefour',
		sku: '13402',
	},
	{
		id: 'arroz_longo_fino_tipo1_pateko_5kg',
		type: 'arroz',
		brand: 'Pateko',
		name: 'Arroz Tipo 1 Longo Fino Patéko 5kg',
		weight: 5,
		parboil: false,
		market: 'Carrefour',
		sku: '18078',
	},
	{
		id: 'arroz_longo_fino_alegrete_tipo1_5kg',
		type: 'arroz',
		brand: 'Alegrete',
		name: 'Arroz Longo Fino Tipo 1 Polido Alegrete 5Kg',
		weight: 5,
		parboil: false,
		market: 'Carrefour',
		sku: '9412',
	},
	{
		id: 'arroz_branco_pilecco_nobre_tipo1_5kg',
		type: 'arroz',
		brand: 'Pilecco Nobre',
		name: 'Arroz Branco Tipo 1 Pilecco Nobre 5Kg',
		weight: 5,
		parboil: false,
		market: 'Carrefour',
		sku: '11337',
	},
	{
		id: 'arroz_parboilizado_longo_fino_carrefour_tipo1_5kg',
		type: 'arroz',
		brand: 'Carrefour',
		name: 'Arroz Parboilizado Longo Fino Carrefour Tipo 1 5kg',
		weight: 5,
		parboil: true,
		market: 'Carrefour',
		sku: '318566065',
	},
];

const feijaoSKUArray = [
	{
		id: 'feijao_carioca_tryumpho_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Tryumpho',
		name: 'Feijão Carioca Tryumpho 1kg',
		weight: 1,
		market: 'Carrefour',
		sku: '4735174',
	},
	{
		id: 'feijao_carioca_nobre_vasconcelos_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Vasconcelos',
		name: 'Feijão Carioca Nobre Vasconcelos 1kg',
		weight: 1,
		market: 'Carrefour',
		sku: '7034834',
	},
	{
		id: 'feijao_carioca_galante_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Galante',
		name: 'Feijão Carioca Galante 1kg',
		weight: 1,
		market: 'Carrefour',
		sku: '6206368',
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

console.log(
	await scrape(getPrice, cafeSKUArray, arrozSKUArray, feijaoSKUArray)
);
