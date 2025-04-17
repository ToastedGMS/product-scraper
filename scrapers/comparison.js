import scrape from '../utils/scrape.js';
import getProducts from '../prisma/scripts/getProducts.js';

import getPriceApoio from './apoio.js';
import getPriceCarrefour from './carrefour.js';
import getPriceVillefort from './villefort.js';

async function compareResults() {
	const cafeArrayApoio = await getProducts('cafe', 'Apoio Mineiro');
	const arrozArrayApoio = await getProducts('arroz', 'Apoio Mineiro');
	const feijaoArrayApoio = await getProducts('feijao', 'Apoio Mineiro');
	const cafeArrayCarrefour = await getProducts('cafe', 'Carrefour');
	const arrozArrayCarrefour = await getProducts('arroz', 'Carrefour');
	const feijaoArrayCarrefour = await getProducts('feijao', 'Carrefour');
	const cafeArrayVillefort = await getProducts('cafe', 'Villefort');
	const arrozArrayVillefort = await getProducts('arroz', 'Villefort');
	const feijaoArrayVillefort = await getProducts('feijao', 'Villefort');

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
