import scrape from '../utils/scrape.js';
import getProducts from '../prisma/scripts/getProducts.js';
import storePrice from '../prisma/scripts/storePrice.js';
import addAveragePrice from '../prisma/scripts/addAverage.js';

import getPriceApoio from '../scrapers/apoio.js';
import getPriceCarrefour from '../scrapers/carrefour.js';
import getPriceVillefort from '../scrapers/villefort.js';

async function storePrices(req, res) {
	try {
		const markets = ['Apoio Mineiro', 'Carrefour', 'Villefort'];
		const types = ['cafe', 'arroz', 'feijao'];
		const scrapers = {
			'Apoio Mineiro': getPriceApoio,
			Carrefour: getPriceCarrefour,
			Villefort: getPriceVillefort,
		};

		const productMetadata = {};
		for (const market of markets) {
			for (const type of types) {
				const query = `${type}_${market}`;
				productMetadata[query] = await getProducts(type, market);
			}
		}

		const results = {};
		for (const market of markets) {
			const marketResults = await scrape(
				scrapers[market],
				productMetadata[`cafe_${market}`],
				productMetadata[`arroz_${market}`],
				productMetadata[`feijao_${market}`]
			);
			for (const type of types) {
				if (!results[type]) results[type] = [];
				results[type].push(...marketResults[type]);
			}
			for (const type of types) {
				console.log('Storing average price for', type);
				const priceArray = [];

				for (const result of results[type]) {
					priceArray.push(result.Price);
				}
				if (priceArray.length > 0) {
					await addAveragePrice(`${type}`, priceArray);
				} else {
					console.log(`No prices available for ${type}`);
				}
			}
		}

		const messages = [];
		console.log('Salvando preços de Café:');
		messages.push(await storePrice(results.cafe));

		console.log('Salvando preços de Arroz:');
		messages.push(await storePrice(results.arroz));

		console.log('Salvando preços de Feijão:');
		messages.push(await storePrice(results.feijao));

		res.send({
			message: 'Database prices updated.',
			details: messages,
		});
	} catch (error) {
		console.error('Error storing prices in database:', error);
		return res
			.status(500)
			.json({ error: 'Failed to store prices in database.' });
	}
}

export default storePrices;
