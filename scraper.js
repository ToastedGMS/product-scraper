import puppeteer from 'puppeteer';

/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de referencia
//o valor de referencia é retirado do site do supermercado supernosso
//the map contains the product title and its reference value
//the reference value is retrieved from the supernosso supermarket website
/////////////////////////////////////////////////////////////////

const referenceArray = [
	{ brand: 'cafe_tres_coracoes_500g_tradicional', reference: 323 },
	{ brand: 'cafe_melitta_500g_tradicional', reference: 175314 },
	{ brand: 'cafe_fino_grao_500g_tradicional', reference: 93567 },
	{ brand: 'cafe_pilao_500g_extraforte', reference: 184636 },
	{ brand: 'cafe_barao_500g_extraforte', reference: 105089 },
];

async function getPrice(page, brand, reference) {
	await page.goto(`https://www.supernosso.com/${reference}`, {
		waitUntil: 'domcontentloaded',
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
			Price: priceElement ? priceElement.innerText.trim() : 'Price not found.',
		};
	});

	console.log(`${brand}`, price);
	return { brand, ...price };
}

async function scrapeAll() {
	const browser = await puppeteer.launch({
		executablePath: '/usr/bin/chromium-browser',
		headless: 'new',
		defaultViewport: { width: 1080, height: 1024 },
	});

	const page = await browser.newPage();

	const results = [];
	for (const item of referenceArray) {
		const data = await getPrice(page, item.brand, item.reference);
		results.push(data);
	}

	await browser.close();
	console.log(
		'O preço dos cafés do tipo extraforte e tradicional é igual e por isso seus valores sao requisitados juntos.'
	);
	return results;
}

scrapeAll();
