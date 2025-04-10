import scrape from '../utils/scrape.js';

import cafeArrayApoio from '../data/Apoio/cafe.js';
import arrozArrayApoio from '../data/Apoio/arroz.js';
import feijaoArrayApoio from '../data/Apoio/feijao.js';
import getPriceApoio from './apoio.js';

import cafeArrayCarrefour from '../data/Carrefour/cafe.js';
import arrozArrayCarrefour from '../data/Carrefour/arroz.js';
import feijaoArrayCarrefour from '../data/Carrefour/feijao.js';
import getPriceCarrefour from './carrefour.js';

async function compareResults() {
	const apoioResults = await scrape(
		getPriceApoio,
		cafeArrayApoio,
		arrozArrayApoio,
		feijaoArrayApoio
	);
	const carrefourResults = await scrape(
		getPriceCarrefour,
		cafeArrayCarrefour,
		arrozArrayCarrefour,
		feijaoArrayCarrefour
	);

	const allResults = {
		cafe: [...apoioResults.cafe, ...carrefourResults.cafe],
		arroz: [...apoioResults.arroz, ...carrefourResults.arroz],
		feijao: [...apoioResults.feijao, ...carrefourResults.feijao],
	};
	return allResults;
}

console.dir(await compareResults(), { depth: null });
