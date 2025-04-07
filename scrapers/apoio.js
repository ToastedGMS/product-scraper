import fetch from 'node-fetch';

/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado apoio mineiro
//the map contains the product title and its SKU value
//the SKU value is retrieved from the apoio supermarket API
/////////////////////////////////////////////////////////////////

const coffeeSKUArray = [
	{
		id: 'cafe_tres_coracoes_500g_tradicional',
		brand: '3 Corações',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '7645',
	},
	{
		id: 'cafe_pilao_500g_tradicional',
		brand: 'Pilão',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '6791',
	},
	{
		id: 'cafe_barao_500g_tradicional',
		brand: 'Barão',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '10420',
	},
	{
		id: 'cafe_nova_suissa_500g_tradicional',
		brand: 'Nova Suissa',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '18386',
	},
	{
		id: 'cafe_fino_grao_500g_tradicional',
		brand: 'Fino Grão',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '7618',
	},
	{
		id: 'cafe_caboclo_tradicional_500g',
		brand: 'Caboclo',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '20147',
	},
	{
		id: 'cafe_dom_pedro_500g_tradicional',
		brand: 'Dom Pedro',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '128881',
	},
	{
		id: 'cafe_fort_500g',
		brand: 'Fort',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '75',
	},
	{
		id: 'cafe_uniao_500g_tradicional',
		brand: 'União',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '123323',
	},
	{
		id: 'cafe_pilao_500g_tradicional_vacuo',
		brand: 'Pilão',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Apoio Mineiro',
		sku: '10534',
	},
	{
		id: 'cafe_tres_coracoes_500g_tradicional_vacuo',
		brand: '3 Corações',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Apoio Mineiro',
		sku: '7646',
	},
	{
		id: 'cafe_melitta_500g_tradicional',
		brand: 'Melitta',
		name: 'Café Tradicional',
		weight: 500,
		packaging: 'unknown',
		market: 'Apoio Mineiro',
		sku: '5583',
	},
	{
		id: 'fake_product_test',
		brand: 'Product',
		name: 'Café Tradicional',
		weight: null,
		packaging: 'unknown',
		market: 'Apoio Mineiro',
		sku: '999999999',
	},
];

// const riceSKUArray = [
// 	{ brand: 'arroz_tia_ju_tipo1_5kg', SKU: 20960 },
// 	{ brand: 'arroz_branco_prato_fino_tipo1_5kg', SKU: 10487 },
// 	{ brand: 'arroz_branco_camil_tipo1_5kg', SKU: 8140 },
// 	{ brand: 'arroz_polido_pilecco_nobre_tipo1_5kg', SKU: 597 },
// 	{ brand: 'arroz_tio_joao_tipo1_5kg', SKU: 7931 },
// ];

// const beansSKUArray = [
// 	{ brand: 'feijao_carioca_pacha_1kg', SKU: 14495 },
// 	{ brand: 'feijao_preto_pacha_1kg', SKU: 13081 },
// 	{ brand: 'feijao_carioca_galante_1kg', SKU: 8159 },
// 	{ brand: 'feijao_carioca_vasconcelos_1kg', SKU: 125316 },
// 	{ brand: 'feijao_preto_vasconcelos_1kg', SKU: 123692 },
// ];
//commented out for due reformatting

async function getPrice(brand, SKU) {
	try {
		const response = await fetch(
			`https://www.apoioentrega.com/api/catalog_system/pub/products/search?fq=skuId:${SKU}`
		);
		const data = await response.json();
		const product = data[0];

		const item = product.items[0];
		const seller = item.sellers[0];
		const offer = seller.commertialOffer;

		const price = {
			Product: product.productName,
			Price: offer.Price,
			// availableQuantity: offer.AvailableQuantity,
			// url: product.link,
		};

		return { brand, ...price };
	} catch (error) {
		console.error(`Error fetching ${brand} (SKU: ${SKU}):`, error.message);
		return { brand, Product: 'Error', Price: 'Error' };
	}
}

export default async function scrapeAll() {
	const coffeeResults = [];
	for (const item of coffeeSKUArray) {
		const data = await getPrice(item.brand, item.sku);
		coffeeResults.push(data);
	}

	// const riceResults = [];
	// for (const item of riceSKUArray) {
	// 	const data = await getPrice(item.brand, item.SKU);
	// 	riceResults.push(data);
	// }

	// const beansResults = [];
	// for (const item of beansSKUArray) {
	// 	const data = await getPrice(item.brand, item.SKU);
	// 	beansResults.push(data);
	// }

	const allPrices = {
		coffee: coffeeResults,
		// rice: riceResults,
		// beans: beansResults,
	};
	console.log(
		'Obs: Os preços dos cafés do tipo extraforte e tradicional são iguais e por isso seus valores sao requisitados juntos.'
	);
	return allPrices;
}
