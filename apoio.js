import fetch from 'node-fetch';

/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado apoio mineiro
//the map contains the product title and its SKU value
//the SKU value is retrieved from the apoio supermarket API
/////////////////////////////////////////////////////////////////

const coffeeSKUArray = [
	{ brand: 'cafe_tres_coracoes_500g_tradicional', SKU: 7645 },
	{ brand: 'cafe_melitta_500g_tradicional', SKU: 5583 },
	{ brand: 'cafe_fino_grao_500g_tradicional', SKU: 7618 },
	{ brand: 'cafe_pilao_500g_tradicional', SKU: 6791 },
	{ brand: 'cafe_barao_500g_tradicional', SKU: 10420 },
	{ brand: 'fake_product_test', SKU: 999999999 },
];

const riceSKUArray = [
	{ brand: 'arroz_tia_ju_tipo1_5kg', SKU: 20960 },
	{ brand: 'arroz_branco_prato_fino_tipo1_5kg', SKU: 10487 },
	{ brand: 'arroz_branco_camil_tipo1_5kg', SKU: 8140 },
	{ brand: 'arroz_polido_pilecco_nobre_tipo1_5kg', SKU: 597 },
	{ brand: 'arroz_tio_joao_tipo1_5kg', SKU: 7931 },
];

const beansSKUArray = [
	{ brand: 'feijao_carioca_pacha_1kg', SKU: 14495 },
	{ brand: 'feijao_preto_pacha_1kg', SKU: 13081 },
	{ brand: 'feijao_carioca_galante_1kg', SKU: 8159 },
	{ brand: 'feijao_carioca_vasconcelos_1kg', SKU: 125316 },
	{ brand: 'feijao_preto_vasconcelos_1kg', SKU: 123692 },
];

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

async function scrapeAll() {
	const coffeeResults = [];
	for (const item of coffeeSKUArray) {
		const data = await getPrice(item.brand, item.SKU);
		coffeeResults.push(data);
	}

	const riceResults = [];
	for (const item of riceSKUArray) {
		const data = await getPrice(item.brand, item.SKU);
		riceResults.push(data);
	}

	const beansResults = [];
	for (const item of beansSKUArray) {
		const data = await getPrice(item.brand, item.SKU);
		beansResults.push(data);
	}

	const allPrices = {
		coffee: coffeeResults,
		rice: riceResults,
		beans: beansResults,
	};
	console.log(allPrices);
	console.log(
		'Obs: Os preços dos cafés do tipo extraforte e tradicional são iguais e por isso seus valores sao requisitados juntos.'
	);
}

scrapeAll();
