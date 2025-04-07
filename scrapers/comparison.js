import supernossoScraper from './supernosso.js';
import apoioScraper from './apoio.js';

const coffeeBrandArray = [
	{ brand: 'cafe_tres_coracoes_500g_tradicional' },
	{ brand: 'cafe_melitta_500g_tradicional' },
	{ brand: 'cafe_fino_grao_500g_tradicional' },
	{ brand: 'cafe_pilao_500g_tradicional/extraforte' },
	{ brand: 'cafe_barao_500g_tradicional/extraforte' },
	{ brand: 'fake_product_test' },
];

const riceBrandArray = [
	{ brand: 'arroz_tia_ju_tipo1_5kg' },
	{ brand: 'arroz_branco_prato_fino_tipo1_5kg' },
	{ brand: 'arroz_branco_camil_tipo1_5kg' },
	{ brand: 'arroz_polido_pilecco_nobre_tipo1_5kg' },
	{ brand: 'arroz_tio_joao_tipo1_5kg' },
];

const beansBrandArray = [
	{ brand: 'feijao_carioca_pacha_1kg' },
	{ brand: 'feijao_preto_pacha_1kg' },
	{ brand: 'feijao_carioca_galante_1kg' },
	{ brand: 'feijao_preto_galante_1kg' },
	{ brand: 'feijao_carioca_vasconcelos_1kg' },
	{ brand: 'feijao_preto_vasconcelos_1kg' },
];

function mergeByBrand(brands, supernossoList, apoioList) {
	const results = {};

	for (const { brand } of brands) {
		const supernossoProduct = supernossoList.find(
			(item) => item.brand === brand
		);
		const apoioProduct = apoioList.find((item) => item.brand === brand);

		results[brand] = {
			supernosso: {
				product: supernossoProduct?.Product,
				price: supernossoProduct?.Price,
			},
			apoio: { product: apoioProduct?.Product, price: apoioProduct?.Price },
		};
	}

	return results;
}

async function comparePrices() {
	const supernossoPrices = await supernossoScraper();
	const apoioPrices = await apoioScraper();

	const finalResults = {
		coffee: mergeByBrand(
			coffeeBrandArray,
			supernossoPrices.coffee,
			apoioPrices.coffee
		),
		rice: mergeByBrand(riceBrandArray, supernossoPrices.rice, apoioPrices.rice),
		beans: mergeByBrand(
			beansBrandArray,
			supernossoPrices.beans,
			apoioPrices.beans
		),
	};

	console.log(JSON.stringify(finalResults, null, 4));
	return finalResults;
}

comparePrices();
