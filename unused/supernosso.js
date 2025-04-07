import puppeteer from 'puppeteer';
import { timeout } from 'puppeteer';

/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de referencia
//o valor de referencia é retirado do site do supermercado supernosso
//the map contains the product title and its reference value
//the reference value is retrieved from the supernosso supermarket website
/////////////////////////////////////////////////////////////////

const coffeeReferenceArray = [
	{ brand: 'cafe_tres_coracoes_500g_tradicional', reference: 323 },
	{ brand: 'cafe_melitta_500g_tradicional', reference: 175314 },
	{ brand: 'cafe_fino_grao_500g_tradicional', reference: 93567 },
	{ brand: 'cafe_pilao_500g_tradicional/extraforte', reference: 183145 },
	{ brand: 'cafe_barao_500g_tradicional/extraforte', reference: 105089 },
	{ brand: 'fake_product_test', reference: 999999999 },
];

const riceReferenceArray = [
	{ brand: 'arroz_tia_ju_tipo1_5kg', reference: 10705 },
	{ brand: 'arroz_branco_prato_fino_tipo1_5kg', reference: 7440 },
	{ brand: 'arroz_branco_camil_tipo1_5kg', reference: 3090 },
	{ brand: 'arroz_polido_pilecco_nobre_tipo1_5kg', reference: 107899 },
	{ brand: 'arroz_tio_joao_tipo1_5kg', reference: 5151 },
];

const beansReferenceArray = [
	{ brand: 'feijao_carioca_pacha_1kg', reference: 159768 },
	{ brand: 'feijao_preto_pacha_1kg', reference: 159769 },
	{ brand: 'feijao_carioca_galante_1kg', reference: 6089 },
	{ brand: 'feijao_preto_galante_1kg', reference: 151206 },
	{ brand: 'feijao_carioca_vasconcelos_1kg', reference: 222841 },
	{ brand: 'feijao_preto_vasconcelos_1kg', reference: 220335 },
];

async function getPrice(page, brand, reference) {
	try {
		await page.goto(`https://www.supernosso.com/${reference}`, {
			waitUntil: 'domcontentloaded',
			timeout: 15000,
		});

		const price = await page.evaluate(() => {
			const priceElement = document.querySelector(
				'.vtex-product-price-1-x-currencyContainer'
			);
			const titleElement = document.querySelector(
				'.vtex-store-components-3-x-productBrand'
			);
			return {
				Product: titleElement
					? titleElement.innerText.trim()
					: 'Product title not found.',
				Price: priceElement
					? priceElement.innerText.trim()
					: 'Price not found.',
			};
		});
		return { brand, ...price };
	} catch (error) {
		console.error(`Error fetching ${brand}:`, error.message);
		return { brand, Product: 'Error', Price: 'Error' };
	}
}

export default async function scrapeAll() {
	const browser = await puppeteer.launch({
		executablePath: '/usr/bin/chromium-browser',
		headless: 'new',
		defaultViewport: { width: 1080, height: 1024 },
	});

	const page = await browser.newPage();

	const coffeeResults = [];
	for (const item of coffeeReferenceArray) {
		const data = await getPrice(page, item.brand, item.reference);
		coffeeResults.push(data);
	}
	const riceResults = [];
	for (const item of riceReferenceArray) {
		const data = await getPrice(page, item.brand, item.reference);
		riceResults.push(data);
	}
	const beansResults = [];
	for (const item of beansReferenceArray) {
		const data = await getPrice(page, item.brand, item.reference);
		beansResults.push(data);
	}

	const allPrices = {
		coffee: coffeeResults,
		rice: riceResults,
		beans: beansResults,
	};
	await browser.close();
	console.log(
		'Obs: Os preços dos cafés do tipo extraforte e tradicional são iguais e por isso seus valores sao requisitados juntos.'
	);

	return allPrices;
}
