export default async function scrape(
	getPriceFn,
	coffeeArray,
	riceArray,
	beansArray
) {
	const cafeResults = await getPriceFn(coffeeArray);

	const arrozResults = await getPriceFn(riceArray);

	const feijaoResults = await getPriceFn(beansArray);
	const allPrices = {
		cafe: cafeResults,
		arroz: arrozResults,
		feijao: feijaoResults,
	};
	console.log(
		'Obs: Os preços dos cafes do tipo extraforte e tradicional são iguais e por isso seus valores sao requisitados juntos.'
	);
	return allPrices;
}
