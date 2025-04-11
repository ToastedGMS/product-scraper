import scrape from '../utils/scrape.js';

import cafeArrayApoio from '../data/Apoio/cafe.js';
import arrozArrayApoio from '../data/Apoio/arroz.js';
import feijaoArrayApoio from '../data/Apoio/feijao.js';
import getPriceApoio from './apoio.js';

import cafeArrayCarrefour from '../data/Carrefour/cafe.js';
import arrozArrayCarrefour from '../data/Carrefour/arroz.js';
import feijaoArrayCarrefour from '../data/Carrefour/feijao.js';
import getPriceCarrefour from './carrefour.js';

import cafeArrayVillefort from '../data/Villefort/cafe.js';
import arrozArrayVillefort from '../data/Villefort/arroz.js';
import feijaoArrayVillefort from '../data/Villefort/feijao.js';
import getPriceVillefort from './villefort.js';

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

	const villefortResults = await scrape(
		getPriceVillefort,
		cafeArrayVillefort,
		arrozArrayVillefort,
		feijaoArrayVillefort
	);

	const allResults = {
		cafe: [
			...apoioResults.cafe,
			...carrefourResults.cafe,
			...villefortResults.cafe,
		],
		arroz: [
			...apoioResults.arroz,
			...carrefourResults.arroz,
			...villefortResults.arroz,
		],
		feijao: [
			...apoioResults.feijao,
			...carrefourResults.feijao,
			...villefortResults.feijao,
		],
	};
	console.log('Café:');
	console.table(allResults.cafe);

	console.log('Arroz:');
	console.table(allResults.arroz);

	console.log('Feijão:');
	console.table(allResults.feijao);
}
console.log(await compareResults());
