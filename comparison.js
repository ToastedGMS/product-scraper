import supernossoScraper from './supernosso.js';
import apoioScraper from './apoio.js';

async function comparePrices() {
	const supernossoPrices = await supernossoScraper();
	const apoioPrices = await apoioScraper();

	const finalResults = {
		coffee: {
			supernosso: supernossoPrices.coffee,
			apoio: apoioPrices.coffee,
		},
		rice: {
			supernosso: supernossoPrices.rice,
			apoio: apoioPrices.rice,
		},
		beans: {
			supernosso: supernossoPrices.beans,
			apoio: apoioPrices.beans,
		},
	};

	console.log(JSON.stringify(finalResults, null, 2));
	return finalResults;
}

comparePrices();
